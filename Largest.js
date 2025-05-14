// function largest(ar)
// {
//      let max=ar[0];
//      for(let i=1;i<ar.length;i++)
//      {
//         if(ar[i]>max)
//         {
//             max=ar[i];
//         }
//      }
//      console.log(max);
// }
// array=[10,20,34,23,43,36,78,79];
// largest(array);

let ctr=0;
function callback()
{
    console.clear();
    console.log(ctr);
    ctr=ctr+1;
    setTimeout(callback,1000);
}
setTimeout(callback,1000);