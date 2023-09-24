import db from "../config/database.js";
import { DataTypes } from 'sequelize';

const Organisasi = db.define('organisasi', {
    id_organisasi: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
    id_person: { // Define the foreign key field
        type: DataTypes.INTEGER,
        references: {
            model: 'data_diri', // Reference the DataDiri model
            key: 'id_person', // Reference the id_person field in DataDiri
        },
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