import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database.js'; // Import your Sequelize instance
class Student extends Model {
  static associate(models) {
    // associations can be defined here
  }
}

Student.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true,
  },
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
    type: DataTypes.INTEGER, // Assuming courseId is a UUID in PostgreSQL
    allowNull: true, // Adjust as needed
    references: {
      model: 'Courses', // Adjust to match the table name of your Course model
      key: 'id' // Adjust to match the primary key of your Course model
    }
  }
}, {
  sequelize,
  modelName: 'Student', // Adjust as needed, true if you want timestamps
});

export default Student;
