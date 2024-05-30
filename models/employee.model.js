'use strict'
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';// Import your Sequelize instance

class Employee extends Model {
  // Define associations here if necessary
  static associate(models) {
    // associations can be defined here
  }
}
Employee.init({
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,

    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
       

    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    address:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    },
    {
    sequelize,
    modelName: 'Employees',
  
})
export default Employee