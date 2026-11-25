function isPowerOfTwo(number){
while(number!=0 && number!=1){
number %= 2
}
if(number==0){
return true;
}
else{ return false; }
}

let result = isPowerOfTwo(17);

console.log(result);