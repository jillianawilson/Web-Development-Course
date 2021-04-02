function sumCalculator(arr) {
    let sum = 0 
    for(let i = 0; i<arr.length; i++){
        sum = sum + arr[i]
    }
    return sum
    }

    let result = sumCalculator([10,20,30,40])
    console.log(result)



