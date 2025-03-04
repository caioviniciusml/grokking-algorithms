function recursiveCountdown(n: number){
    console.log(n);
    
    if(n <= 0) return
    else recursiveCountdown(n-1)
}