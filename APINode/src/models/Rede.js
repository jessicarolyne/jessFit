import { Sequelize, DataTypes } from "sequelize";
import conectaNaDatabase from "../config/dbConnect.js";

const sequelize = await conectaNaDatabase();

const Rede = sequelize.define('Rede', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cnpj: {
        type: DataTypes.STRING(),
        allowNull: false,
        unique: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'redes',
    timestamps: false
});

export default Rede;