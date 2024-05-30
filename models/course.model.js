'use strict'
import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';// Import your Sequelize instance

class Course extends Model {
  // Define associations here if necessary
  static associate(models) {
    // associations can be defined here
  }
}
Course.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true, 
    autoIncrement: true, 
  },
  startDate: {
    type: DataTypes.STRING, // Adjust data type as needed for PostgreSQL
    allowNull: false,
  },
  courseName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  teacherName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  sequelize,
  modelName: 'Course', // Adjust as needed, true if you want timestamps
});
export default Course;
