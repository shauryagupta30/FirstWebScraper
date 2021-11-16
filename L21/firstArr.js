let clargs = process.argv;
let n = parseInt(clargs[2]);
let arr = []; //


for(let i = 0;i<n;i++)
{
    let val = parseInt(clargs[i+3]);
    //clargs[0]->node
    //clargs[1]->filename
    //array starts from 2
    arr.push(val);
}
for(let i = 0;i<arr.length;i++)
{
    console.log(arr[i]);
}
console.log(arr);