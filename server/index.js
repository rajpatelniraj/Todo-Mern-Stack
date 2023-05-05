// import express from "express";

// import cors from 'cors';

// import Routes from './routes/route.js';

// // import Connection from "./database/db.js";
// import "./database/db.js";


// const app = express();

// app.use(cors());

// app.use('/, Routes');
// app.use(express.json());
// app.use(express.urlencoded({ extended: true}))


// const PORT = 8000;

// // Connection();

// app.listen(PORT, () => {
//     console.log(`Server Connected Successfully on PORT: ${PORT}`);
//   });

import express from "express";
import cors from 'cors';
import bodyParser from "body-parser";


import Routes from './routes/route.js';
import "./database/db.js";

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true}))
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true}))
app.use(Routes);

const PORT = 8000;

app.listen(PORT, () => {
    console.log(`Server Connected Successfully on PORT: ${PORT}`);
  });