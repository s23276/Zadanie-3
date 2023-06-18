function Student(firstName, lastName, studentID, grades) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.studentID = studentID;
  this.grades = grades;
  
  this.calculateAverage = function() {
    var sum = 0;
    
    for (var i = 0; i < this.grades.length; i++) {
      sum += this.grades[i];
    }
    
    var average = sum / this.grades.length;
    return average;
  };
  
  this.printInfo = function() {
    console.log("Imię: " + this.firstName);
    console.log("Nazwisko: " + this.lastName);
    console.log("Średnia ocen: " + this.calculateAverage());
  };
}

var student1 = new Student("Jan", "Kowalski", "A12345", [4, 3.5, 5, 4.5]);
student1.printInfo();