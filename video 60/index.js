console.log("This is String Tutorial")
let a = "Harry"
console.log(a)

console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])

console.log(a.length)

let real_name = "Soumodip"
let friend = "Rohan"
console.log("His name is " + real_name + " and his friends name is " + friend)
console.log(`His name is ${real_name} and his name is ${friend}`)

let b = "Shivam"
let c = "HOLOOHO"
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.length)
console.log(b.slice(1, 4))
console.log(b.slice(1))

console.log(b.replace("Sh", "77"))
console.log(c.replace("HO", "888"))

// CONCATINATE 
console.log(b.concat(a, "BREAK HEART", "Rahul", "Priya"))

// STRING CAN NOT CHANGE [ String is Imutable]
console.log(b)

b.charAt(0)