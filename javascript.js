var clickTimeright = 0

document.getElementById("buttonRightSection1")
.onclick = function(){
  horizontalButtonRightSection1()
 
};


function horizontalButtonRightSection1() {
  var container = document.getElementById("maincontainer");
  container.style.transform = `translateX(${-100}vw)`
  
}

document.getElementById("buttonRightSection2")
.onclick = function(){
  horizontalButtonRightSection2()
 
};


function horizontalButtonRightSection2() {
  var container = document.getElementById("maincontainer");
  container.style.transform = `translateX(${-200}vw)`
  
}


document.getElementById("buttonLeftSection2")
.onclick = function(){
  horizontalButtonLeft()
  
};


function horizontalButtonLeft() {
  var container = document.getElementById("maincontainer");
  container.style.transform = `translateX(${0}vw)`
  
}

document.getElementById("buttonLeftSection3")
.onclick = function(){
  horizontalButtonLeftSection3()
  
};


function horizontalButtonLeftSection3() {
  var container = document.getElementById("maincontainer");
  container.style.transform = `translateX(${-100}vw)`
  
}

