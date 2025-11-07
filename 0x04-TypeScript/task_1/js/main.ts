interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;

}

interface Director extends Teacher {
numberOfReports: number;
}

interface printTeacherFunction{
    (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string  {
    return `${firstName.charAt(0)}. ${lastName}`;
}
const teacher3: Teacher = {
firstName: 'John',
fullTimeEmployee: false,
lastName: 'Doe',
location: 'London',
contract: false

}

const director1: Director = {
    firstName: 'John',
    fullTimeEmployee: true,
    lastName: 'Doe',
    location: 'London',
    numberOfReports: 17
}

console.log(director1)

console.log(teacher3)

console.log(printTeacher("John", "Doe"));
