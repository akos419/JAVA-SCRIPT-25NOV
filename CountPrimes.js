function countPrimes(upperLimit){
let primeCount = 0;
	for(let primeCheck = 2;primeCheck<upperLimit;primeCheck++){
		if(primeCheck==2){
		primeCount += 1;
		}
		else{
			for(let primeNumber = 2;primeNumber<primeCheck;primeNumber++){
				if(primeCheck%primeNumber==0){ break; }
					else{
						if(primeNumber==primeCheck-1){
						primeCount += 1;
						}
					}
			}
		}
	}
return primeCount;
}

console.log(countPrimes(17));