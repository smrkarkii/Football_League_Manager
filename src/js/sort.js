function bubbleSortByWon(inputArr) {
           
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j =0; j < len-i-1; j++) {
            if (inputArr[j].won > inputArr[j+1].won) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j+1];
                inputArr[j+1] = tmp;
                
            }
        }
    }
   inputArr.reverse();
    return inputArr;
};
function bubbleSortByGoals(inputArr) {

    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (inputArr[j].goals > inputArr[j + 1].goals) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    inputArr.reverse();
    return inputArr;
};
function bubbleSortByGoals(inputArr) {

    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (inputArr[j].goals > inputArr[j + 1].goals) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    inputArr.reverse();
    return inputArr;
};