import mongoose from 'mongoose';
// import dotenv from 'dotenv';

import j from "../env.json" assert {type:'json'};
// dotenv.config();

// const Connection = () => {

//     const MONGODB_URI = `mongodb+srv://rajpatelniraj:<password>@mern-todolist.i0ce7eq.mongodb.net/?retryWrites=true&w=majority`;


//     mongoose.connect(MONGODB_URI, 
//         { 
//         useNewUrlParser: true,
//         useCreateIndex: true,
//         useUnifiedTopology: true 
//     });


//     mongoose.connection.on('connected', () => {
//         console.log('Database connected successfully');
//     })


//     mongoose.connection.on('disconnected', () => {
//         console.log('Database disconnected');

//     })

//     mongoose.connection.on('error', () => {
//         console.log('Error while connecting with the database' , error.message );
//     })
   
// }
let url = j.url;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true, 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })
// export default Connection;

