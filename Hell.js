// function settimeoutpromisified(duration) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, duration);
//     });
// }
// function callback() {
//     console.log("wait for 5 seconds");
// }
// settimeoutpromisified(5000).then(callback);

// setTimeout(function () {
//     console.log("hi");
//     setTimeout(function () {
//         console.log("hello");
//         setTimeout(function () {
//             console.log("Hi there");
//         }, 5000);
//     }, 3000);
// }, 1000);

// function settimeoutpromisified(duration)
// {
//     return new Promise(function(resolve)
// {
//     setTimeout(resolve,duration);
// });
// }
//  settimeoutpromisified(1000).then(function()
// {
//     console.log("hi");
//     settimeoutpromisified(3000).then(function()
//     {
//         console.log("hello");
//         settimeoutpromisified(5000).then(function()
//     {
//         console.log("HI there");
//     });
//     });
// });

// function settimeoutpromisified(duration)
// {
//     return new Promise(function(resolve)
// {
//     setTimeout(resolve,duration);
// });
// }
// settimeoutpromisified(1000).then(function()
// {
//     console.log("hi");
//     return settimeoutpromisified(3000);
// }).then(function()
// {
//     console.log("hello");
//     return settimeoutpromisified(5000);
// }).then(function()
// {
//     console.log("HI there");
// });

// function settimeoutpromisified(duration)
// {
//     return new Promise(function(resolve)
// {
//     setTimeout(resolve,duration);
// });
// }
// async function solve()
// {
//     await settimeoutpromisified(1000);
//     console.log("Hi");
//     await settimeoutpromisified(3000);
//     console.log("hello");
//     await settimeoutpromisified(5000);
//     console.log("hi there");
// }
// solve();

let fs = require('fs');
function readFileAsync() {
    return new Promise(function (resolve, reject) {
        fs.readFile('abd.txt', "utf-8", function (err, data) {
            if (err) {
                reject("File not Found");
            }
            else {
                resolve(data);
            }
        })
    })
}

readFileAsync().then(function (x) {
    console.log(x);
}).catch(function (e) {
    console.log(e);
});