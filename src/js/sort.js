let bubbleSort = (inputArr) => {

    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j].points > inputArr[j + 1].points) {
                let tmp = inputArr[j].points;
                inputArr[j].points = inputArr[j + 1].points;
                inputArr[j + 1].points = tmp;
            }
        }
    }
    return inputArr;
};