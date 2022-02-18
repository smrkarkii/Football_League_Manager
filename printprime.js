prime = (n) => {

        if(n<2){
            console.log(`${n} is not prime:`)
            return;
        }
        for(let j=2; j<= n/2; j++){
            if(n%j===0){
            console.log('not  prime');
            return;
            }
        }
        console.log('is a prime number');


}
prime(121);