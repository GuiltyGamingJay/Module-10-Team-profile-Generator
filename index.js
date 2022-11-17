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
const { isBuffer } = require("util");


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

//add employee
const addemployee = ()=>{
    console.log(`
    ###########################
    Adding employee to the team
    ###########################
    `)
    return inquirer.prompt([
        {
            type:"list",
            name:"role",
            choices:["Engineer", "Intern"]
        },
        {
            type:"input",
            name:"name",
            message:"What is the name of the engineer of the team?",
        },
        {
            type:"input",
            name:"ID",
            message:"What is the engineer employee ID?",
        },
        {
            type:"input",
            name:"email",
            message:"what is the engineer email address?",
        },
        {
            type:"input",
            name:"github",
            when: (input) => input.role === "Engineer",
            message:"What is the Github username of the engineer?",
        },
        {
            type:"input",
            name:"school",
            when: (input) => input.role === "Intern",
            message:"What is the school of the intern?",
        },
        {
            type: "confirm",
            name:"oneMore",
            message:"Would you like to add one more employee to the team?",
            default: false
        }
    ])
    .then (employeeInput=>{
        let {name, ID, email, role, github, school, oneMore} = employeeInput;
        let employee;
        
        // assigning to engineer
        if (role === "Engineer"){
            employee = new Engineer (name, ID, email, github);
            console.log(employee)
        }
        
        // assinging to intern
        if (role === "Intern"){
            employee = new Intern (name, ID, email, school);
            console.log(employee)
        }

        team.push(employee);

        // if want to add one more employee, run addEmployee again
        if (oneMore) {
            return addEmployee(team);
        }
        else{
            return team;
        }
    })
}

//generate Html
const WritFile = data =>{
    fs.writefile("./dist/index.html", data, err=>{
        isBuffer(err){
            console.log(err)
        }
        else{
            console.log("Success!!! Your team profile has been generated ! Please check the index.html")
        }
    })
}

//step of the function in command line
addmanager()
    .then (addemployee)
    .then (team=>{
        return generateHtml(team);
    })
    .then (pageHtml=>{
        return writefile(pageHtml);
    })
    .catch(err=>{
        console.log(err);
    })

