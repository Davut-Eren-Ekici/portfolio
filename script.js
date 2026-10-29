// Beceri bilgileri tek bir yerde duruyor.
// Yeni beceri eklemek için buraya bir kayıt, HTML'e de data-skill değeri aynı olan bir düğme ekle.
const skills = {
    html: {
        title: "HTML",
        items: ["Semantik HTML", "Formlar", "Tablolar", "Responsive tasarım", "SEO temelleri","Vs"]
    },
    css: {
        title: "CSS",
        items: ["Flexbox", "Grid sistemi", "Responsive tasarım", "Animasyonlar", "Geçiş efektleri (transitions)","Vs"]
    },
    javascript: {
        title: "JavaScript",
        items: [
            "Değişkenler (let, const)",
            "Fonksiyonlar",
            "DOM manipülasyonu",
            "addEventListener",
            "textContent ve innerHTML",
            "Vs"
        ]
    },
    csharp: {
        title: "C#",
        items: ["Windows Forms", "Değişkenler", "Koşullar (if-else)", "Döngüler (for, while)", "Metotlar","Vs"]
    },
    sql: {
        title: "SQL Server",
        items: ["SELECT", "INSERT", "UPDATE", "DELETE", "WHERE","Vs"]
    },
    java: {
        title: "Java",
        items: ["For / While", "Diziler (arrays)", "Koşullar (if-else)", "Veri tipleri","Vs"]
    },
    python: {
        title: "Python",
        items: ["Değişkenler", "Koşullar (if-else)", "Döngüler", "Fonksiyonlar", "Temel veri tipleri","Vs"]
    },
    git: {
        title: "Git",
        items: ["git init", "git add", "git commit", "git status", "git push", "git config","Vs"]
    },
    github: {
        title: "GitHub",
        items: ["Repository yönetimi", "Commit geçmişi", "Push ve pull", "README hazırlama", "GitHub Pages","Vs"]
    }
};

const dialog = document.querySelector("#skill-dialog");
const dialogTitle = document.querySelector("#dialog-title");
const dialogLevel = document.querySelector("#dialog-level");
const dialogList = document.querySelector("#dialog-list");
const closeButton = document.querySelector(".dialog-close");

function openSkill(key) {
    const skill = skills[key];
    if (!skill) return;

    dialogTitle.textContent = skill.title;
    

    // innerHTML yerine textContent kullanıyoruz, böylece metin her zaman güvenli kalır.
    dialogList.replaceChildren(
        ...skill.items.map((text) => {
            const li = document.createElement("li");
            li.textContent = text;
            return li;
        })
    );

    dialog.showModal();
}

document.querySelectorAll("[data-skill]").forEach((button) => {
    button.addEventListener("click", () => openSkill(button.dataset.skill));
});

closeButton.addEventListener("click", () => dialog.close());

// Pencerenin dışına (karartılmış alana) tıklayınca kapat.
// Escape tuşu <dialog> tarafından zaten ele alınır.
dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
});

// Bölüm animasyonları: tek tip, kısa, bir kez ve hareket azaltma tercihine saygılı.
if (window.AOS) {
    AOS.init({
        duration: 600,
        once: true,
        disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches
    });
}