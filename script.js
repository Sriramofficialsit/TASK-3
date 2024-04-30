let obj1 = { name: "Person 1", age: 5 };
let obj2 = { age: 5, name: "Person 1" };
let obj1String = JSON.stringify(obj1, Object.keys(obj1));
let obj2String = JSON.stringify(obj2, Object.keys(obj2));
let areEqual = obj1String === obj2String;
console.log("Are the objects equal?", areEqual);