import pkg from 'pg';
const { Client } = pkg;
const connectDB = async () => {
  const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });

  try {
    await client.connect();
    console.log("Connected to PostgreSQL database");

    const res = await client.query('SELECT NOW()');
    console.log('Query result:', res.rows);
  } catch (err) {
    console.error('Connection or query error', err.stack);
  } finally {
    await client.end();
  }
};

export default connectDB
