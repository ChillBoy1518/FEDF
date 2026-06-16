//string
let studentName: string = "Kushal";
//number
let age: number = 18;
//boolean
let isstudent: boolean = true;
//array
let marks: number[] = [85, 90, 78];
//tuple
let student: [string, number] = [18, "Kushal",];

console.log(studentName);
console.log(age);
console.log(isstudent);
console.log(marks);
console.log(student);

//enum
enum grade {
    A = "Excellent",
    B = "Good",
    C = "Average",
    D = "Poor"
}
let studentGrade: grade = grade.A;
console.log(studentGrade);