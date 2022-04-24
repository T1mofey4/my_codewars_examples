function squareSum(numbers){
    if (numbers == 0){
        return 0;
    } else {
        let square = numbers.map(function(num) {
            return num ** 2;
        });
        return square.reduce((sum, element) => {
            return sum + element;
        });
    }

}

const arr = [];

console.log(squareSum(arr));

