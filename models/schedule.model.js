"use strict";

import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database.js";

class Schedule extends Model {
  // Define associations here if necessary
  static associate(models) {
    //associations can define here
  }
}
Schedule.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    CourseID: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    ScheduleID: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    ClassDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    StartTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    EndTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },

    InstructorID: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Schedule",
  }
);
export default Schedule;
