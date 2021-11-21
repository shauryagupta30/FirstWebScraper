let minimist = require("minimist");
// node FirstFiles.js --source=f1.txt --dest=f2.txt


let args = minimist(process.argv);//minimist processes arguments to args

let fs = require("fs");//already present

//step 1 read
let stext = fs.readFileSync(args.source, "utf-8");

//capitalize the words  
let words = stext.split(" ");

for(let i = 0;i<words.length;i++)
{
    words[i] = words[i].toUpperCase();
}

let dtext = words.join(" ");
fs.writeFileSync(args.dest,dtext,"utf-8");



//write the text into destination file



