import filtrarProjetos from "./scripts/filtroDeProjetos.js";
import {setDataTheme, changeTheme} from "./scripts/temas.js"

setDataTheme()
const changeThemeB = document.getElementById("changeThemeB");
changeThemeB.addEventListener("click", changeTheme);

const botaoFiltrar = document.getElementById("btnFiltrar");
if (botaoFiltrar != null){
    botaoFiltrar.addEventListener("click", filtrarProjetos);
}
