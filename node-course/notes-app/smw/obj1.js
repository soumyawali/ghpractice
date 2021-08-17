const student = {
  Name: 'student1',
  rollno: 1,
  subject: 'UI',
  setvalues: function (Name, rollno, subject) {
    this.Name = Name;
    this.rollno = rollno;
    this.subject = subject;
  },
  disp: function () {
    console.log('Name is:' + student.Name);
    console.log('Roll no is:' + student.rollno);
    console.log('Subject is:' + student.subject);
  }
};
student.setvalues('Mamata', 2, 'Java');
student.disp();
