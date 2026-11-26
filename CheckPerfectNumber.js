function checkPerfectNumber(number){
let sum = 0;
for(let divisor = 1;divisor<number;divisor++){
if(number%divisor==0){
sum += divisor;
}
}
if(sum==number){
return true;
}
else{ return false; }
}

console.log(checkPerfectNumber(49));