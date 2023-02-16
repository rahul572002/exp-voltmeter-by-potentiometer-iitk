//Your JavaScript goes in here
let x = 0;
var circuit=false
var circuit2=false





const moveline = document.getElementById("extent");
const arrow = document.getElementById('arrow');
const button = document.getElementById("left-button");
const needle = document.getElementById("needle");



const select = document.querySelector("#image-select");
const svg1 = document.querySelector("#Layer_1");
const svg2 = document.querySelector("#Layer_2");

select.addEventListener("change", function() {

  
  svg1.style.display = "none";
  svg2.style.display = "none";
  if (this.value === "image1") {
    svg1.style.display = "block";
  } else if (this.value === "image2") {
    svg2.style.display = "block";
   
  }});























var resistance = document.getElementById('resistance1').value;



function leftShift(){



  
  x = x - 5;
  moveline.setAttribute("x1", parseInt(moveline.getAttribute("x1")) - 5);
  arrow.setAttribute("transform", `translate(${x}, 0)`);
  if(circuit==true && circuit2==false){
  if (resistance ==='4') {

    if (parseInt(moveline.getAttribute("x1")) > 529) {
      needle.style.transform = ('rotate(30deg)');
      needle.style.transition = 'transform 2s';
      needle.style.transformOrigin = "670.49px 387.41px";
    }
    if (parseInt(moveline.getAttribute("x1")) == 529) {
      needle.style.transform = ('rotate(0deg)');
      needle.style.transformOrigin = "670.49px 387.41px";
    }
    else if (parseInt(moveline.getAttribute("x1")) < 530) {
      needle.style.transform = ('rotate(-30deg)');
      needle.style.transition = 'transform 2s';

      needle.style.transformOrigin = "670.49px 387.41px";
    }

  }

  if (resistance ==='2') {
    if (parseInt(moveline.getAttribute("x1")) > 499) {
      needle.style.transform = ('rotate(30deg)');
      needle.style.transition = 'transform 2s';
      needle.style.transformOrigin = "670.49px 387.41px";
    }
    if (parseInt(moveline.getAttribute("x1")) == 499) {
      needle.style.transform = ('rotate(0deg)');
      needle.style.transformOrigin = "670.49px 387.41px";
    }
    else if (parseInt(moveline.getAttribute("x1")) < 499) {
      needle.style.transform = ('rotate(-30deg)');
      needle.style.transition = 'transform 2s';

      needle.style.transformOrigin = "670.49px 387.41px";
    }

  }

  if (resistance === '6') {
    if (parseInt(moveline.getAttribute("x1")) > 474) {
      needle.style.transform = ('rotate(30deg)');
      needle.style.transition = 'transform 2s';
      needle.style.transformOrigin = "670.49px 387.41px";
    }
    if (parseInt(moveline.getAttribute("x1")) == 474) {
      needle.style.transform = ('rotate(0deg)');
      needle.style.transformOrigin = "670.49px 387.41px";
    }
    else if (parseInt(moveline.getAttribute("x1")) < 474) {
      needle.style.transform = ('rotate(-30deg)');
      needle.style.transition = 'transform 2s';

      needle.style.transformOrigin = "670.49px 387.41px";
    }

  }
  }
if (circuit2==true && circuit==false) {
  



    if (resistance === '4'  && resistance1 === '1') {
    
        if (parseInt(moveline.getAttribute("x1")) > 409) {
          needle.style.transform = ('rotate(30deg)');
          needle.style.transition = 'transform 2s';
          needle.style.transformOrigin = "670.49px 387.41px";
        }
        if (parseInt(moveline.getAttribute("x1")) == 409) {
          needle.style.transform = ('rotate(0deg)');
          needle.style.transformOrigin = "670.49px 387.41px";
        }
        else if (parseInt(moveline.getAttribute("x1")) < 409) {
          needle.style.transform = ('rotate(-30deg)');
          needle.style.transition = 'transform 2s';
  
          needle.style.transformOrigin = "670.49px 387.41px";
        }
      }
      if (resistance === '4'  && resistance1 ==='2') {
        if (parseInt(moveline.getAttribute("x1")) > 444) {
          needle.style.transform = ('rotate(30deg)');
          needle.style.transition = 'transform 2s';
          needle.style.transformOrigin = "670.49px 387.41px";
        }
        if (parseInt(moveline.getAttribute("x1")) == 444) {
          needle.style.transform = ('rotate(0deg)');
          needle.style.transformOrigin = "670.49px 387.41px";
        }
        else if (parseInt(moveline.getAttribute("x1")) < 444) {
          needle.style.transform = ('rotate(-30deg)');
          needle.style.transition = 'transform 2s';
  
          needle.style.transformOrigin = "670.49px 387.41px";
        }
      }
      if  (resistance === '4'  && resistance1 === '3') {
        if (parseInt(moveline.getAttribute("x1")) > 464) {
          needle.style.transform = ('rotate(30deg)');
          needle.style.transition = 'transform 2s';
          needle.style.transformOrigin = "670.49px 387.41px";
        }
        if (parseInt(moveline.getAttribute("x1")) == 464) {
          needle.style.transform = ('rotate(0deg)');
          needle.style.transformOrigin = "670.49px 387.41px";
        }
        else if (parseInt(moveline.getAttribute("x1")) < 464) {
          needle.style.transform = ('rotate(-30deg)');
          needle.style.transition = 'transform 2s';
  
          needle.style.transformOrigin = "670.49px 387.41px";
        }
      }
      if (resistance1 == '4' && resistance1==='4') {
        if (parseInt(moveline.getAttribute("x1")) > 489) {
          needle.style.transform = ('rotate(30deg)');
          needle.style.transition = 'transform 2s';
          needle.style.transformOrigin = "670.49px 387.41px";
        }
        if (parseInt(moveline.getAttribute("x1")) == 489) {
          needle.style.transform = ('rotate(0deg)');
          needle.style.transformOrigin = "670.49px 387.41px";
        }
        else if (parseInt(moveline.getAttribute("x1")) < 489) {
          needle.style.transform = ('rotate(-30deg)');
          needle.style.transition = 'transform 2s';
  
          needle.style.transformOrigin = "670.49px 387.41px";
        }
      }



      
    if (resistance === '2'  && resistance1 === '1') {
  
      if (parseInt(moveline.getAttribute("x1")) > 424) {
        needle.style.transform = ('rotate(30deg)');
        needle.style.transition = 'transform 2s';
        needle.style.transformOrigin = "670.49px 387.41px";
      }
      if (parseInt(moveline.getAttribute("x1")) == 424) {
        needle.style.transform = ('rotate(0deg)');
        needle.style.transformOrigin = "670.49px 387.41px";
      }
      else if (parseInt(moveline.getAttribute("x1")) < 424) {
        needle.style.transform = ('rotate(-30deg)');
        needle.style.transition = 'transform 2s';

        needle.style.transformOrigin = "670.49px 387.41px";
      }
    }
    if (resistance === '2'  && resistance1 === '2') {
      if (parseInt(moveline.getAttribute("x1")) > 459) {
        needle.style.transform = ('rotate(30deg)');
        needle.style.transition = 'transform 2s';
        needle.style.transformOrigin = "670.49px 387.41px";
      }
      if (parseInt(moveline.getAttribute("x1")) == 459) {
        needle.style.transform = ('rotate(0deg)');
        needle.style.transformOrigin = "670.49px 387.41px";
      }
      else if (parseInt(moveline.getAttribute("x1")) < 459) {
        needle.style.transform = ('rotate(-30deg)');
        needle.style.transition = 'transform 2s';

        needle.style.transformOrigin = "670.49px 387.41px";
      }
    }
    if  (resistance === '2'  && resistance1 === '3') {
      if (parseInt(moveline.getAttribute("x1")) > 479) {
        needle.style.transform = ('rotate(30deg)');
        needle.style.transition = 'transform 2s';
        needle.style.transformOrigin = "670.49px 387.41px";
      }
      if (parseInt(moveline.getAttribute("x1")) == 479) {
        needle.style.transform = ('rotate(0deg)');
        needle.style.transformOrigin = "670.49px 387.41px";
      }
      else if (parseInt(moveline.getAttribute("x1")) < 479) {
        needle.style.transform = ('rotate(-30deg)');
        needle.style.transition = 'transform 2s';

        needle.style.transformOrigin = "670.49px 387.41px";
      }
    }
    if (resistance1 == '2' && resistance1==='4') {
      if (parseInt(moveline.getAttribute("x1")) > 494) {
        needle.style.transform = ('rotate(30deg)');
        needle.style.transition = 'transform 2s';
        needle.style.transformOrigin = "670.49px 387.41px";
      }
      if (parseInt(moveline.getAttribute("x1")) == 494) {
        needle.style.transform = ('rotate(0deg)');
        needle.style.transformOrigin = "670.49px 387.41px";
      }
      else if (parseInt(moveline.getAttribute("x1")) < 494) {
        needle.style.transform = ('rotate(-30deg)');
        needle.style.transition = 'transform 2s';

        needle.style.transformOrigin = "670.49px 387.41px";
      }
    }  


    
    if (resistance === '6'  && resistance1 === '1') {
  
      if (parseInt(moveline.getAttribute("x1")) > 389) {
        needle.style.transform = ('rotate(30deg)');
        needle.style.transition = 'transform 2s';
        needle.style.transformOrigin = "670.49px 387.41px";
      }
      if (parseInt(moveline.getAttribute("x1")) == 389) {
        needle.style.transform = ('rotate(0deg)');
        needle.style.transformOrigin = "670.49px 387.41px";
      }
      else if (parseInt(moveline.getAttribute("x1")) < 389) {
        needle.style.transform = ('rotate(-30deg)');
        needle.style.transition = 'transform 2s';

        needle.style.transformOrigin = "670.49px 387.41px";
      }
    }
    if (resistance === '6'  && resistance1 === '2') {
      if (parseInt(moveline.getAttribute("x1")) > 424) {
        needle.style.transform = ('rotate(30deg)');
        needle.style.transition = 'transform 2s';
        needle.style.transformOrigin = "670.49px 387.41px";
      }
      if (parseInt(moveline.getAttribute("x1")) == 424) {
        needle.style.transform = ('rotate(0deg)');
        needle.style.transformOrigin = "670.49px 387.41px";
      }
      else if (parseInt(moveline.getAttribute("x1")) < 424) {
        needle.style.transform = ('rotate(-30deg)');
        needle.style.transition = 'transform 2s';

        needle.style.transformOrigin = "670.49px 387.41px";
      }
    }
    if  (resistance === '6'  && resistance1 === '3') {
      if (parseInt(moveline.getAttribute("x1")) > 449) {
        needle.style.transform = ('rotate(30deg)');
        needle.style.transition = 'transform 2s';
        needle.style.transformOrigin = "670.49px 387.41px";
      }
      if (parseInt(moveline.getAttribute("x1")) == 449) {
        needle.style.transform = ('rotate(0deg)');
        needle.style.transformOrigin = "670.49px 387.41px";
      }
      else if (parseInt(moveline.getAttribute("x1")) < 449) {
        needle.style.transform = ('rotate(-30deg)');
        needle.style.transition = 'transform 2s';

        needle.style.transformOrigin = "670.49px 387.41px";
      }
    }
    if (resistance1 == '6' && resistance1==='4') {
      if (parseInt(moveline.getAttribute("x1")) > 469) {
        needle.style.transform = ('rotate(30deg)');
        needle.style.transition = 'transform 2s';
        needle.style.transformOrigin = "670.49px 387.41px";
      }
      if (parseInt(moveline.getAttribute("x1")) == 469) {
        needle.style.transform = ('rotate(0deg)');
        needle.style.transformOrigin = "670.49px 387.41px";
      }
      else if (parseInt(moveline.getAttribute("x1")) < 469) {
        needle.style.transform = ('rotate(-30deg)');
        needle.style.transition = 'transform 2s';

        needle.style.transformOrigin = "670.49px 387.41px";
      }
    }  









    }
  
}





  


