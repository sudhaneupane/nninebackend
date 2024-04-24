import express from 'express';

const app = express();//created express app::

app.use(express.json())//accept the json from frontend

// Serve static files from the "public" directory
app.use(express.static("public"));

export {app}