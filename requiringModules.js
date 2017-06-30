 var sum = {
  a: 2,
  b: 4,
  sum: function() {
    console.log("The sum is", this.a + this.b);
  }
};

module.exports = sum