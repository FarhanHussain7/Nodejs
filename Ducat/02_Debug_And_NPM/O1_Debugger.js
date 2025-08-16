console.log('Program start from here................');
function f2(){
    console.log('f2 Started from here...');
    console.log('f2 continue here...');
    console.log('f2 end here...');
}
function f1(){
    console.log('f2 Started from here...');
    console.log('f2 continue here...');
    f2();
    console.log('f2 end here...');
}
f1();


// this is how you can debug the program in console  
// PS C:\Users\HP\New folder\Nodejs\Ducat\03_Debug> node inspect O1_Debugger.js b