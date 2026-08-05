const baslik = document.querySelector("h1");
baslik.style.color="#60a5fa";
baslik.style.fontSize="80px";

const heroText = document.querySelector(".hero-text");
const buton = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const htmlCart = document.querySelector("#html-card");
const closeButton= document.querySelector(".close");
const modalTitle = document.querySelector("#modal-title");
const modalText = document.querySelector("#modal-text");
const cssCard = document.querySelector("#css-card");
const Csharp = document.querySelector("#C-sharp-Card");
const javascript = document.querySelector("#JavaScript-Card");
const Sql = document.querySelector("#Sql-Card");
const pythonCard = document.querySelector("#Python-Card");
const GitHubCard= document.querySelector("#GitHub-Card");
const GitCard = document.querySelector("#Git-Card");



let yesilmi=false;

function modalAc(baslik,aciklama){
  modalTitle.textContent=baslik;
  modalText.innerHTML=aciklama;
  modal.style.display="flex";
}


function RenkDeğistir(){
   
        
        if(yesilmi){
        buton.style.backgroundColor ="#2563eb";
        yesilmi=false;
        
         
         heroText.textContent =("Future Full Stack Developer 🚀 ")
         
        
  

    } 
    else {
        buton.style.backgroundColor="pink"
        yesilmi=true;
      
      heroText.textContent =("Davut Eren Ekici")
       
    }
};

buton.addEventListener("click", RenkDeğistir);



htmlCart.addEventListener("click", function (){
 
  modalAc(
       "🌐 HTML",
        `<strong>Seviye:</strong> İyi

    <ul>
        <li>Semantik HTML</li>
        <li>Formlar</li>
        <li>Tablolar</li>
        <li>Responsive Tasarım</li>
        <li>SEO Temelleri</li>
    </ul>` 
    );  
  
  


});
closeButton.addEventListener("click" ,function(){
  modal.style.display= "none";
});

cssCard.addEventListener("click", function(){
  modalAc(
       "🎨 CSS",
       `<strong>Seviye:</strong> İyi
  <ul>
    <li>Flexbox</li>
    <li>Grid Sistemi</li>
    <li>Responsive Tasarım</li>
    <li>Animasyonlar</li>
    <li>Geçiş Efektleri (Transitions)</li>
</ul>`
  );
  
});

Csharp.addEventListener("click", function(){
  modalAc(
    "💜 C#",
    `
    <strong>Seviye:</strong> İyi

    <ul>
        <li>Windows Forms</li>
        <li>Değişkenler</li>
        <li>Koşullar (if-else)</li>
        <li>Döngüler (for, while)</li>
        <li>Metotlar (Functions)</li>
    </ul>
    `

  );
  
});

javascript.addEventListener("click", function(){
  modalAc(
   "⚡ JavaScript",
    `
    <strong>Seviye:</strong> Temel

    <ul>
        <li>Değişkenler (let, const)</li>
        <li>Fonksiyonlar</li>
        <li>DOM Manipülasyonu</li>
        <li>addEventListener</li>
        <li>textContent & innerHTML</li>
    </ul>
    `
  );
});

Sql.addEventListener("click", function(){
  modalAc(
    "🗄️ SQL Server",
    `
    <strong>Seviye:</strong> İyi

    <ul>
        <li>SELECT</li>
        <li>INSERT</li>
        <li>UPDATE</li>
        <li>DELETE</li>
        <li>WHERE</li>
        
    </ul>
    `
  );
});

pythonCard.addEventListener("click", function(){
  modalAc(
   "🐍 Python",
    `
    <strong>Seviye:</strong> Temel

    <ul>
        <li>Değişkenler</li>
        <li>Koşullar (if-else)</li>
        <li>Döngüler</li>
        <li>Fonksiyonlar</li>
        <li>Temel Veri Tipleri</li>
    </ul>
    `

  );
});

GitHubCard.addEventListener("click", function(){
  modalAc(
    "🐙 GitHub",
    `
    <strong>Seviye:</strong> Orta

    <ul>
        <li>Repository Yönetimi</li>
        <li>Commit Geçmişi</li>
        <li>Push & Pull</li>
        <li>README Hazırlama</li>
        <li>GitHub Pages</li>
    </ul>
    `
  );
});

GitCard.addEventListener("click", function(){
  modalAc(
    "🌿 Git",
    `
    <strong>Seviye:</strong> Orta

    <ul>
        <li>git init</li>
        <li>git add</li>
        <li>git commit</li>
        <li>git status</li>
        <li>git push</li>
        <li>git config</li>
    </ul>
    `
  );
});