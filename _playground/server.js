const express = require("express");
const mongoose = require("mongoose");
const developerRouter = require("../routes/api/developerRoutes");
const techstacksRouter = require("../routes/api/techstackRoutes");
const projectRouter = require("../routes/api/projectRoutes");


const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// const CONNECTION_URL = 'mongodb+srv://projectadmin:javascript@cluster0.o4nz7.mongodb.net/projectsmanager?retryWrites=true&w=majority';

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project_manager",
{ 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,

}
);

app.use(developerRouter);
app.use(techstacksRouter);
app.use(projectRouter);

app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});


/*
Access to fetch at 'http://localhost:5000/api/projects' from origin 'http://localhost:8081' has been blocked by CORS policy: 
No 'Access-Control-Allow-Origin' header is present on the requested resource. If an opaque response serves your needs, set
the request's mode to 'no-cors' to fetch the resource with CORS disabled.
*/