const rightbutton = document.getElementById("right-button");
// x=x+10;
function rightShift() {
  x = x + 5;
 
  moveline.setAttribute("x1", parseInt(moveline.getAttribute("x1")) + 5);
  arrow.setAttribute("transform", `translate(${x}, 0)`);
  // console.log(parseInt(moveline.getAttribute("x1")));

  if(circuit==true){
  
  if (resistance === '4') {
    if (parseInt(moveline.getAttribute("x1")) > 529) {
      needle.style.transform = ('rotate(30deg)');
      needle.style.transition = 'transform 2s';
      needle.style.transformOrigin = "670.49px 387.41px";
    }
    if (parseInt(moveline.getAttribute("x1")) == 529) {
      needle.style.transform = ('rotate(0deg)');
      needle.style.transformOrigin = "670.49px 387.41px";
    }
    else if (parseInt(moveline.getAttribute("x1")) < 530) {
      needle.style.transform = ('rotate(-30deg)');
      needle.style.transition = 'transform 2s';

      needle.style.transformOrigin = "670.49px 387.41px";
    }

  }

  if (resistance === '2') {
    if (parseInt(moveline.getAttribute("x1")) > 499) {
      needle.style.transform = ('rotate(30deg)');
      needle.style.transition = 'transform 2s';
      needle.style.transformOrigin = "670.49px 387.41px";
    }
    if (parseInt(moveline.getAttribute("x1")) == 499) {
      needle.style.transform = ('rotate(0deg)');
      needle.style.transformOrigin = "670.49px 387.41px";
    }
    else if (parseInt(moveline.getAttribute("x1")) < 499) {
      needle.style.transform = ('rotate(-30deg)');
      needle.style.transition = 'transform 2s';

      needle.style.transformOrigin = "670.49px 387.41px";
    }

  }


  if (resistance === '6') {
    if (parseInt(moveline.getAttribute("x1")) > 474) {
      needle.style.transform = ('rotate(30deg)');
      needle.style.transition = 'transform 2s';
      needle.style.transformOrigin = "670.49px 387.41px";
    }
    if (parseInt(moveline.getAttribute("x1")) == 474) {
      needle.style.transform = ('rotate(0deg)');
      needle.style.transformOrigin = "670.49px 387.41px";
    }
    else if (parseInt(moveline.getAttribute("x1")) < 474) {
      needle.style.transform = ('rotate(-30deg)');
      needle.style.transition = 'transform 2s';

      needle.style.transformOrigin = "670.49px 387.41px";
    }

  }
  }


if(circuit2==true && circuit==false){



  if (resistance === '4'  && resistance1 === '1') {
  
      if (parseInt(moveline.getAttribute("x1")) > 409) {
        needle.style.transform = ('rotate(30deg)');
        needle.style.transition = 'transform 2s';
        needle.style.transformOrigin = "670.49px 387.41px";
      }
      if (parseInt(moveline.getAttribute("x1")) == 409) {
        needle.style.transform = ('rotate(0deg)');
        needle.style.transformOrigin = "670.49px 387.41px";
      }
      else if (parseInt(moveline.getAttribute("x1")) < 409) {
        needle.style.transform = ('rotate(-30deg)');
        needle.style.transition = 'transform 2s';

        needle.style.transformOrigin = "670.49px 387.41px";
      }
    }
    if (resistance === '4'  && resistance1 === '2') {
      if (parseInt(moveline.getAttribute("x1")) > 444) {
        needle.style.transform = ('rotate(30deg)');
        needle.style.transition = 'transform 2s';
        needle.style.transformOrigin = "670.49px 387.41px";
      }
      if (parseInt(moveline.getAttribute("x1")) == 444) {
        needle.style.transform = ('rotate(0deg)');
        needle.style.transformOrigin = "670.49px 387.41px";
      }
      else if (parseInt(moveline.getAttribute("x1")) < 444) {
        needle.style.transform = ('rotate(-30deg)');
        needle.style.transition = 'transform 2s';

        needle.style.transformOrigin = "670.49px 387.41px";
      }
    }
    if  (resistance === '4'  && resistance1 === '3') {
      if (parseInt(moveline.getAttribute("x1")) > 464) {
        needle.style.transform = ('rotate(30deg)');
        needle.style.transition = 'transform 2s';
        needle.style.transformOrigin = "670.49px 387.41px";
      }
      if (parseInt(moveline.getAttribute("x1")) == 464) {
        needle.style.transform = ('rotate(0deg)');
        needle.style.transformOrigin = "670.49px 387.41px";
      }
      else if (parseInt(moveline.getAttribute("x1")) < 464) {
        needle.style.transform = ('rotate(-30deg)');
        needle.style.transition = 'transform 2s';

        needle.style.transformOrigin = "670.49px 387.41px";
      }
    }
    if (resistance1 == '4' && resistance1==='4') {
      if (parseInt(moveline.getAttribute("x1")) > 489) {
        needle.style.transform = ('rotate(30deg)');
        needle.style.transition = 'transform 2s';
        needle.style.transformOrigin = "670.49px 387.41px";
      }
      if (parseInt(moveline.getAttribute("x1")) == 489) {
        needle.style.transform = ('rotate(0deg)');
        needle.style.transformOrigin = "670.49px 387.41px";
      }
      else if (parseInt(moveline.getAttribute("x1")) < 489) {
        needle.style.transform = ('rotate(-30deg)');
        needle.style.transition = 'transform 2s';

        needle.style.transformOrigin = "670.49px 387.41px";
      }
    }

  


    if (resistance === '2'  && resistance1 === '1') {
  
      if (parseInt(moveline.getAttribute("x1")) > 424) {
        needle.style.transform = ('rotate(30deg)');
        needle.style.transition = 'transform 2s';
        needle.style.transformOrigin = "670.49px 387.41px";
      }
      if (parseInt(moveline.getAttribute("x1")) == 424) {
        needle.style.transform = ('rotate(0deg)');
        needle.style.transformOrigin = "670.49px 387.41px";
      }
      else if (parseInt(moveline.getAttribute("x1")) < 424) {
        needle.style.transform = ('rotate(-30deg)');
        needle.style.transition = 'transform 2s';

        needle.style.transformOrigin = "670.49px 387.41px";
      }
    }
    if (resistance === '2'  && resistance1 === '2') {
      if (parseInt(moveline.getAttribute("x1")) > 459) {
        needle.style.transform = ('rotate(30deg)');
        needle.style.transition = 'transform 2s';
        needle.style.transformOrigin = "670.49px 387.41px";
      }
      if (parseInt(moveline.getAttribute("x1")) == 459) {
        needle.style.transform = ('rotate(0deg)');
        needle.style.transformOrigin = "670.49px 387.41px";
      }
      else if (parseInt(moveline.getAttribute("x1")) < 459) {
        needle.style.transform = ('rotate(-30deg)');
        needle.style.transition = 'transform 2s';

        needle.style.transformOrigin = "670.49px 387.41px";
      }
    }
    if  (resistance === '2'  && resistance1 === '3') {
      if (parseInt(moveline.getAttribute("x1")) > 479) {
        needle.style.transform = ('rotate(30deg)');
        needle.style.transition = 'transform 2s';
        needle.style.transformOrigin = "670.49px 387.41px";
      }
      if (parseInt(moveline.getAttribute("x1")) == 479) {
        needle.style.transform = ('rotate(0deg)');
        needle.style.transformOrigin = "670.49px 387.41px";
      }
      else if (parseInt(moveline.getAttribute("x1")) < 479) {
        needle.style.transform = ('rotate(-30deg)');
        needle.style.transition = 'transform 2s';

        needle.style.transformOrigin = "670.49px 387.41px";
      }
    }
    if (resistance1 == '2' && resistance1==='4') {
      if (parseInt(moveline.getAttribute("x1")) > 494) {
        needle.style.transform = ('rotate(30deg)');
        needle.style.transition = 'transform 2s';
        needle.style.transformOrigin = "670.49px 387.41px";
      }
      if (parseInt(moveline.getAttribute("x1")) == 494) {
        needle.style.transform = ('rotate(0deg)');
        needle.style.transformOrigin = "670.49px 387.41px";
      }
      else if (parseInt(moveline.getAttribute("x1")) < 494) {
        needle.style.transform = ('rotate(-30deg)');
        needle.style.transition = 'transform 2s';

        needle.style.transformOrigin = "670.49px 387.41px";
      }
    }  






  }

  console.log(parseInt(moveline.getAttribute("x1")))  ;
  
}


  





