// CODE here for your Lambda Classes
class Person { //base class
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age; 
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`)
    }
}


class Instructors extends Person{
    constructor(instructAttributes){
        super(instructAttributes);
        this.specialty = instructAttributes.specialty;
        this.favLanguage = instructAttributes.favLanguage;
        this.catchPhrase = instructAttributes.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`)
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on 
        ${subject}`)
    }
}



class Students extends Person{
    constructor(studentAttributes){
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
    }
    listsSubjects(){
        this.favSubjects.forEach(x => console.log(`I enjoy ${x}`))
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}




class ProjectManagers extends Instructors {
    constructor(pmAttributes){
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`)
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
    }
}




console.log('====instructors====');

const jim = new Instructors({
    name: "Jim",
    age: 33,
    location: "Milwuakee",
    gender: "M",
    specialty: "Ruby frameworks",
    favLanguage: "Ruby",
    catchPhrase: "BUTTER MY BISCUITS"
})

const bob = new Instructors({
    name: "Bob",
    age: 52,
    location: "San Francisco",
    gender: "M",
    specialty: "Redux",
    favLanguage: "JavaScripts",
    catchPhrase: "Well aint that somethin else..."
})

const betty = new Instructors({
    name: "Betty",
    age: 29,
    location: "Los Angeles",
    gender: "F",
    specialty: "Versatility",
    favLanguage: "all of them",
    catchPhrase: "USE YOUR TOOLS"
})





            
console.log('====students====');
const tom = new Students({
    name: "Tom",
    age: 23,
    location: "Orlando",
    gender: "M",
    previousBackground: "audio",
    className: "WEB17",
    favSubjects: "Algorithms"
})

const ron = new Students({
    name: "Ron",
    age: 29,
    location: "Buffalo",
    gender: "M",
    previousBackground: "Construction",
    className: "IOS2",
    favSubjects: "swift"
})

const jordan = new Students({
    name: "Jordan",
    age: 19,
    location: "Vernon",
    gender: "F",
    previousBackground: "accountant",
    className: "WEB15",
    favSubjects: "Rect"
})





console.log('====PMs====');

const jess = new ProjectManagers({
    name: "Jess",
    age: 27,
    location: "Orlando",
    gender: "F",
    specialty: "redux",
    favLanguage: "C++",
    catchPhrase: "i dont do catch phrases",
    gradClassName: "WEB9",
    favInstructor: "Josh"
})

const robin = new ProjectManagers({
    name: "Robin",
    age: 41,
    location: "Jacksonville",
    gender: "F",
    specialty: "C",
    favLanguage: "C",
    catchPhrase: "It all comes with time",
    gradClassName: "WEB14",
    favInstructor: "Sean"
})
const zach = new ProjectManagers({
    name: "Zach",
    age: 34,
    location: "Miami",
    gender: "M",
    specialty: "Mobil",
    favLanguage: "swift",
    catchPhrase: "i ALSO dont do catch phrases.. very serious business here",
    gradClassName: "IOS4",
    favInstructor: "Josh"
})



