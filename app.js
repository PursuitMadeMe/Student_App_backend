//Define the ROUTE and Handlers

//adding EXPRESS node to handle HTTP request *ERROR* Express spelled WRONG
const express = require("express");
//REQUIRE - import the data from students.json file (Acces to Student Data)
const studentData = require("./studentData.json");

//create an instance of EXPRESS in our app
const app = express();

//Define our ROUTES
// - Health Check ROUTE : GET Method = '/' (Home) Path
app.get("/", (request, response) => {
  //invoke HANDLER Function()
  response.status(200).json({ data: "Service is running!" });
  // SUCCESSFUL - RESPOND with 200 status = OK and Message(Body) in Json format Key ALWAYS called data:
});

// - METHOD: GET(Read ALL) & PATH: /STUDENTS
// - CATCH:ERROR
app.get("/students", (request, response) => {
  //TRY                 Function HANDLER
  try {
    //Create var for ALL students data in JSON
    const { students } = studentData;
    //REQUEST list of students => RESPOND W/ 200 status :OK -  Body of students.json data{}
    response.status(200).json({ data: students });
    //Restart node server.js - localhost:888/students - GET request in Terminal - Inspect(Network) - POSTMAN

    //CATCH Error => RESPOND W/ 500 status : DID NOT GET DATA - Body Error Message in json form{}
  } catch (err) {
    response.status(500).json({ err: err.message });
  }
});

// - METHOD: GET/:id(Read ONE) & PATH: /STUDENTS: 11
// - CONDITIONAL: Student{id} ELSE Error Message
app.get("/students/:id", (request, response) => {
  // TRY                   function HANDLER
  try {
    //Create var for student params{id} JSON
    const { id } = request.params;
    //Create var for ALL students data in JSON
    const { students } = studentData;
    //Create var for student that matches the student params{id}
    const student = students.find((student) => student.id === id);

    //Condition - if you find the student W/ params{id}
    if (student) {
      // RESPOND W/ 200 status :OK -  Body of student{id}.json
      response.status(200).json({ data: student });
    } else {
      // if NOT found RESPOND W/ 400 status :  - Body with Error Message
      response
        .status(404)
        .json({ error: `No student data found with id:${id}` });
    }
    //Restart node server.js - localhost:888/students/11 - GET/:id - Inspect(Network) - POSTMAN

    //CATCH Error => RESPOND W/ 500 status : DID NOT GET DATA - Body Error Message in json form{}
  } catch (err) {
    response.status(500).json({ err: err.message });
  }
});

module.exports = app;
