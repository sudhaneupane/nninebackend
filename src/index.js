import { app } from './app.js';
import dotenv from 'dotenv'
import sequelize from '.././config/database.js'; 
dotenv.config({
    path: './.env'
})

sequelize.sync()
  .then(() => {
      app.listen(process.env.port || 8000, () => {
          console.log('App is running on port 8000');
        })
        console.log('Database synced successfully');
  })
  .catch((error) => console.error('Error syncing database:', error));


