//node json.js --source=teams2.js
let minimist = require("minimist");
let fs = require("fs");


let args = minimist(process.argv);

fs.readFile(args.source,"utf-8",function(err,json){
    if(err)
    {
        console.log("error aagya");
    }
    else{
        console.log(json);
        //to access the properties 
        //convert the string JSON to JSO
        let teams123 = JSON.parse(json);

    }
})

//for printing/Saving convert JSO to JSON
//for manipulating convert JSON to JSO for example extracting numbers,strings,characters etc using [[JSON.parse]]