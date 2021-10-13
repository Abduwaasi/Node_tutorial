const os = require('os')

const user = os.userInfo()


console.log(`The system uptime is ${os.uptime()/86400} days`);

const currentOs={
    name:os.type(),
    releaseYear:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}
console.log(currentOs)