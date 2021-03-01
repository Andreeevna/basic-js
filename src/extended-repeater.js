const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let res = "";
    const repeatTimes = options.repeatTimes || 1;
    const separator = options.separator || "+";
    let addition = options.addition;
    const additionRepeatTimes = options.additionRepeatTimes || 1;
    const additionSeparator = options.additionSeparator || "|";
   
    for (let i = 0; i < repeatTimes; i++) {
        res = res + str;
        if (addition !== undefined) {
            if (addition !== null) {
                addition = addition.toString();
            }
            res = res + addition;
            for (let j = 1; j < additionRepeatTimes; j++) {
              res += `${additionSeparator}${addition}`;
            }
        }
        if (i < repeatTimes - 1) {
          res += separator;
        }
    }
    return res;
};