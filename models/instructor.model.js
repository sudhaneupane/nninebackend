import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js"; // Import your Sequelize instance

class Instructor extends Model {
  //Define associations if necessary here

  static associate(models) {
    //association can define here
  }
}

Instructor.init(
  {
    id: {
      type: DataTypes.STRING,
      autoIncrement: true,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING, //adjust datatypes as per database requirement
      allowNull: false,
    },

    Email: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    Phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Instructor", // Adjust as your choice
  }
);

export default Instructor;
