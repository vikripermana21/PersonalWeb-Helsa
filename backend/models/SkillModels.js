// SkillModels.js
import db from "../config/database.js";
import { DataTypes } from 'sequelize';

const Skill = db.define('skill', {
    id_skill: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nama_skill: {
        type: DataTypes.STRING,
    },
    capability: {
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
    tableName: 'skill',
    timestamps: false,
    freezeTableName: true
});

export default Skill;

(async () => {
    await db.sync();
})();
