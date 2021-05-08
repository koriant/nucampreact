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
    }
}
        

const chris = new Student("Chris", "chris@nucamp.com", "Austin");
const fullStack = new Bootcamp("Full Stack Web Development", "Advanced");