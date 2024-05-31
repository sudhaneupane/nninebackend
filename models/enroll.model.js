// models/enroll.model.js
'use strict';
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js'; // Adjust the path to your database configuration

class Enroll extends Model {
    // Define associations here if necessary
    static associate(models) {
        // associations can be defined here
    }
}

Enroll.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    levelOfEducation: {
        type: DataTypes.STRING,
        allowNull: true
    },
    courses: {
        type: DataTypes.JSON,
        allowNull: false
    },
    schoolCollegeName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    message: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'Enroll',
});

export default Enroll;
