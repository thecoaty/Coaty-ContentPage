export default function filtrarProjetos(){
    const selectFiltrar = document.getElementById("tipo-projeto");
    const categoriaFiltro = selectFiltrar.value;
    const projetos = document.querySelectorAll(".project");
    projetos.forEach(project =>{
        const tipo = project.dataset.categoria;
        if(categoriaFiltro === "all" || tipo === categoriaFiltro){
            project.classList.remove("oculto");
        }
        else{
            project.classList.add("oculto");
        }
    })
}