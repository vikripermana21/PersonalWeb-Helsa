import db from "../config/database.js";
import { DataTypes } from 'sequelize';
// harus import model data diri buat ambil id_person

const Skill = db.define('skill', {
    id_skill: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_person: {
        type: DataTypes.INTEGER,
    },
    nama_skill: {
        type: DataTypes.STRING,
    },
    capability: {
        type: DataTypes.STRING,
    },
}, {
    // Nama tabel yang sesuai dengan nama tabel di database
    tableName: 'skill',
    timestamps: false,
    freezeTableName:true
});

export default Skill;

(async () => {
    await db.sync();
})();