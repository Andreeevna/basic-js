const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain:[],
  getLength() {
    return this.chain.lenghth;
  },
  addLink(value) {

    value = `( ${value} )`;
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position < 1 || this.chain[position] === undefined) {
      this.chain = [];
      throw new Error('Error!');
    }
    this.chain.splice(position -1,1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
   let res = this.chain.join('~~');
   this.chain=[];
   return res;
  }
};

module.exports = chainMaker;