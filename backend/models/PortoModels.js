import db from "../config/database.js";
import { DataTypes } from 'sequelize';
// harus import model data diri buat ambil id_person

const Portofolio = db.define('portofolio', {
    id_portofolio: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nama_portofolio: {
        type: DataTypes.STRING,
    },
    file_portofolio: {
        type: DataTypes.STRING,
    },
}, {
    // Nama tabel yang sesuai dengan nama tabel di database
    tableName: 'portofolio',
    timestamps: false,
    freezeTableName:true
});

export default Portofolio;

(async () => {
    await db.sync();
})();