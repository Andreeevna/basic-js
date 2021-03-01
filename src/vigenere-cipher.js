const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(mode=true){
    if (mode === undefined){
      throw new Error();
    }
    this.mode = mode;
    this.alph='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  }

  validation(str,key){
    if(!str || !key){
      throw new Error();
    }
  }

  squareFilling(){

    // filling of Vigenere square
    var square=[];
    for (var i = 0; i < this.alph.length; i++) {
      square[i] = this.alph.slice(i).concat(this.alph.slice(0, i));
    }

    return square

  }

  keyComputation(key,str){
    // key computation
    let timesMore=Math.ceil(str.length/key.length);
    key=key.repeat(timesMore)
    key=key.slice(0,str.length)

    return key
  }

  encrypt(str,key) {

    this.validation(str,key)

    str=str.toUpperCase();
    key=key.toUpperCase();

    let square=this.squareFilling()

    key=this.keyComputation(key,str)

    // encryption
    var out=''
    var shift=0;
    for(let i=0;i<key.length;i++){

      if(this.alph.indexOf(str[i])>-1 && this.alph.indexOf(key[i-shift])>-1){
        out= out+ square[this.alph.indexOf(str[i])][this.alph.indexOf(key[i-shift])];
      }

      else{
        shift++
        out=out+str[i]

      }
    }

    return this.mode ? out: out.split('').reverse().join('')

  }

  decrypt(str,key) {

    this.validation(str,key)

    str=str.toUpperCase();
    key=key.toUpperCase();

    let square=this.squareFilling()
    key=this.keyComputation(key,str)

    // decryption
    var out=''
    var shift=0;
    for(let i=0;i<key.length;i++){

      if(this.alph.indexOf(str[i])>-1 && this.alph.indexOf(key[i-shift])>-1){
        var row = this.alph.indexOf(key[i-shift])
        out=out+ this.alph[square[row].indexOf(str[i])];
      }

      else{
        shift++
        out=out+str[i]

      }
    }

    return this.mode ? out : out.split('').reverse().join('')

  }
}

module.exports = VigenereCipheringMachine;

