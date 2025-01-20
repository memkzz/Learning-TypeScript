"use strict";
class Course {
    constructor(channel, course) {
        this.channel = null;
        this.course = null;
        this.channel = channel;
        this.course = course;
    }
}
let c1 = new Course("CBC Courses", "TypeScript");
console.log(c1.channel);
console.log(c1.course);
