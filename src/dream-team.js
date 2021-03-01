const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let name = '';
  if (members === null || !members || members[0] === undefined) {
    return false 
  }
 for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === 'string' ) {
      name = name + members[i].trim().charAt(0)
    }
 }
 return name.toUpperCase().split('').sort().join('');
};
