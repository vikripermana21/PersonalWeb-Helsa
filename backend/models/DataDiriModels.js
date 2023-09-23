// DataDiriModels.js
import db from "../config/database.js";
import { DataTypes } from 'sequelize';
import Pendidikan from './PendidikanModels.js'; // Import the Pendidikan model
import Portofolio from './PortoModels.js'; // Import the Portofolio model
import Skill from './SkillModels.js'; // Import the Skill model
import Organisasi from './OrganisasiModels.js'; // Import the Organisasi model

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
}, {
    tableName: 'data_diri',
    timestamps: false,
    freezeTableName: true
});

// Create associations with other models using their respective foreign keys
DataDiri.hasMany(Pendidikan, { foreignKey: 'id_person' });
DataDiri.hasMany(Portofolio, { foreignKey: 'id_person' });
DataDiri.hasMany(Skill, { foreignKey: 'id_person' });
DataDiri.hasMany(Organisasi, { foreignKey: 'id_person' });

export default DataDiri;

(async () => {
    await db.sync();
})();