// switch

var image1_1=document.getElementById('switch1_1');
var rotateBtn1_1=document.getElementById('switch1_1btn');
var rotation1_1=0;

function switchonoff1_1() {
  
  rotation1 = 40;
    if (rotateBtn1_1.style.fill == "red" && circuit==true) {
  
      //   image.style.transform=`translate(0,10)`;
  
  
      image1_1.style.transform = `rotate(${rotation1}deg)`;
      image1_1.style.transformOrigin = "340.99px 58.69px";
  
  
      document.getElementById("switch1_1btn").style.fill = "green";
      document.getElementById("switch1_1text").innerHTML = "Off";
  
      
  
  
    }
     else if (rotateBtn1_1.style.fill == "green" ) {
      rotateBtn1_1.style.fill = "red";
      image1_1.style.transform = `rotate(${-rotation1}deg)`;
      document.getElementById("switch1_1text").innerHTML = "On";
    
    } 
   
    
  }


  
var image2_2=document.getElementById('switch2_2');
var rotateBtn2_2=document.getElementById('switch2_2btn');
var rotation2_2=0;

function switchonoff2_2() {
  
  rotation1 = 40;
    if (rotateBtn2_2.style.fill == "red" && circuit1==true ) {
  
      //   image.style.transform=`translate(0,10)`;
  
  
      image2_2.style.transform = `rotate(${rotation1}deg)`;
      image2_2.style.transformOrigin = "342.28px 538.36px";
  
  
      document.getElementById("switch2_2btn").style.fill = "green";
      document.getElementById("switch2_2text").innerHTML = "Off";
  
      
  
  
    }
     else if (rotateBtn2_2.style.fill == "green" ) {
      rotateBtn2_2.style.fill = "red";
      image2_2.style.transform = `rotate(${-rotation1}deg)`;
      document.getElementById("switch2_2text").innerHTML = "On";
    
    } 
   
    
  }

























