import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.js"; // Import your Sequelize instance

class Course extends Model {
  // Define associations here if necessary
  static associate(models) {
    // associations can be defined here
  }
}
Course.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING, // Adjust data type as needed for PostgreSQL
      allowNull: false,
    },
    Description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Course", // Adjust as needed, true if you want timestamps
  }
);
export default Course;
