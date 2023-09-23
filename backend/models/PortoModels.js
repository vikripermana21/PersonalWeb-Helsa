// PortoModels.js
import db from "../config/database.js";
import { DataTypes } from 'sequelize';

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
    id_person: { // Define the foreign key field
        type: DataTypes.INTEGER,
        references: {
            model: 'data_diri', // Reference the DataDiri model
            key: 'id_person', // Reference the id_person field in DataDiri
        },
    },
}, {
    tableName: 'portofolio',
    timestamps: false,
    freezeTableName: true
});

export default Portofolio;

(async () => {
    await db.sync();
})();
