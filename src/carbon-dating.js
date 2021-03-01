const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const k = 0.693/ HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
 if (typeof sampleActivity !== 'string' || isNaN(parseInt(sampleActivity))) {
   return false;
 }
 if (Number(sampleActivity) <= 0 || Number(sampleActivity) > 15) {
   return false;
 }
 return Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat (sampleActivity))/k)
};