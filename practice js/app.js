
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

const color = document.querySelector(".color");
//change color with linear gradient
btn1.addEventListener('click', function(){
   const first ='#'+(Math.random()*0xFFFFFF<<0).toString(16);
   const second ='#'+(Math.random()*0xFFFFFF<<0).toString(16);
   const three ='#'+(Math.random()*0xFFFFFF<<0).toString(16);
   const orient ="135deg";
     //document.body.style.backgroundColor= colors;
    document.body.style.backgroundImage="linear-gradient("+orient+',' +first+','+ second+','+three+")";
    color.textContent = "linear-gradient("+orient+',' +first+','+ second+','+three+")";
   
    
})

// change color with hex
btn2.addEventListener('click', function(){ 
      const colors ='#'+(Math.random()*0xFFFFFF<<0).toString(16);
      document.body.style.backgroundImage="none";

     document.body.style.backgroundColor=colors;
    color.textContent = colors;
})
// CHANGE COLOR  with rgb
btn3.addEventListener('click',function(){
    const first =getRandomInt(255);
    const second =getRandomInt(255);
    const three =getRandomInt(255);
    document.body.style.backgroundImage="none";

      //document.body.style.backgroundColor= colors;
     document.body.style.backgroundColor="rgb(" +first+','+ second+','+three+")";
     color.textContent = "rgb(" +first+','+ second+','+three+")";
})
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }