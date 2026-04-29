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

function fecharPaginas() {
    sections.forEach(section => { section.classList.add("fechado") });
}

document.querySelectorAll(".redirecionamentos").forEach(red => {
    red.addEventListener("click", () => {
        fecharPaginas();
        const indentificador = red.dataset.target;
        document.querySelector(`.${indentificador}`).classList.remove("fechado");
    })
})

// ========================================== IA BOT ===========================================

