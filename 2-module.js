
// Node.js Global Variables

// __dirname - Path to current directory
// __filename - File name
// require - Function to use module (commonJs)
// module - Info about current module(File)
// process - Info about env where the program is executed

// console.log(__dirname)
// console.log(process)
setInterval(()=>{
    console.log("what is up")
},1000)
const names = require("./name")
const sayHi = require("./utils")
const data =require("./alternative")
sayHi(names.firstName)
sayHi(names.LastName)
console.log(data)
