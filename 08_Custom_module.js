console.log("this module");
function average(arr) {
  sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
  //return sum / arr.length;
}

//module.export
let a = average([3, 4, 5, 3, 6, 78, 8, 75, 43, 3, 2]);
console.log(a);
