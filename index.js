//imports
const unique = require("./components/uniqueValues");
const studentAttendees = require("./components/studentsAttendes");
const findocc = require("./components/findOcc");
const sort = require("./components/sort");
const definitions = require("./definitions");

//Validate inputs
const topNStudentsAttendees = (students, attendees, N) => {
  if (!students || !attendees || N <= 0)
    return console.log("Please insert a valid values!!");

  if (!Array.isArray(students) || !Array.isArray(attendees))
    return console.log("Please insert a valid values!!");
  //----------------------------------------------------------
  else {
    const uniqueStudents = unique.uniqueValues(students);
    const resStudentsAttandees = studentAttendees.studentAttendees(
      uniqueStudents,
      attendees
    );

    const uniqueStudentsAttandees =
      unique.uniqueValuesAttendees(resStudentsAttandees);

    const numOfOcc = findocc.findOccInArray(uniqueStudentsAttandees);

    const numOfOccSorted = sort.sortArrayDecending(numOfOcc);

    const slicedArray = numOfOccSorted.slice(0, N);
    return slicedArray.map((item) => {
      return item["name"];
    });
  }
};
const studentAttandeesMost = topNStudentsAttendees(
  definitions.students,
  definitions.attendees,
  definitions.N
);

if (studentAttandeesMost) {
  console.log(`studentAttandeesMost`, studentAttandeesMost);
}
