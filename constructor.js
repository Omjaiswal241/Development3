// class Rectangle {
//     constructor(width, height, color) {
//         this.width = width;
//         this.height = height;
//         this.color = color;
//     }

//     area() {
//         return (this.width * this.height);
//     }
//     paint() {
//         console.log("Color is "+this.color);
//     }
// }
// const rect = new Rectangle(4, 5, "red");
// const area = rect.area();
// rect.paint();
// console.log(area);


// const date=new Date();
// console.log(date.getFullYear());

// const map=new Map();
// map.set("Om",211);  
// map.set("ayush",71);
// map.set("aditya",21);
// console.log(map.get("Om"));

// function callf(resolve)
// {
//     setTimeout(resolve,3000);
// }
// function main()
// {
//     console.log("main is called");
// }
// callf(main);

// function callback(resolve)
// {
//     setTimeout(resolve,1000);
// }
// let p=new Promise(callback);

// function random()
// {
//     console.log("promise succeded");
// }
// p.then(random);


const fs = require('fs');
function readtheFile(resolve) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
        resolve(data);
    })
}
function readFile() {
    return new Promise(readtheFile);
}
const p = readFile();
function callback(contents) {
    console.log(contents);
}

p.then(callback);

