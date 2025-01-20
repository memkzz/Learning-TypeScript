var data = {
    name: "jr",
    age: 23,
    status: "A",
    ola: function () { console.log("ola"); },
    info: function (p) { console.log(p); }
};
console.log(data);
data.ola();
data.info("bye");
