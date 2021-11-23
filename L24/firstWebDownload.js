let minimist = require("minimist");
let fs = require("fs");
let axios = require("axios");

let args = minimist(process.argv);

let downldKaPromise = axios.get(args.url);
downldKaPromise.then(function(response){
    
    let html = response.data;
    fs.writeFileSync(args.dest,html,"utf-8");

}).catch(function(response){
    console.log("error aagya");
})