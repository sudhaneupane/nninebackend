import { DataTypes } from 'sequelize';
import sequelize from 'sequelize'; // Import your Sequelize instance

const StudentModel = (sequelize) => {
  const Student = sequelize.define('Student', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true, // Adjust as needed
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    courseId: {
      type: DataTypes.UUID, // Assuming courseId is a UUID in PostgreSQL
      allowNull: true, // Adjust as needed
      references: {
        model: 'Course', // Adjust to match the table name of your Course model
        key: 'id' // Adjust to match the primary key of your Course model
      }
    }
  }, {
    tableName: 'students', // Adjust the table name as needed
    timestamps: true // Adjust as needed, true if you want timestamps
  });

  return Student;
};

export default StudentModel;
