// import { DataTypes,Model } from 'sequelize';
// import sequelize from '../config/database.js'; // Import your Sequelize instance
// class Attendance extends Model{
//   static associate(models) {
//     // associations can be defined here
// }

// }

// Attendance.init({
//   id:{
//     type:DataTypes.INTEGER,
//     autoIncrement:true,
//     primaryKey:true,

//   },
//     date: {
//       type: DataTypes.DATE,
//       allowNull: false,
//     },
//     employeeId: {
//       type: DataTypes.INTEGER, // Assuming employeeId is a UUID in PostgreSQL
//       allowNull: false,
//       references: {
//         model: 'Employees', // Adjust to match the table name of your Employee model
//         key: 'id' // Adjust to match the primary key of your Employee model
//       }
//     },
//     time: {
//       type: DataTypes.STRING,
//     },
//     studentId: {
//       type: DataTypes.INTEGER, // Assuming studentId is a UUID in PostgreSQL
//       allowNull: true,
//       references: {
//         model: 'Students', // Adjust to match the table name of your Student model
//         key: 'id' // Adjust to match the primary key of your Student model
//       }
//     },
//     status: {
//       type: DataTypes.ENUM('present', 'absent', 'late'),
//       defaultValue: 'present',
//     },
//     comments: {
//       type: DataTypes.STRING,
//     },
//     duration: {
//       type: DataTypes.STRING,
//     },
//   }, {
//     tableName: 'Attendances', 
//     timestamps: true, 
//   });


// export default Attendance;
