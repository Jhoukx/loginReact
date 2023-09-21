import bcrypt from "bcrypt";

let saltRounds = Math.floor((Math.random() * (50 - 10 + 1) + 10))
const hash = await bcrypt.hash("password", 10);
console.log(hash);
const someOtherHast = await bcrypt.hash("notPassword", saltRounds);

console.log(hash);
console.log(someOtherHast);
console.log(bcrypt.compareSync("password", hash));
console.log(bcrypt.compareSync("notPassword", someOtherHast));