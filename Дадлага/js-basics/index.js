let name = 'Mosh';
console.log(name);

var i = 3;
console.log(i);

let person = {
    name: 'Ts',
    age: 30
}

person.name = "john";

console.log(person.name);

var globalVar;
function a() {
    var localVar;
    if (globalVar > 0) {
    var localVar2 = 2;
    }
    return localVar2;
}
   
console.log(a());

var foo = 'This is a test'; // can use "This is a test"
foo.length 

console.log(foo);
console.log(foo.length);