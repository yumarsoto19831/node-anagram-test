const Helper = {
  sortString: function(str) {
    str = str.toLowerCase();
    return [...str].sort().join("");
  }
};

module.exports = Helper;
