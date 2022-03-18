
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
   const colors ='#'+(Math.random()*0xFFFFFF<<0).toString(16);
   const first ='#'+(Math.random()*0xFFFFFF<<0).toString(16);
   const second ='#'+(Math.random()*0xFFFFFF<<0).toString(16);
   const three ='#'+(Math.random()*0xFFFFFF<<0).toString(16);
   const orient ="135deg";
     //document.body.style.backgroundColor= colors;
    document.body.style.backgroundImage="linear-gradient("+orient+',' +first+','+ second+','+three+")";
    color.textContent = "linear-gradient("+orient+',' +first+','+ second+','+three+")";;
    
})