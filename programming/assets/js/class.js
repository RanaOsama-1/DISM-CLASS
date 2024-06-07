class lab209 {
    constructor(name, course, semester) {
        this.name = name;
        this.course = course;
        this.semester = semester;
    }
    learning(name, course, semester) {
        let x = name + " is a student of " + course + " and his current semester is " + semester;
        document.getElementById("demo").innerHTML = x;
        // console.log(x);


    }
}

let std1 = new lab209();
std1.learning("ali", "adse", "second");
// document.getElementById("demo").innerHTML = x;