function subSum(arr, startIndex, endIndex) {

    let isitArray = Array.isArray(arr);
    
    if (isitArray) {
        if (startIndex < 0) {
            startIndex = 0;
        }
        
        if (endIndex > arr.length) {
            endIndex = arr.length; 
        }

        let sum = arr.slice(startIndex, endIndex + 1).reduce((acc, num) => 
            acc += Number(num), 0);
        return sum;
    } else {
        return NaN;
    }  
}

subSum([10, 20, 30, 40, 50, 60], 3, 300);
subSum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1);
subSum([10, 'twenty', 30, 40], 0, 2);
subSum([], 1, 2);
subSum('text', 0, 2);