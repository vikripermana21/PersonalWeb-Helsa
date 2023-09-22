import db from "../config/database.js";
import { DataTypes } from 'sequelize';
// harus import model data diri buat ambil id_person

const Pendidikan = db.define('pendidikan', {
    id_pendidikan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_person: {
        type: DataTypes.INTEGER,
    },
    instansi_pendidikan: {
        type: DataTypes.STRING,
    },
    jurusan: {
        type: DataTypes.STRING,
    },
    tahun_mulai_ajaran: {
        type: DataTypes.DATE,
    },
    tahun_akhir_ajaran: {
        type: DataTypes.DATE,
    },
}, {
    // Nama tabel yang sesuai dengan nama tabel di database
    tableName: 'pendidikan',
    timestamps: false,
    freezeTableName: true
});

export default Pendidikan;

(async () => {
    await db.sync();
})();