function fibs(n) {
    let fibsArray = []
    let firstNumber
    let secondNumber
    let sum

    for (let i = 0; i < n; i++) {

        if (i == 0) {
            firstNumber = i
            fibsArray.push(i)
        }

        else if (i == 1) {
            secondNumber = i
            fibsArray.push(i)
        }

        else {
            sum = firstNumber + secondNumber
            fibsArray.push(sum)
            firstNumber = secondNumber
            secondNumber = sum
        }

    }

    return fibsArray
}


function fibsRecursive(n) {
    if (n == 0) {
        return 0
    } else if (n == 1) {
        return 1
    } else {
        return fibsRecursive(n - 1) + fibsRecursive(n - 2)
    }
}

console.log(fibsRecursive(5))