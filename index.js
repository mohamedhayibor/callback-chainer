function callbackChainer(functions) {
    return function (arg) {
        return functions.reduce(function (sum, func) {
            return func(sum)
        }, arg);
    }
}

module.exports = callbackChainer;
