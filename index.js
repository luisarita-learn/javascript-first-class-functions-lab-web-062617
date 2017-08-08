function countdown(callback){
    window.setTimeout(callback, 2000)
}

function createMultiplier(times){
    return function (value) {
        return times * value;
    };
}

var doubler = createMultiplier(2);
var tripler = createMultiplier(3);

function multiplier(value, times){
    return times * value
}

var doublerWithBind = multiplier.bind(null, 2);
var triplerWithBind = multiplier.bind(null, 3);