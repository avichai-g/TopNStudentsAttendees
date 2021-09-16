const studentAttendees = (uniqueStudents, attendees) => {
  const res = [];
  attendees.forEach((element) => {
    res.push(element.filter((item) => uniqueStudents.includes(item)));
  });
  return res;
};

module.exports = { studentAttendees };
