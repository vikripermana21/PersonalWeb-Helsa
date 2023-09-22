import db from "../config/database.js";
import { DataTypes } from 'sequelize';
// harus import model pendidikan, organisasi, portofolio, dan skill buat ambil id_pendidikan, id_organisasi, id_portofolio, dan id_skill

const DataDiri = db.define('data_diri', {
    id_person: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    photo: {
        type: DataTypes.STRING,
    },
    nama_depan: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nama_belakang: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tempat_lahir: {
        type: DataTypes.STRING,
    },
    tanggal_lahir: {
        type: DataTypes.DATE,
    },
    usia: {
        type: DataTypes.INTEGER,
    },
    tinggi_badan: {
        type: DataTypes.DECIMAL(5, 2),
    },
    berat_badan: {
        type: DataTypes.DECIMAL(5, 2),
    },
    alamat: {
        type: DataTypes.STRING,
    },
    agama: {
        type: DataTypes.STRING,
    },
    jenis_kelamin: {
        type: DataTypes.STRING,
    },
    nomor_handphone: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
    },
    status: {
        type: DataTypes.STRING,
    },
    id_pendidikan: {
        type: DataTypes.INTEGER,
    },
    id_organisasi: {
        type: DataTypes.INTEGER,
    },
    id_portofolio: {
        type: DataTypes.INTEGER,
    },
    id_skill: {
        type: DataTypes.INTEGER,
    },
}, {
    // Nama tabel yang sesuai dengan nama tabel di database
    tableName: 'data_diri',
    timestamps: false,
    freezeTableName: true
});

export default DataDiri;

(async () => {
    await db.sync();
})();
