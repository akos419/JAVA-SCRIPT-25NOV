function isPalindromeNumber(number){
let palindromeChecker = number;
let digit;
let reverse = 0;
if(number<0){
return false;
}
else{
while(number>0){
digit = number%10;
number = Math.floor(number/10);
reverse = reverse*10 + digit;
}
}
if(reverse==palindromeChecker){
return true;
}
else{ return false; }
}

console.log(isPalindromeNumber(5));