//t1 = read a file
//t2 = Calculate primes
//t3 = Write a file
//t4 = Calculate square of primes

//node FirstLackOfCallback.js --source=f1.txt --dest=f2.txt --n=5000




let minimist = require("minimist");
let fs = require("fs");

let args = minimist(process.argv);

//Task1 be
let t1 = Date.now();
console.log("Startign task1" + t1%1000000);
console.log(args.source);
let stext = fs.readFileSync(args.source,"utf-8");
let t2 = Date.now();
console.log("Ending task1 at "+ t2%1000000);
console.log("Tiem taken for task1" + ((t2%1000000)-(t1%1000000))%1000000);
// console.log(args.dest);
// console.log(args.n);



/*

*/ 


//////////////////////////////////////////////task2
//t1 = read a file
//t2 = Calculate primes
//t3 = Write a file
//t4 = Calculate square of primes

//node FirstLackOfCallback.js --source=f1.txt --dest=f2.txt --n=5000

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

t3 = Date.now();
console.log("Starting task2 at " + t3%1000000);

let arr = [];
for(let i = 2;i<args.n ;i++)
{
    let isPrime = IsPrime(i);
    if(isPrime == true){
        arr.push(i);
    }
}

t4 = Date.now();
console.log("ending task2 at " + t4%1000000);
console.log("Tiem taken for task 2 -> " + ((t4%1000000)-(t3%1000000))%1000000);
console.log("Tiem taken for task1 and task 2-> " + ((t4%1000000)-(t1%1000000))%1000000);