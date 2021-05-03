const mongoose = require("mongoose");
const db = require("./models");

// This file empties the developer collection and inserts the developer below

// mongoose.connect(
//   process.env.MONGODB_URI ||
//   "mongodb://localhost/project_manager"
// );

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project_manager",
{ 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,

}
);

const developerSeed = [
  {
    devName: "Adam",
    devRoles: [
        {
          roleName: "Network",
          roleLevel: "Senior",
          privileges: "Admin"
        },
        {
        roleName: "Oracle",
        roleLevel: "Junior",
        privileges: "user"
        }
    ],
    currentProjects: [
      {
        projectName: "Project-54",
        projectStartDate: "2021-05-22",
        projectEndDate: 	"2021-09-22"
      },
      {
        projectName: "Project-52",
        projectStartDate: "2021-04-01",
        projectEndDate: 	"2021-10-05"
      }
    ]
  },
  {
    devName: "Sam",
    roleName: [
      {
        roleName: "JavaScript",
        roleLevel: "Senior",
        privileges: "user"
      },
      {
        roleName: "Oracle",
        roleLevel: "Junior",
        privileges: "user"
      }
    ],
    currentProjects: [
      {
        projectName: "Project-54",
        projectStartDate: "2021-05-22",
        projectEndDate: 	"2021-09-22"
      },
      {
        projectName: "Project-52",
        projectStartDate: "2021-04-01",
        projectEndDate: 	"2021-10-05"
      }
    ]
  }
]


db.Developer.deleteMany({})
  .then(() => db.Developer.collection.insertMany(developerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });



  const techStackSeed = [
      {
        name: "JavaScript",
        Description: "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions" }, 
		{
			stackName: "MongoDB",
			stackDescription: "MongoDB, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions"
		},
		{
			stackName: "React",
			stackDescription: "the ECMAScript specification. JavaScript is high-level, often just-in-time compiled"
		},
		{
			stackName: "Nodejs",
			stackDescription: "the ECMAScript specification. JavaScript is high-level, often just-in-time compiled"
		},
		{
			stackName: "Network",
			stackDescription: "the ECMAScript specification. JavaScript is high-level, often just-in-time compiled"
		},
		{
			stackName: "Shift Left",
			stackDescription: "the ECMAScript specification. JavaScript is high-level, often just-in-time compiled"
		},
		{
			stackName: "AWS",
			stackDescription: "the ECMAScript specification. JavaScript is high-level, often just-in-time compiled"
		},
		{
			stackName: "Big Data Analytic",
			stackDescription: "the ECMAScript specification. JavaScript is high-level, often just-in-time compiled"
		}
]


db.TechStack.deleteMany({})
  .then(() => db.TechStack.collection.insertMany(techStackSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


  const projectSeed = [
    {
      projectName: "Project1",
      description: "Project description",
      projectStartDate: "2021-05-22",
      projectEndDate: "2021-09-22",
  
      reqTechStacks: [{
          reqTechStacks: "JavaScript12345",
          techStackName: "JavaScript",
          numOfDev: 5,
          taskStartDate: "2021-05-22",
          taskEndDate: "2021-09-22"
        },
        {
          reqTechStacks: "MongoDB12345",
          techStackName: "MongoDB",
          numOfDev: 4,
          taskStartDate: "2021-05-22",
          taskEndDate: "2021-09-22"
        },
        {
          reqTechStacks: "React12345",
          techStackName: "React",
          numOfDev: 3,
          taskStartDate: "2021-05-22",
          taskEndDate: "2021-09-22"
        },
        {
          reqTechStacks: "NodeJS12345",
          techStackName: "NodeJs",
          numOfDev: 6,
          taskStartDate: "2021-05-22",
          taskEndDate: "2021-09-22"
        },
        {
          reqTechStacks: "CSS12345",
          techStackName: "CSS",
          numOfDev: 2,
          taskStartDate: "2021-05-22",
          taskEndDate: "2021-09-22"
        }
      ],
      "developers": [{
          developerName: "john",
          roleLevel: "senior"
        },
        {
          developerName: "Ali",
          roleLevel: "mideleve"
        },
        {
          developerName: "Adam",
          roleLevel: "senior"
        },
        {
          developerName: "Leila",
          roleLevel: "mideleve"
        },
        {
          developerName: "Fred",
          roleLevel: "junior"
        },
        {
          developerName: "Suzan",
          roleLevel: "senior"
        }
      ]
    },
    {
  
      projectName: "Project2",
      description: "Project description",
      projectStartDate: "2021-05-22",
      projectEndDate: "2021-09-22",
  
      "techStack": [{
  
          reqTechStacks: "Network12345",
          techStackName: "Network",
          numOfDev: 4,
          taskStartDate: "2021-05-22",
          taskEndDate: "2021-09-22"
        },
        {
          reqTechStacks: "Network12345",
          techStackName: "Container",
          numOfDev: 4,
          taskStartDate: "2021-05-22",
          taskEndDate: "2021-09-22"
        },
  
        {
          reqTechStacks: "Network12345",
          techStackName: "Shift Left",
          numOfDev: 6,
          taskStartDate: "2021-05-22",
          taskEndDate: "2021-09-22"
        },
        {
          reqTechStacks: "Network12345",
          techStackName: "AWS",
          numOfDev: 6,
          taskStartDate: "2021-05-22",
          taskEndDate: "2021-09-22"
        }
      ],
      "developers": [{
          techStackName: "Daniel",
          roleLevel: "senior"
        },
        {
          techStackName: "Ali",
          roleLevel: "mideleve"
        },
        {
          techStackName: "Fred",
          roleLevel: "senior"
        },
        {
          techStackName: "Zaid",
          roleLevel: "mideleve"
        },
        {
          techStackName: "Fred",
          roleLevel: "junior"
        },
        {
          techStackName: "Suzan",
          roleLevel: "senior"
        }
      ]
    },
    {
  
      projectName: "Project54",
      description: "Project description",
      projectStartDate: "2021-05-22",
      projectEndDate: "2021-09-22",
  
      "techStack": [{
  
          reqTechStacks: "Network12345",
          techStackName: "Network",
          numOfDev: 4,
          taskStartDate: "2021-05-22",
          taskEndDate: "2021-09-22"
        },
        {
          reqTechStacks: "Network12345",
          techStackName: "Container",
          numOfDev: 4,
          taskStartDate: "2021-05-22",
          taskEndDate: "2021-09-22"
        },
        {
          reqTechStacks: "Network12345",
          techStackName: "Big Data",
          numOfDev: 3,
          taskStartDate: "2021-05-22",
          taskEndDate: "2021-09-22"
        },
        {
          reqTechStacks: "Network12345",
          techStackName: "Shift Left",
          numOfDev: 6,
          taskStartDate: "2021-05-22",
          taskEndDate: "2021-09-22"
        },
        {
          reqTechStacks: "Network12345",
          techStackName: "AWS",
          numOfDev: 6,
          taskStartDate: "2021-05-22",
          taskEndDate: "2021-09-22"
        }
      ],
      "developers": [{
  
      }]
    }
  ]


db.Project.deleteMany({})
.then(() => db.Project.collection.insertMany(projectSeed))
.then(data => {
  console.log(data.result.n + " records inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});