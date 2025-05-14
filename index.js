// const sc=require('fs');
// const contents1=sc.readFileSync('a.txt','utf-8');
// console.log(contents1);
// const contents2=sc.readFileSync('b.txt','utf-8');
// console.log(contents2); 


// const fs=require('fs');
// function print(err,data)
// {
//     console.log(data);
// }
// fs.readFile('a.txt','utf-8',print);
// fs.readFile('b.txt','utf-8',print);
// console.log('done!');

// const fs=require('fs');
// function print(err,data)
// {
//     if(err)
//     {
//         console.log("file not found");
//     }
//     else{
//         console.log(data);
//     }
// }
// fs.readFile('ab.txt','utf-8',print);

function timeout()
{
    console.log("Hi");
}
function timeout2()
{
    console.log("My name is");
}
function timeout3()
{
    console.log("Om jaiswal");
}
setTimeout(timeout,1000);
setTimeout(timeout2,2000);
setTimeout(timeout3,3000);
console.log("Basic Intro");