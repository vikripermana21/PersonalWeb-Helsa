import db from "../config/database.js";
import { DataTypes } from 'sequelize';
// harus import model data diri buat ambil id_person

const Organisasi = db.define('organisasi', {
    id_organisasi: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    id_person: {
        type: DataTypes.INTEGER,
    },
    nama_organisasi: {
        type: DataTypes.STRING,
    },
    posisi: {
        type: DataTypes.STRING,
    },
    tanggal_mulai_menjabat: {
        type: DataTypes.DATE,
    },
    tanggal_akhir_menjabat: {
        type: DataTypes.DATE,
    },
}, {
    // Nama tabel yang sesuai dengan nama tabel di database
    tableName: 'organisasi',
    timestamps: false,
    freezeTableName:true
});

export default Organisasi;

(async () => {
    await db.sync();
})();