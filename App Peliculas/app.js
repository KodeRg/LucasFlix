const flechas = document.querySelectorAll(".flecha");
const listaPeliculas = document.querySelectorAll(".pelicula-list");

flechas.forEach((flecha,i)=>{
    const numeroItems = listaPeliculas[i].querySelectorAll("img").length;
    let contadorClick = 0;
    flecha.addEventListener('click',()=>{
        const radio = Math.floor(window.innerWidth/270);
        contadorClick++;
        if(numeroItems - (4 + contadorClick) + (4 - radio) >= 0){
            listaPeliculas[i].style.transform = `translateX(${
                listaPeliculas[i].computedStyleMap().get("transform")[0].x.value - 325
            }px)`;
        }else{
            listaPeliculas[i].style.transform = "translateX(0)";
            contadorClick = 0;
        }
    });
});



//TOGGLE
const bola = document.querySelector(".toggle-bola");
const items = document.querySelectorAll(
    ".container,.pelicula-list-titulo,.navbar-container,.sidebar,.izq-menu-icono,.toggle");


bola.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
    bola.classList.toggle("active")
});