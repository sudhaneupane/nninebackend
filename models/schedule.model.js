import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database.js";

class Schedule extends Model {
  //define association if necessary
  static associate(models) {
    //define association here
  }
}

Schedule.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    CourseId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Courses",
        key: "id",
      },
    },
    InstructorId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Instructors",
        key: "id",
      },
    },

    ClassDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    StartTime: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    EndTime: {
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
