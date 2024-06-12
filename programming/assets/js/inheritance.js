let demo = document.querySelector("#demo");
class employee{
     constructor(n,e,p,s){
        this.name=n;
        this.email=e;
        this.phone=p;
        this.salary=s;
     }
     dutyShift(s){
        let h = `<p>${this.name} has ${s} shift</p>`
        demo.innerHTML=h;
     }
}
class developers extends employee{
    constructor(a,b,c,d,jobStatus){
        super(a,b,c,d)
        this.jobStatus=jobStatus;
    }
    skill(hired){
        let h1 = `<h1> this is ${this.name} and he is hired as ${hired} and his job status is ${this.jobStatus}
        and his salary is ${this.salary}</h1>`;
        demo.innerHTML+=h1;
    }
    joballounce(allounce){
        let h1 = `<h1> this is ${this.name} and his job allounce ${allounce} and his job status is ${this.jobStatus}
        and his salary is ${this.salary}</h1>`;
        demo.innerHTML+=h1;
    }
   

}
let d1 = new developers("ali","ali@gmail.com",87896548765,"50k","remote");
d1.dutyShift("morning");
d1.skill(".net developer")
d1.joballounce("10lakh")