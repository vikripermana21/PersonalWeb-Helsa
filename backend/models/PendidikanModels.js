// PendidikanModels.js
import db from "../config/database.js";
import { DataTypes } from 'sequelize';

const Pendidikan = db.define('pendidikan', {
    id_pendidikan: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
    id_person: { // Define the foreign key field
        type: DataTypes.INTEGER,
        references: {
            model: 'data_diri', // Reference the DataDiri model
            key: 'id_person', // Reference the id_person field in DataDiri
        },
    },
}, {
    tableName: 'pendidikan',
    timestamps: false,
    freezeTableName: true
});


export default Pendidikan;

(async () => {
    await db.sync();
})();
