const changeThemeB = document.getElementById("changeThemeB");
const html = document.documentElement;
const btnIcon = document.getElementById("btnIcon");
const savedTheme = localStorage.getItem("theme");

if(savedTheme == "dark" || savedTheme === null){
    html.setAttribute("data-theme", "dark");
    updateButton(savedTheme);
    localStorage.setItem("theme", "dark");
}
else if (savedTheme == "white") {
  html.setAttribute("data-theme", "white");
} 

changeThemeB.addEventListener("click", () => {
    const currentTheme = html.getAttribute("data-theme");
    const newTheme = currentTheme === "white" ? "dark" : "white";

    html.setAttribute ("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    updateButton(newTheme)
});

function updateButton(theme){
    if(theme === "white"){
        btnIcon.classList.add("fa-moon");
        btnIcon.classList.remove("fa-sun");
    }
    else{
        btnIcon.classList.add("fa-sun");
        btnIcon.classList.remove("fa-moon");
    }
}
