//npm install jsdom
//node firstProcessingHTML.js --source=sample.html
let minimist = require("minimist");
let fs = require("fs");
let jsdom = require("jsdom");
//this will load html and prepare the dom for programmer just like browser
//dom is a objecto ka tree based data structure containing ..whole html page. 
//made by the browser made for programmer so that programmer can interact with the view of the page

let args = minimist(process.argv);
fs.readFile(args.source,"utf-8" , function(err,data){
    
    let JSDOM = jsdom.JSDOM;
    let dom = new JSDOM(data);
    let document = dom.window.document;

    //document is my friend,using this I can access any thing I want in the whole page

    //broswer ke 2 kaam hote hai: render webpage for the viewer
    //other task is to make a(DOM) tree for the prograamer to acess the contents of the page
    //dom -> window + document
  
    //node firstWebDownload.js --dest="download.html" --url="https://www.espncricinfsdfvso.com/series/icc-cricket-world-cup-2019-1144415/match-results"
    let desc = document.querySelectorAll("div.match-info > div.description");

    for(let i=0;i<desc.length; i++)
    {console.log(desc[i].textContent);}

});