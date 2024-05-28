import { DataTypes } from 'sequelize';
import sequelize from 'sequelize'; // Import your Sequelize instance

const CourseModel = (sequelize) => {
  const Course = sequelize.define('Course', {
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
    tableName: 'courses', // Adjust the table name as needed
    timestamps: false // Adjust as needed, true if you want timestamps
  });

  return Course;
};

export default CourseModel;
