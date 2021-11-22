//call back is notihng but passing function as a argument in another function
//t1 read a file
//t2 calculate primes

let minimist = require("minimist");
let fs = require("fs");
let args = minimist(process.argv);

function IsPrime(x)
{
    let isPrime = true;
    for(let div = 2;div <= x;div++)
    {
        if(x%div==0)
        {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}

//Task1 be
let t1 = Date.now();
console.log("Startign task1 " + t1%1000000);
//console.log(args.source);
//letstext=fs.readFileSync(args.source,"utf-8");
//by using callback

fs.readFile(args.source, function(data){let t2 = Date.now();
    console.log("Ending task1 at "+ t2%1000000);
    console.log("Tiem taken for task1 " + ((t2%1000000)-(t1%1000000))%1000000);  
});

//task 1 end


//task2 starts in parallel

t3 = Date.now();
console.log("Starting task2 at " + t3%1000000);
let arr = [];

for(let i = 2;i<args.n ;i++)
{
    let isPrime = IsPrime(i);
    if(isPrime == true)
    {
        arr.push(i);
    }
}

t4 = Date.now();
console.log("ending task2 at " + t4%1000000);
console.log("Tiem taken for task 2 -> " + ((t4%1000000)-(t3%1000000))%1000000);

//console.log("Tiem taken for task1 and task 2-> " + ((t4%1000000)-(t1%1000000))%1000000);
// console.log(args.dest);
// console.log(args.n);