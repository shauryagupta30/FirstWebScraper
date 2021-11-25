//node firstexcel.js --source=teams1.json --dest=teams.xls
//npm install excel4node

let minimist = require("minimist");
let fs = require("fs");
let excel = require("excel4node");
const { FORMERR } = require("dns");

let args = minimist(process.argv);
console.log(args.source);

let teamsJSON = fs.readFileSync(args.source,"utf-8");
let teams = JSON.parse(teamsJSON);


let wb = new excel.Workbook();
let hs = wb.createStyle({
    font:{
        color:"red",
    }
})
for(let i = 0;i<teams.length;i++)
{
    let sheet = wb.addWorksheet(teams[i].name);
    sheet.cell(1,1).string("Opponent");
    sheet.cell(1,2).string("result"); 

    //FOR EACH TEAM 
    for(let j = 0;j<teams[i].matches.length;j++)
    {
        let vs = teams[i].matches[j].opponent;
        let result = teams[i].matches[j].result;
        //console.log(result);
        sheet.cell(j+2,1).string(vs);
        sheet.cell(j+2,2).string(result);
    }

}
wb.write(args.dest);

// console.log(teams);
// console.log(teamsJSON);

//worksheet ke andar result place karn ehai
