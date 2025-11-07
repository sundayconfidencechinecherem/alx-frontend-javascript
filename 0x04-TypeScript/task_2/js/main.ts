interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}


interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director {

        workFromHome(): string {
            return 'Working from home';
        }
        getCoffeeBreak(): string {
            return 'Getting a coffee break';
        }
        workDirectorTasks(): string{
            return 'Getting to director tasks';
        }
}

class Teacher {
    workFromHome(): string {
        return 'Cannot work from home';
    }
    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }
    workTeacherTasks(): string {
        return 'Getting to work';
    }
}

function createEmployee (salary: string | number) : Director | Teacher {
    if(salary < 500){
        return new Teacher();
    }
    else{
        return new Director();
    }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));