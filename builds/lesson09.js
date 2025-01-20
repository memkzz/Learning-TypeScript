"use strict";
var days;
(function (days) {
    days[days["sunday"] = 1] = "sunday";
    days[days["monday"] = 2] = "monday";
    days[days["tuesday"] = 3] = "tuesday";
    days[days["wednesday"] = 4] = "wednesday";
    days[days["thursday"] = 5] = "thursday";
    days[days["friday"] = 6] = "friday";
    days[days["saturday"] = 7] = "saturday";
})(days || (days = {}));
console.log(days);
console.log(days.friday);
