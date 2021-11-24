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

    let b2 = document.querySelector(".b");
    console.log(b2.textContent);

    //scrap all the buttons
    let btns = document.querySelectorAll("button");
    console.log(btns[0].textContent);//output is awesome1
    console.log(btns[1].textContent);//output is awesome2
    //scrap only one buttons
    let btns1 = document.querySelector("button");
});