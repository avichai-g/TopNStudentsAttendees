const findOccInArray = (arr2dimension) => {
  let arr2 = [];
  arr2dimension.forEach((element) => {
    element.forEach((x) => {
      // Checking if there is any object in arr2
      // which contains the key value
      if (
        arr2.some((val) => {
          return val["name"] == x;
        })
      ) {
        // If yes! then increase the occurrence by 1
        arr2.forEach((k) => {
          if (k["name"] === x) {
            k["occurrence"]++;
          }
        });
      } else {
        // If not! Then create a new object initialize
        // it with the present iteration key's value and
        // set the occurrence to 1
        let a = {};
        a["name"] = x;
        a["occurrence"] = 1;
        arr2.push(a);
      }
    });
  });
  return arr2;
};
module.exports = { findOccInArray };
