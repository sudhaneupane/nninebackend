'use strict';
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js'; // Adjust the path to your database configuration

class Question extends Model {
    // Define associations here if necessary
    static associate(models) {
        // associations can be defined here
    }
}

Question.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    question:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    sub:{
        type:DataTypes.STRING,
        allowNull:false,
    }

}, {
    sequelize,
    modelName: 'Question',
});

export default Question;