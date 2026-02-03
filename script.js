const changeThemeB = document.getElementById("themeButton");
const html = document.documentElement;
const iconDark = document.getElementById("fa-moon");

//verifica tema salvo 
const savedTheme = localStorage.getItem("theme");
if(savedTheme){
    html.setAttribute("data-theme", savedTheme);
    updateButton(savedTheme);
}
themeButton.addEventListener("click", () => {
const currentTheme = html.getAttribute("data-theme");
const newTheme = currentTheme === "white" ? "dark" : "white";

html.setAttribute ("data-theme", newTheme);
localStorage.setItem("theme", newTheme);

updateButton(newTheme)
});

function updateButton(theme){
    themeButton.textContent =
    theme === "white" ? "🌙" : "☀️";
}

/*Página carrega

JS pergunta:

Existe tema salvo? → usa


Usuário clica no botão

JS muda data-theme

CSS troca as cores

Preferência fica salva
*/
