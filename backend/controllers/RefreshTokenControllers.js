import Akun from '../models/AkunModels.js';
import jwt from 'jsonwebtoken';

export const refreshToken = async(req, res) => {
    try {
        const refreshTokens = req.cookies.refreshToken;
        if(!refreshTokens){
            return res.sendStatus(401);
        }

        const user = await Akun.findAll({
            where: {
                refresh_token: refreshTokens
            }
        });

        if(!user){
            return res.sendStatus(403);
        }

        jwt.verify(refreshTokens, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if(err)return res.sendStatus(403);

            const id_akun = user[0].id_akun;
            const nama = user[0].nama;
            const username_akun = user[0].username;
            const role_akun = user[0].role;

            const accessToken = jwt.sign({id_akun, nama, username_akun, role_akun}, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '15s'
            });

            res.json({accessToken: accessToken});
        });

    } catch (error) {
        console.log(error);
    }
}