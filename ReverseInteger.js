function reverseInteger(number){
let digit;
let reverse = 0;
while(number!=0){
digit = number%10;
number = Math.ceil(number/10);
reverse = reverse*10 + digit;
}
return reverse;
}

console.log(reverseInteger(-123));