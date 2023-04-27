"use strict";


window.addEventListener("load", start);

function start(event) {
    console.log("Hello Ali");
    alifunc()
    chrisFunction();
    treLogs();
    twoConsoleLines();
}

function alifunc() {
    console.log("Ali was here");
}
function chrisFunction () {
    console.log("Chris was here!");
}

function treLogs() {
    console.log(1);
    console.log(2);
    console.log(3);
}

function twoConsoleLines () {
    console.log("one");
    console.log("two");
}