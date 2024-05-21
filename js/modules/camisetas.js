import{
    carritoF
} from "./carrito.js"

export const llamadaCamisetas = async () => {
    let datos = await fetch('http://172.16.101.146:5999/camiseta');
    let data = await datos.json();
    return data;
}

let camiseta = await llamadaCamisetas();
let content = document.querySelector(".content")
export const cargaCamisetas = () => {
    let camisetas = camiseta
    let maquetacion = ""
    for (let i = 0; i < camisetas.length; i++) {
        let camiseta = camisetas[i];
        maquetacion += `
        <div id="C${camiseta.id}" class="box" style="background-image: url(${camiseta.imagen})">
            <div class="text">
                <h2>${camiseta.nombre}</h2>
                <div><label>$ ${camiseta.precio}</label><button>Agregar</button></div>
            </div>
        </div>
        `
        console.log(maquetacion);
        content.innerHTML = maquetacion
    }
}

cargaCamisetas()
content.querySelectorAll(".box").forEach(box => {
    box.addEventListener("click", () => {
        let id = box.getAttribute("id")
        carritoF(id)
        let span = document.querySelector('span');
        let a = span.getAttribute("articulos");
        console.log(a);
        span.setAttribute('articulos', a+=1)
    })

})
