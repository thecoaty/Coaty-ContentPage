
export function setDataTheme(){
    const savedTheme = localStorage.getItem("theme");   
    if(savedTheme == "dark" || savedTheme === null){
    document.documentElement.setAttribute("data-theme", "dark");
    updateButton(savedTheme);
    localStorage.setItem("theme", "dark");
    }
    else if (savedTheme == "white") {
    document.documentElement.setAttribute("data-theme", "white");
    } 
}

 export function changeTheme(){
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "white" ? "dark" : "white";

    document.documentElement.setAttribute ("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    updateButton(newTheme)
}

 function updateButton(theme){
    const btnIcon = document.getElementById("btnIcon");
    if(theme === "white"){
        btnIcon.classList.add("fa-moon");
        btnIcon.classList.remove("fa-sun");
    }
    else{
        btnIcon.classList.add("fa-sun");
        btnIcon.classList.remove("fa-moon");
    }
}
