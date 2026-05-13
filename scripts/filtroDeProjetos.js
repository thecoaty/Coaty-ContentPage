const selectFiltrar = document.getElementById("tipo-projeto");
const botaoFiltrar = document.getElementById("btnFiltrar");
botaoFiltrar.addEventListener('click', () =>{
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
})
