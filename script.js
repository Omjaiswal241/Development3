function valid(arr) {
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].gender == "male" && arr[i].age > 18) {
            arr2.push(arr[i])
        }
    }
    return arr2;
}
const user =
    [{ name: "Om", age: 20, gender: "male" },
    { name: "aditya", age: 16, gender: "male" },
    { name: "neha", age: 19, gender: "female" }]

console.log(valid(user))