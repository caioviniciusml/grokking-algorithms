function recursiveFactorial(n: number): number{
    if(n === 1) return 1;
    else return n * recursiveFactorial(n-1)
}
