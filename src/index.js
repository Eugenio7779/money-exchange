// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    
    let coins={};
   
    if(currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
         
    if(currency<=0){  return coins;  }
    
    coins.H=Math.floor(currency/50);
    currency=currency%50;
    coins.Q=Math.floor(currency/25);
    currency=currency%25;
    coins.D=Math.floor(currency/10);
    currency=currency%10;
    coins.N=Math.floor(currency/5);
    currency=currency%5;
    coins.P=Math.floor(currency/1);

        for(let x in coins){
        if(coins[x]==0){
            delete coins[x];
        }
    }

    return coins

}
