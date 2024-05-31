import { Sequelize, DataTypes } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from a .env file

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || 'postgres', // Default to 'postgres'
    port: process.env.DB_PORT,
    logging: false, // Set to true for debugging
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false, // Enforce valid server certificate
        // Reference path to CA certificate stored on the server (replace with actual path)
        ca: process.env.SSL
      },
    },
  }
);

export default sequelize; // Export for use in other parts of your application
