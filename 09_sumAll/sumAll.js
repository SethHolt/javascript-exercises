const sumAll = function(a, b) {

    if(!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0 || a === b) return "ERROR";
    
    sum = 0;
    if(a > b) {
        [a, b] = [b, a];
    }

    for (b; b >= a; b--) {
        sum +=b;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
