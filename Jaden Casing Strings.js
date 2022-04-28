const str = "How can mirrors be real if our eyes aren't real";

String.prototype.toJadenCase = function () {
    return this.replace(/(^|\s)\S/g, function(i) {
      return i.toUpperCase();
  });  
};

console.log(str.toJadenCase());