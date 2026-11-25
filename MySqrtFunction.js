function mySqrt(number){
for(let checker=1;checker<=number;checker++){
if(checker*checker>number){
return checker-1;
}
}
}
let test = 9;
let result = mySqrt(test);

console.log("The square root of " + test + " is " + result);