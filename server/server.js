import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import developerRoutes from "./routes/developers.js";
import techstackRoutes from "./routes/techstacks.js";
import projectRoutes from "./routes/projects.js";

// import projectRoutes from '../server/routes/projects.js'

const app = express();





app.use(express.json({ limit: "30", extend: true }))
app.use(express.urlencoded({ limit: "30", extend: true }))
// app.use(bodyParser.json({ limit: '30mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

/*  every route inside projects.js, it is going to start with 
projects --> localhost:5000/projects
Because we added the prefix /projects
here we are adding /projects to all routes localhost:5000/projects
*/
app.use('/projects', projectRoutes);
app.use('/projects', developerRoutes);
app.use('/projects', techstackRoutes);


const CONNECTION_URL = 'mongodb+srv://projectadmin:javascript@cluster0.o4nz7.mongodb.net/projectsmanager?retryWrites=true&w=majority';
   //const CONNECTION_URL = 'mongodb+srv://admin1:javascript123@cluster0.o4nz7.mongodb.net/projectadmin?retryWrites=true&w=majority';

const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);