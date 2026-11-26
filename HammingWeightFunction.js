function hammingWeight(number){
let binaryOneCount = 0;
let binary;
while(number>0){
binary = number%2;
number = Math.floor(number/2);
if(binary==1){
binaryOneCount += 1;
}
}
return binaryOneCount;
}

let test = 15;

let result = hammingWeight(test);

console.log("There are " + result + " 1s in the binary form of " + test);