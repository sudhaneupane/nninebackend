import { DataTypes } from 'sequelize';
import sequelize from 'sequelize'; // Import your Sequelize instance

const AttendanceModel = (sequelize) => {
  const Attendance = sequelize.define('Attendance', {
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    employeeId: {
      type: DataTypes.UUID, // Assuming employeeId is a UUID in PostgreSQL
      allowNull: false,
      references: {
        model: 'Employee', // Adjust to match the table name of your Employee model
        key: 'id' // Adjust to match the primary key of your Employee model
      }
    },
    time: {
      type: DataTypes.STRING,
    },
    studentId: {
      type: DataTypes.UUID, // Assuming studentId is a UUID in PostgreSQL
      allowNull: true,
      references: {
        model: 'Student', // Adjust to match the table name of your Student model
        key: 'id' // Adjust to match the primary key of your Student model
      }
    },
    status: {
      type: DataTypes.ENUM('present', 'absent', 'late'),
      defaultValue: 'present',
    },
    comments: {
      type: DataTypes.STRING,
    },
    duration: {
      type: DataTypes.STRING,
    },
  }, {
    tableName: 'attendances', // Adjust the table name as needed
    timestamps: true, // Adjust as needed, true if you want timestamps
  });

  return Attendance;
};

export default AttendanceModel;
