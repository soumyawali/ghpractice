/* Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
Sample object:
var student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 } */
const student = {
  name: 'David',
  sclass: 'IV',
  rollno: 12
};
console.log('student before editing');
console.log('student name is' + student.name, 'studying in ' + student.sclass, 'with rollno' + student.rollno);
delete student.rollno;
console.log('student after editing');
console.log('student name is' + student.name, 'studying in' + student.sclass, 'with rollno' + student.rollno);
