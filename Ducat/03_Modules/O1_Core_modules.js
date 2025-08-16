const os = require('os');
console.log(os.cpus().length);
console.log(os.freemem()/1024/1024/1024)

// Operating system all .modules

console.log('Type ', os.type())
console.log('Platform ', os.platform())
console.log('Architecture ', os.arch())
console.log('Release ', os.release())
console.log('Version ', os.version())
console.log('machine ', os.machine())
console.log('freeman ', os.freemem()/ 1024 / 1024 / 1024)
console.log('totalmem ', os.totalmem() / 1024 / 1024 / 1024)


console.log('uptime ', os.uptime())
console.log('CPUS ', os.cpus())
console.log('CPUS ', os.cpus().length,'Core')
console.log('Home Dir ', os.homedir())
console.log('Temp Dir ', os.tmpdir())
console.log('hostname ', os.hostname())
console.log('userInfo ', os.userInfo())

