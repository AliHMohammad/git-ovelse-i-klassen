"use strict";


window.addEventListener("load", start);

function start(event) {
    console.log("Hello Ali");
    alifunc()
    chrisFunction();
    twoConsoleLines();
}

function alifunc() {
    console.log("Ali was here");
}
function chrisFunction () {
    console.log("Chris was here!");
}

function twoConsoleLines () {
    console.log("one");
    console.log("two");
}