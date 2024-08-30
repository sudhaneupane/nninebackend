"use strict";
import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.js"; 

class OTP extends Model {
  static associate(models) {}
}
OTP.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    otp: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    timestamp: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    modelName: "OTP", // Adjust as needed, true if you want timestamps
  }
);
export default OTP;