var image1 = document.getElementById("switch1");
var rotateBtn1 = document.getElementById("switch1btn");
// var textBtn1 = document.getElementById("switch1text");

let rotation1 = 0;


function switchonoff1() {


  
rotation1 = 40;
  if (circuit==false && circuit2==false ) {

    //   image.style.transform=`translate(0,10)`;
console.log('sx');

    image1.style.transform = `rotate(${rotation1}deg)`;
    image1.style.transformOrigin = "442.65px 310.71px";

    rotateBtn1.style.fill = "green";
    document.getElementById("switch1text").innerHTML = "Off";

    circuit = true;


    leftShift();
    rightShift();
  }
   else if (circuit==true ) {

    rotateBtn1.style.fill = "red";
    image1.style.transform = `rotate(${-rotation1}deg)`;
    document.getElementById("switch1text").innerHTML = "On";
    circuit = false;
    rightShift();
    leftShift();
  } 
 
  return circuit;
}

// switch 2

var image2 = document.getElementById("switch2");
var rotateBtn2 = document.getElementById("switch2btn");
var textBtn2 = document.getElementById("switch2text");


function switchonoff2() {
  
  rotation = 40;
    if (rotateBtn2.style.fill ==='red' && circuit==false ) {
  
      //   image.style.transform=`translate(0,10)`;
  
  
      image2.style.transform = `rotate(${rotation}deg)`;
      image2.style.transformOrigin = "439.5px 368.5px";
  
  
      rotateBtn2.style.fill = "green";
      document.getElementById("switch2text").innerHTML = "Off";
  
      circuit2 = true;
  
  
      leftShift();
      rightShift();
    }
    else if (rotateBtn2.style.fill === "green") {
      console.log("qw");
      rotateBtn2.style.fill = "red";
      image2.style.transform = `rotate(${-rotation}deg)`;
      document.getElementById("switch2text").innerHTML = "On";
      circuit2 = false;
      rightShift();
      leftShift();
    }
   
    return circuit2;
  };






















var resistance = 0;
function getResistance(id) {
  // let resistance=0;

  if (id === 'resistance1') {


    resistance = document.getElementById(id).value;
    document.getElementById("resistance-1-display").innerText = resistance + " " + "ohm";

    document.getElementById("resistance-1-display-svg").innerHTML = resistance + " " + "ohm";
  }
}
var resistance1 = 0;
function getResistance12(id) {
  // let resistance=0;
  if (id === 'resistance2') {


    resistance1 = document.getElementById(id).value;
    document.getElementById("resistance-2-display").innerText = resistance1 + " " + "ohm";

    document.getElementById("resistance-2-display-svg").innerHTML = resistance1 + " " + "ohm";
    document.getElementById("voltmeter1").innerHTML = ((12 / (4 + +resistance1)) * 4) + +0.05 + " " + "V";



  
}
}
