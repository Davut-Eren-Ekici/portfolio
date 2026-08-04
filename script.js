const baslik = document.querySelector("h1");
baslik.style.color="#60a5fa";
baslik.style.fontSize="80px";

const heroText = document.querySelector(".hero-text");
const buton = document.querySelector(".btn");


let yesilmi=false;



function RenkDeğistir(){
   
        
        if(yesilmi){
        buton.style.backgroundColor ="#2563eb";
        yesilmi=false;
        
         
         heroText.textContent =("Future Full Stack Developer 🚀 ")
         
        
  

    } 
    else {
        buton.style.backgroundColor="pink"
        yesilmi=true;
      
      heroText.textContent =("JavaScript uygulamam ")
       
    }
};


buton.addEventListener("click", RenkDeğistir);


