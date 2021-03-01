const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {

 let sum  = 0;
  if ( !matrix ) {
  throw new CustomError('Not implemented');
  }
  if (matrix.length === 0) {
    return 0
  }
  for ( let i = 0; i< matrix.length; i++){
    for(let j =0; j < matrix[i].length; j ++){
      if(matrix[i][j]=="^^"){
        sum = sum + 1;
      }
    }
  }
  return sum;
};

