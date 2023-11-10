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


let testArray = [1,7,6,6,2,8,4]

//let testArray = [7, 1, 6, 3]


function mergeSort(a) {

    if (a.length < 2) {
        return a
    }

    else {

        //console.log(a)
        let leftSide = mergeSort(a.slice(0, Math.floor((a.length) / 2)))
        let rightSide = mergeSort(a.slice(Math.floor((a.length) / 2)))

        console.log(leftSide)
        console.log(rightSide)

        return merge(leftSide, rightSide)

        function merge(left, right) {

            let sorted = []

            while (left.length && right.length) {

                if (left[0] > right[0]) {
                    sorted.push(right.shift())
                } else if (left[0] < right[0]) {
                    sorted.push(left.shift())
                } else {
                    sorted.push(right.shift())
                    sorted.push(left.shift())
                }
            }

            console.log('Sorted: ' + sorted.concat(left.slice().concat(right.slice())))

            return sorted.concat(left.slice().concat(right.slice()))
        }
    }

}

//array1 = []

//console.log(array1[0])

console.log(mergeSort(testArray))
