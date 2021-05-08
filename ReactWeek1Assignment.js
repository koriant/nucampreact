class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    registerStudent(student) {
        if (this.students.find(s => s.email === student.email)) {
            console.log(`The student is already registered`);
        } else {
            this.students.push(student);
            console.log(`Registering ${student.email} to the bootcamp ${this.name}.`);
        }
        return this.students;
    }
}
        

const chris = new Student("Chris", "chris@nucamp.com", "Austin");
const fullStack = new Bootcamp("Full Stack Web Development", "Advanced");

fullStack.registerStudent(chris);
fullStack.registerStudent(chris);

// The way the instructor did it
// if (this.students.filter(s => s.email === student.email).length === 1))

//2 Step
//const filter = this.students.filter(s => s.email === student.email)
//const isRegistered = filter.length
//if(isRegistered === 1) {
//     console.log('Student is already registered');
// }