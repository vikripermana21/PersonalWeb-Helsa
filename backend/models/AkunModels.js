
import db from "../config/database.js";
import { DataTypes } from 'sequelize';

const Akun = db.define('akun', {
    // Definisikan kolom dalam model yang sesuai dengan kolom di tabel "admins"
    id_akun: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nama: {
        type: DataTypes.STRING,
    },
    username: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    role: {
        type: DataTypes.ENUM('Admin', 'User'),
        allowNull: false,
        defaultValue: 'User',
    },
}, {
    // Nama tabel yang sesuai dengan nama tabel di database
    tableName: 'akun',
    timestamps: false,
    freezeTableName:true
});

export default Akun;

(async () => {
    await db.sync();
})();