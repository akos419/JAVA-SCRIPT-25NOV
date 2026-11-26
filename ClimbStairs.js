function climbStairs(totalSteps){
if(totalSteps<=2){
return totalSteps;
}

let initialStep = 1;
let nextStep = 2;
let numberOfWays = 0;

for(let step = 3;step<=totalSteps;step++){
numberOfWays = initialStep + nextStep;

initialStep = nextStep;
nextStep = numberOfWays;
}

return numberOfWays;
}

console.log(climbStairs(5));