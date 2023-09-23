import db from "../config/database.js";
import { DataTypes } from 'sequelize';
import Porto from './PortoModels.js';

const Personal = db.define('personal', {
    id_person: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    photo: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    date_of_birth: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    religion: {
        type: DataTypes.ENUM('Islam', 'Kristen', 'Hindu', 'Buddha', 'Konghucu', 'Lainnya'),
        allowNull: false,
        defaultValue: 'Lainnya',
    },
    gender: {
        type: DataTypes.ENUM('Male', 'Female'),
        allowNull: false,
        defaultValue: 'Male',
    },
    phone:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        field: 'email_index',
    },
    status:{
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    // Nama tabel yang sesuai dengan nama tabel di database
    tableName: 'personal',
    timestamps: false,
    freezeTableName:true
});

Personal.hasMany(Porto, {
    foreignKey: 'id_portofolio', // Nama field yang digunakan sebagai kunci asing di model DataDiri
    onDelete: 'CASCADE', // Opsi: mengatur tindakan saat DataDiri dihapus
});

export default Personal;

(async () => {
    await db.sync();
})();