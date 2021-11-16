let clargs = process.argv;
let n = parseInt(clargs[2]);
//the first 2 elements of clargs are wasted

for(let i  = 1;i<=n;i++)
{
    let isPrime = prime(i);
    if(isPrime == true)
    {
        console.log(i);
    }
}

function prime(x)
{
    let isPrime = true;
    for(let div = 2;div*div <= x;div++)
    {
        if(x%div == 0)
        {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}