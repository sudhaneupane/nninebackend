'use strict';
import { DataTypes } from 'sequelize';

export default (sequelize) => {
  const Enrollment = sequelize.define('Enrollment', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
    schoolCollegeName: {
      type: DataTypes.STRING,
    },
    levelOfEducation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    courses: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
    }
  }, {
    timestamps: true,
    tableName: 'enrollments'
  });

  return Enrollment;
};
