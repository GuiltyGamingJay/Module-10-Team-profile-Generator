//node module
const inquirer = require("inquirer");
const fs = require("fs");
//constants for team members
const manager = require("./library/manager");
const engineer = require("./library/engineer");
const intern = require("./library/intern");
const employee = require("./library/employee");

const generateHtml = require("./Src/htmlTemplate");
const {rejects} = require("assert");
//array for all team members
const teamARR = [];

