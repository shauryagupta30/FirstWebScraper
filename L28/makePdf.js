//node firstPDF.js --source=teams1.json --dest=root
let minimist = require("minimist");
let fs = require("fs");
let pdf = require("pdf-lib");
let path = require("path");//make folder path notation OS independent
let args = minimist(process.argv);
let teamsJSON = fs.readFileSync(args.source, "utf-8");
let teams = JSON.parse(teamsJSON);

for (let i = 0; i < teams.length; i++) {
    let teamFN = path.join(args.dest, teams[i].name);
    fs.mkdirSync(teamFN);
    for (let j = 0; j < teams[i].matches.length; j++) {
        let matchFIleName = path.join(teamFN, teams[i].matches[j].opponent + ".pdf");
        createScoreCard(teams[i].name, teams[i].matches[j], matchFIleName);
    }
}
function createScoreCard(teamName, match, matchFIleName) {
    //This folder create PDF for match in appropriate folder with correct details
    //  console.log(teamName);
    //  console.log(match);
    //  console.log(matchFIleName);

    let t1 = teamName;
    let t2 = match.opponent;
    let result = t1 + " " + match.result;

    let pdfDocument = pdf.PDFDocument;
    //pls load the pdf from the the filesystem
    let templateBytes = fs.readFileSync("Template.pdf");
    let promiseTOLoadBytes = pdf.PDFDocument.load(templateBytes);
    //this returns promise
    //create promise


    //when promise completes do this function
    promiseTOLoadBytes.then(function (pdfdoc) {
        //load
        let page = pdfdoc.getPage(0);
        //write
        //page.drawText(result);
        page.drawText(t1,{
            x: 320,
            y:695,
            size:10
        });
        page.drawText(t2,{
            x: 320,
            y:680,
            size:10
        });
        page.drawText(result,{
            x: 320,
            y:666,
            size:10
        });
        //save

        let promiseToSave = pdfdoc.save();
        promiseToSave.then(function (changedBytes) {
            fs.writeFileSync(matchFIleName, changedBytes)
        })
    });

}
//for PDF we takea a template