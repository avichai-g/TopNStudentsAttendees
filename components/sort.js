const sortArrayDecending = (array) => {
  array.sort(function (a, b) {
    return b.occurrence - a.occurrence;
  });
  return array;
};
module.exports = { sortArrayDecending };
