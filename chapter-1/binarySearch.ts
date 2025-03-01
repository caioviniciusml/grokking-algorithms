function binarySearch(arr: Array<number>, target: number): number | null{
    let low = 0;
    let high = arr.length - 1;

    while(low <= high){
        let mid = Math.floor((low + high)/2)
        let guess = arr[mid]

        if(guess === target) return mid;

        if(guess > target) high = mid - 1;

        if(guess < target) low = mid + 1
    }

    return null;
}