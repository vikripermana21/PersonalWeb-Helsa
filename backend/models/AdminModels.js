import db from "../config/database.js";
import { DataTypes } from 'sequelize';

const Admin = db.define('admin', {
    // Definisikan kolom dalam model yang sesuai dengan kolom di tabel "admins"
    id_admin: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
}, {
    // Nama tabel yang sesuai dengan nama tabel di database
    tableName: 'admin',
    timestamps: false,
    freezeTableName:true
});

export default Admin;

(async () => {
    await db.sync();
})();






