'use strict'
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';// Import your Sequelize instance

class ansQuiz extends Model {
  // Define associations here if necessary
  static associate(models) {
    // associations can be defined here
  }
}
ansQuiz.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,

    },
    questionId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Questions',
            key: 'id' 
      }
    },
    INA1:{
        type:DataTypes.STRING,
        allowNull:false
    },
    INA2:{
        type:DataTypes.STRING,
        allowNull:false
    },
    INA3:{
        type:DataTypes.STRING,
        allowNull:true
    },
    CA:{
        type:DataTypes.STRING,
        allowNull:false,
    }
    },
    {
    sequelize,
    modelName: 'AnswerQuiz',
  
})
export default ansQuiz