//node module
const inquirer = require("inquirer");
const fs = require("fs");

//Team Profiles
const manager = require("./library/manager");
const engineer = require("./library/engineer");
const intern = require("./library/intern");
const employee = require("./library/employee");
// Generate Html
const generateHtml = require("./Src/htmlTemplate");
const {rejects} = require("assert");


//Array for all team members
const teamArray = [];

//Manager Prompts
const addmanager = ()=>{
    return inquirer.createPromptModule([
        {
            type:"input",
            name:"name",
            message:"what is the name of the manager of the team?",
        },{
            type:"input",
            name:"name",
            message:"what is the managers employee ID?",
        },
        {
            type:"input",
            name:"officenumber",
            message:"what is the managers email address?",
        },
        {
           type:"input",
           name:"name",
           message:"what is the office number?",
        }
    ])
//manager input function
    .then (managerIput=>{
        const{name,ID,email,officeNumber} = managerInput;
        const manager = new Manager(name, ID, emailm officeNumber);
        team.push(manager);
        console.log(manager);

    })
}


