const uniqueValues = (arrayValues) => {
  return [...new Set(arrayValues)];
};

const uniqueValuesAttendees = (arrayValues) => {
  const res = [];
  arrayValues.forEach((element) => {
    res.push(uniqueValues(element));
  });
  return res;
};

module.exports = { uniqueValues, uniqueValuesAttendees };
