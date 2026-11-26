function isHappy(number){
let count = 0;
while(number !== 1 && count<200){
	let sum = 0;
	while(number>0){
	let digit = number%10;
	sum += digit**2;
	number = Math.floor(number/10);
	}
number = sum;
count += 1;
}
if(number===1){
return true;
}
else{ return false; }
}

console.log(isHappy(2));