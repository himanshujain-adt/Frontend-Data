let student = {
    firstName: "Himanshu",
    lastName: "Jain",
    getFullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
console.warn("student method calling==>>> " + student.getFullName());

let teacher = {
    firstName: "Amit",
    lastName: "Bansal",
    birth: 1997,
    getFullName: function () {
        return this.firstName + " " + this.lastName;
    },
    getAge: function () {
        let age = new Date().getFullYear - this.birth;
        return age;
    }
}
console.log("teacher method calling=>>>> " + teacher.getFullName());