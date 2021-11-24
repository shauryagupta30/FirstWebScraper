let minimist = require("minimist");
let fs = require("fs");


let args = minimist(process.argv);
//get all the arguments

//JSON = Javascript object notation
//JSON saving data same as Javascript format

//This is an object
let s1 = {
    name:"Shaurya",
    age:23
};

let s2 = {
    name:"Gupta",
    age:24
};


let stdns = [s1,s2]; //this is javascript object only
//This is only JSO


//this is Json --finally
let json = JSON.stringify(stdns);//JSO to JSON

fs.writeFileSync(args.dest,json,"utf-8");

