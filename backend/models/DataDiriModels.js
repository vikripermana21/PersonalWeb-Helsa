import db from "../config/database.js";
import { DataTypes } from 'sequelize';
import Porto from './PortoModels.js';
import Organisasi from './OrganisasiModels.js';
import Pendidikan from './PendidikanModels.js';
import Skill from './SkillModels.js';

const DataDiri = db.define('data_diri', {
    id_person: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    foto: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tempat_lahir: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tanggal_lahir: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    usia: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    tinggi_badan: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    berat_badan: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    alamat: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    agama: {
        type: DataTypes.ENUM('Islam', 'Kristen', 'Hindu', 'Buddha', 'Konghucu', 'Lainnya'),
        allowNull: false,
        defaultValue: 'Lainnya',
    },
    jenis_kelamin: {
        type: DataTypes.ENUM('Male', 'Female'),
        allowNull: false,
        defaultValue: 'Male',
    },
    telp:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    // Nama tabel yang sesuai dengan nama tabel di database
    tableName: 'data_diri',
    timestamps: false,
    freezeTableName:true
});

DataDiri.hasMany(Porto, {
    foreignKey: 'id_portofolio', // Nama field yang digunakan sebagai kunci asing di model DataDiri
    onDelete: 'CASCADE', // Opsi: mengatur tindakan saat DataDiri dihapus
});

DataDiri.hasMany(Organisasi, {
    foreignKey: 'id_organisasi', // Nama field yang digunakan sebagai kunci asing di model DataDiri
    onDelete: 'CASCADE', // Opsi: mengatur tindakan saat DataDiri dihapus
});

DataDiri.hasMany(Pendidikan, {
    foreignKey: 'id_pendidikan', // Nama field yang digunakan sebagai kunci asing di model DataDiri
    onDelete: 'CASCADE', // Opsi: mengatur tindakan saat DataDiri dihapus
});

DataDiri.hasMany(Skill, {
    foreignKey: 'id_skill', // Nama field yang digunakan sebagai kunci asing di model DataDiri
    onDelete: 'CASCADE', // Opsi: mengatur tindakan saat DataDiri dihapus
});

export default DataDiri;

(async () => {
    await db.sync();
})();