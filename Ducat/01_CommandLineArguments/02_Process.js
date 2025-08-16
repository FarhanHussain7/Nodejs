let args = process.argv.slice(2);

let obj = {};
for (let arg of args){
    let arr = arg.slice('=');
    let key = arr[0]
    let value = arr[1]
    obj[key] = value;
}
console.log(obj);


// If you want to print result then you have to give full address like this
// PS C:\Users\hp\Desktop> node "c:\Users\hp\Desktop\New Folder\Nodejs\Ducat\index.js" nusrat 101 krachi
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'c:\\Users\\hp\\Desktop\\New Folder\\Nodejs\\Ducat\\index.js',
//   'nusrat',
//   '101',
//   'krachi'
// ]