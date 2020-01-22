// Keep these lines; they're important!
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Name:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email:'
    },
    {
        type: 'input',
        name: 'id',
        message: 'ID:'
    },

    {
        type: 'input',
        name: 'school',
        message: 'Where does the Intern go to school?'
    },


]
const start = [
    {
        type: 'confirm',
        name: 'makeName',
        message: 'Would you like to add to your team?'

    },
    {
        type: 'list',
        name: 'role',
        message: 'What is their role?',
        choices: ['Manager', 'Engineer', 'Intern',],

    }]
const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Name:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email:'
    },
    {
        type: 'input',
        name: 'id',
        message: 'ID:'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office number?'

    },
    
]
const engineerQuestions = [{
    type: 'input',
    name: 'name',
    message: 'Name:'
},
{
    type: 'input',
    name: 'email',
    message: 'Email:'
},
{
    type: 'input',
    name: 'id',
    message: 'ID:'
},
{
    type : 'input',
    name : 'github',
    message : 'GitHub link:'
}


]

const employees = []


const outputPath = path.resolve(__dirname, "output", "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

function addEmployee (){inquirer
    .prompt(start)
    .then(({ makeName, role }) => {
        if (makeName) {
            
                if (role === 'Manager'){ 
                    inquirer
                        .prompt(managerQuestions)
                        .then((data) => {
                            const manager = new Manager(data.name,data.id,data.email,data.officeNumber)
                            employees.push(manager)
                            console.log(employees)
                            addEmployee()
                            
                        })}

                if(role === 'Intern') {
                    inquirer
                        .prompt(internQuestions)
                        .then((data) => {
                            const intern = new Intern (data.name,data.id,data.email,data.school)
                            employees.push(intern)
                            console.log(employees)
                            addEmployee()
                        
                        })}
                if(role === 'Engineer') {
                    inquirer
                        .prompt(engineerQuestions)
                        .then((data) => {
                            const engineer = new Engineer (data.name,data.id,data.email,data.github)
                            employees.push(engineer)
                            console.log(employees)
                            addEmployee()
                        })}
            }
            else {
                const html = render(employees)
                console.log(html)
            }        })
        }
        addEmployee()

   
 //question one Would you like to add an employee? or Generate Team (list yes/no )
 //if yes then ask for a role (list ) use a switch here maybe 
 //

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!

