//node firstFolderCreate.js --source=teams.json --dest=root 
let minimist = require("minimist");
let fs = require("fs");
let excel = require("excel4node");
let path = require("path");//make folder path notation OS independent

let args = minimist(process.argv);

//this is the string[only string operation possible]
let teamsJSON = fs.readFileSync(args.source, "utf-8");

//this is the JSON for manipulating the data
let teams = JSON.parse(teamsJSON);

for (let i = 0; i < teams.length; i++) {
    let folderName = path.join(args.dest, teams[i].name);
    fs.mkdirSync(folderName);//this makes folder(s)
}


