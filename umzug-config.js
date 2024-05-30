// umzug-config.js
import { Sequelize } from 'sequelize';
import { Umzug, SequelizeStorage } from 'umzug';
import path from 'path';

const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  database: 'postgres',
  username: 'postgres',
  password: 'Ming@123'
});

const umzug = new Umzug({
  migrations: {
    glob: path.resolve('migrations/*.js'),
    resolve: ({ name, path }) => {
      const migration = require(path);
      return {
        name,
        up: async (queryInterface, Sequelize) => migration.up(queryInterface, Sequelize),
        down: async (queryInterface, Sequelize) => migration.down(queryInterface, Sequelize)
      };
    }
  },
  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({ sequelize }),
  logger: console
});

export default umzug;
