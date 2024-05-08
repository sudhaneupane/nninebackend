import connectDB from './db/index.js'
import {app} from './app.js';
import dotenv from 'dotenv'
dotenv.config({
    path: './.env'
})

connectDB().then(()=>{
    app.listen(process.env.port || 8000,()=>{
        console.log('App is running on port 8000');
    }
    )
}).catch((err)=>{
    console.log(`Mongodb connection failed err::${err}`);

})