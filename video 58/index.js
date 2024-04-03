function nice(name) {
    console.log("Hey " + name + " you are Nice")
    console.log("Hey " + name + " you are Good")
    console.log("Hey " + name + " you are loking like a WOW")
    console.log("Hey " + name + " you are JUST loking like a WOW")
}
nice("Rohan")
nice("Soumodip")
// console.log("Hey Soumodip you are Nice")
// console.log("Hey Soumodip you are Good")
// console.log("Hey Soumodip you are loking like a WOW")
// console.log("Hey Soumodip you are JUST loking like a WOW")

// For Function With No.
function sum(a, b) {
    console.log(a + b)
}
sum(3, 7);

// Function With Return 
function substract(c, d, e = 4) {  //e=defalult value
    return c - d + e;
}
result1 = substract(8, 1);
result2 = substract(1, 0);
result3 = substract(2, 1);
console.log("The Subtract of these Number is : ", result1)
console.log("The Subtract of these Number is : ", result2)
console.log("The Subtract of these Number is : ", result3)

// ARROW FUNCTION 
const func1 = (x) => {
    console.log("I am an Arrow Function", x)
}
func1(45);
func1(23);
func1(24);