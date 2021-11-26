//node firstPDF.js --source=teams1.json --dest=root
let minimist = require("minimist");
let fs = require("fs");
let pdf = require("pdf-lib");
let path = require("path");
//make folder path notation OS independent
let args = minimist(process.argv);
let teamsJSON = fs.readFileSync(args.source,"utf-8");
let teams = JSON.parse(teamsJSON);
for(let i = 0;i<teams.length;i++)
{
    let teamFolder = path.join(args.dest,teams[i].name);
    for(let j = 0;j < teams[i].matches.length;j++)
    {
        let fileName = path.join(teamFolder,teams[i].matches[j].opponent + ".pdf");
        fs.writeFileSync(fileName,"","utf-8");
    }
}//for PDF we takea a template