//node firstexcel.js --source=teams1.json --dest=teams.xls
//npm install excel4node

let minimist = require("minimist");
let fs = require("fs");
let excel = require("excel4node");

let args = minimist(process.argv);
console.log(args.source);

let teamsJSON = fs.readFileSync(args.source,"utf-8");
let teams = JSON.parse(teamsJSON);


let wb = new excel.Workbook();
for(let i = 0;i<teams.length;i++)
{
    wb.addWorksheet(teams[i].name);
}
wb.write(args.dest);

// console.log(teams);
// console.log(teamsJSON);
