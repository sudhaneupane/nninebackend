import express from 'express';

const app = express();//created express app::

app.use(express.json())//accept the json from frontend

// Serve static files from the "public" directory
app.use(express.static("public"));
//router import :
import courseRouter from './routes/course.route'

//router declaration ::
app.use('/api/v1/courses',courseRouter)

export {app}