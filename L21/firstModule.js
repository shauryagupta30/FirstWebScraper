let parser = require('minimist')
let args = parser(process.argv)

let name = args.y;
let age = args.x;

if(age > 30)
{
    console.log("out");
}
else{
    console.log("in");
}

console.log(args);
//node ./firstModule.js -x 4 -y 10
//node ./firstModule.js --x=4 --y="Shaurya"
let parser = require('minimist');
let args = parser(process.argv);

console.log(args);
