// CODE here for your Lambda Classes
console.log("=================begin classes=============");

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
    changeStudentGrade(student){
        let originalGrade = student.grade;
        console.log(`${student.name}'s original score was ${originalGrade}. It's now ${originalGrade+(Math.round(Math.random()*10)-5)}.`)//will return positive OR negative..
    }
}



class Students extends Person{
    constructor(studentAttributes){
        super(studentAttributes);
        this.previousBackground = studentAttributes.previousBackground;
        this.className = studentAttributes.className;
        this.favSubjects = studentAttributes.favSubjects;
        this.grade = studentAttributes.grade;
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
    graduate(){
        if(this.grade>70){
            console.log(`${this.name}'s grade is is a ${this.grade}%! ${this.name} can graduate!`)
        }else{
            console.log(`${this.name}'s grade is is a ${this.grade}%. ${this.name} needs to raise their score by ${70-this.grade}% to graduate!`);
        }
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




const tom = new Students({
    name: "Tom",
    age: 23,
    location: "Orlando",
    gender: "M",
    previousBackground: "audio",
    className: "WEB17",
    favSubjects: ["Algorithms","Design","Mobile"],
    grade: Math.round(Math.random()*100)
})

const ron = new Students({
    name: "Ron",
    age: 29,
    location: "Buffalo",
    gender: "M",
    previousBackground: "Construction",
    className: "IOS2",
    favSubjects: ["Swift","IOS Dev","Java"],
    grade: Math.round(Math.random()*100)
})

const jordan = new Students({
    name: "Jordan",
    age: 19,
    location: "Vernon",
    gender: "F",
    previousBackground: "accountant",
    className: "WEB15",
    favSubjects: ["React","Redux","ROR"],
    grade: Math.round(Math.random()*100)
})




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









console.log('====instructors====');
console.log(jim);
console.log(bob);
console.log(betty);


console.log('====students====');
console.log(tom);
console.log(ron);
console.log(jordan);


console.log('====PMs====');
console.log(jess);
console.log(robin);
console.log(zach);



console.log("               ==========stuff that they can do==========");

console.log(' ');
console.log('           ===everyone can speak()===');
console.log(jim.speak());
console.log(tom.speak());
console.log(jess.speak());

console.log(' ');
console.log('           ===teachers and pms can demo() and grade()===');
console.log(jim.demo("JavaScript"));
console.log(bob.grade(tom, "JavaScript"));
console.log(jess.demo("Swift"));
console.log(zach.grade(ron, "Swift"));

console.log(' ');
console.log('           ===only PMs can standUp() and debugsCode()===');
console.log(robin.standUp("#WEB17"));
console.log(jess.debugsCode(tom, "JavaScript"));

console.log(' ');
console.log('           ===only students can listsSubjects(),PRAssignment(subject), and sprintChallenge(subject)===');
console.log(tom.listsSubjects())
console.log(ron.PRAssignment("prototypes"))
console.log(jordan.sprintChallenge("classes"))

console.log(' ');
console.log('           ===log stretch method===');
console.log(jess.changeStudentGrade(tom));

console.log(tom.graduate());
console.log(ron.graduate());