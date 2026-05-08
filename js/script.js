// ========================================== MENU MOBILE ===========================================

const menu = document.querySelectorAll(".menu-botao");
const menuLateral = document.querySelector(".aside");

menu.forEach(elemento => {
    elemento.addEventListener("click", () => {
        menuLateral.classList.toggle("aberto")
    });
});

// ========================================== REDIRECIONAMENTOS ===========================================

const sections = document.querySelectorAll(".sections");
const links = document.querySelectorAll(".redirecionamentos")


function fecharPaginas() {
    sections.forEach(section => section.classList.add("fechado") );
    
    links.forEach(link => {
        link.classList.remove("active-links")
    })
}

links.forEach(red => {
    red.addEventListener("click", () => {
        fecharPaginas();
        const indentificador = red.dataset.target;
        document.querySelector(`.${indentificador}`).classList.remove("fechado");
        red.classList.add("active-links")
    })
})

// DROP MENU

const btn = document.querySelector(".dropbtn");
const dropMenu = document.querySelector(".dropdown-content");
const linksDropMenu = document.querySelectorAll(".redirecionamentos-dropmenu")
const paginaAtual = document.querySelector(".pagina-atual");

btn.addEventListener("click", () => {
    dropMenu.classList.toggle("ativo");
});

dropMenu.addEventListener("click", (e) => {
    dropMenu.classList.remove("ativo");
});

document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown")) {
        dropMenu.classList.remove("ativo");
    }
});

linksDropMenu.forEach(red => {
    red.addEventListener("click", () => {
        fecharPaginas();
        const indentificador = red.dataset.target;
        document.querySelector(`.${indentificador}`).classList.remove("fechado");
        paginaAtual.innerHTML = indentificador
    })
})

// ========================================== TEXTAREA CRESCENDO ===========================================

const userInput = document.getElementById('msg');
console.log(userInput)

userInput.addEventListener('input', function() {
    this.style.height = 'auto';
    
    this.style.height = (this.scrollHeight) + 'px';
});

// ========================================== CHAT IA ===========================================
