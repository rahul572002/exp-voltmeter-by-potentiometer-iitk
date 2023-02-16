const image = document.getElementById("switch1A");
const rotateBtna = document.getElementById("switch1btnA");
const textBtn = document.getElementById("switch1btntextA");
const image1a = document.getElementById("switch2A");
const rotateBtn1a = document.getElementById("switch2btnA");
const textBtn1 = document.getElementById("switch2btntextA");
let rotation = 0;
let circuita = true;
let counter = 0;
let counter1 = 0;
let circuit2a = true ;

function switchonoff1A() {
    rotation = 35;
    if (circuita == true && counter == 0) {
        console.log('ds');
        image.style.transform = `rotate(${rotation}deg)`;
        image.style.transformOrigin = "442.65px 310.71px";
        document.getElementById("switch1btnA").style.fill = "green";
        document.getElementById("switch1btntextA").innerHTML = "On";
        circuita = false;
    }
    else if (circuita == false && counter == 0) {
        rotateBtna.style.fill = "red";
        image.style.transform = `rotate(${-rotation}deg)`;
        document.getElementById("switch1btntextA").innerHTML = "Off";
        circuita = true;
        counter1 = 1;
        circuit2a = false;
    }
}

function switchonoff2A() {
    console.log("abc")
    if (circuita == true && counter1 == 1) {
        image1a.style.transform = `rotate(${rotation}deg)`;
        image1a.style.transformOrigin = "441.97px 365.79px";
        document.getElementById("switch2btnA").style.fill = "green";
        document.getElementById("switch2btntextA").innerHTML = "On";
        counter = 1;
        circuita = false;
    }
    else if (circuita == false && counter1 == 1) {
        rotateBtn1a.style.fill = "red";
        image1a.style.transform = `rotate(${-rotation}deg)`;
        document.getElementById("switch2btntextA").innerHTML = "Off";
        counter = 0;
        circuita = true;
    }
}

const image11 = document.getElementById("switch11");
const rotateBtn11 = document.getElementById("switch11btn");
const textBtn11 = document.getElementById("switch11btntext");
const image22= document.getElementById("switch22");
const rotateBtn22 = document.getElementById("switch22btn");
const textBtn22 = document.getElementById("switch22btntext");

function switchonoff11(){
    console.log("switchonoff11");
    if (circuit2a == true && counter == 0) {
        image11.style.transform = `rotate(${rotation}deg)`;
        image11.style.transformOrigin = "340.99px 58.69px";
        document.getElementById("switch11btn").style.fill = "green";
        document.getElementById("switch11btntext").innerHTML = "On";
        counter = 1;
        circuit2a = false;
    }
    else if (circuit2a == false && counter1 == 0) {
        rotateBtn11.style.fill = "red";
        image11.style.transform = `rotate(${-rotation}deg)`;
        document.getElementById("switch11btntext").innerHTML = "Off";
        counter = 0;
        circuit2a= true;
    }
}

function switchonoff22(){
    // console.log("switchonoff11");
    if (circuita == true && counter1 == 1) {
        console.log("switchonoff11");
        image11.style.transform = `rotate(${rotation}deg)`;
        image11.style.transformOrigin = "342.28px 538.36px";
        document.getElementById("switch22btn").style.fill = "green";
        document.getElementById("switch22btntext").innerHTML = "On";
        counter = 1;
        circuit2a= false;
    }
    else if (circuita == false && counter1 == 1) {
        rotateBtn11.style.fill = "red";
        image11.style.transform = `rotate(${-rotation}deg)`;
        document.getElementById("switch22btntext").innerHTML = "Off";
        counter = 0;
        circuit2a = true;
    }

}