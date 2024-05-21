import{
    carritoF
} from "./carrito.js"

export const llamadaChaquetas = async () => {
    let datos = await fetch('http://172.16.101.146:5999/abrigo');
    let data = await datos.json();
    return data;
}

let camiseta = await llamadaChaquetas();
let content = document.querySelector(".contentC")
export const cargaChaquetas = () => {
    let camisetas = camiseta
    let maquetacion = ""
    for (let i = 0; i < camisetas.length; i++) {
        let camiseta = camisetas[i];
        maquetacion += `
        <div id="CH${camiseta.id}" class="box" style="background-image: url(${camiseta.imagen})">
            <div class="text">
                <h2>${camiseta.nombre}</h2>
                <div><label>$ ${camiseta.precio}</label><button>Agregar</button></div>
            </div>
        </div>
        `
        console.log(maquetacion);
        content.innerHTML = maquetacion
    }
    // let box = document.querySelectorAll(".box").forEach(box , () => {
    //     let button = box.querySelector("button")
    //     button.addEventListener("click", () => {
    //         var id = box.getAttribute(id)
    //     })
    // });
}

cargaChaquetas()
content.querySelectorAll(".box").forEach(box => {
    box.addEventListener("click", () => {
        let id = box.getAttribute("id")
        carritoF(id)
    })
})