// this file is act as module which is create locally by the user

function add(a,b){
    console.log(a + b)
}
function sub(a, b){
    console.log(a-b)
}

// module.exprot will help exprot this function globally in different js file so can use import them and use this function easily
module.exports = {add, sub}