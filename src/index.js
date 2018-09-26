module.exports = function longestConsecutiveLength(array) {
    array.sort((a, b) => a - b);

    // console.log(array);

    let result = (array.length) ? [array[0]] : [], tempArray = [];
    for (let i = 1; i < array.length; i++) {
        if (array[i] === (array[i - 1] + 1)) result.push(array[i]);
        else {
            if (tempArray.length < result.length)
                tempArray = result;
            result = [array[i]];
        }
    }
    if (tempArray.length > result.length)
        result = tempArray;

    return result.length;
};
