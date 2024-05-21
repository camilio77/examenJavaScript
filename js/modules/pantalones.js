import{
    carritoF
} from "./carrito.js"

export const llamadaPantalones = async () => {
    let datos = await fetch('http://172.16.101.146:5999/pantalon');
    let data = await datos.json();
    return data;
}

let camiseta = await llamadaPantalones();
let content = document.querySelector(".contentP")
export const cargaPantalones = () => {
    let camisetas = camiseta
    let maquetacion = ""
    for (let i = 0; i < camisetas.length; i++) {
        let camiseta = camisetas[i];
        maquetacion += `
        <div id="P${camiseta.id}" class="box" style="background-image: url(${camiseta.imagen})">
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

cargaPantalones()

content.querySelectorAll(".box").forEach(box => {
    box.addEventListener("click", () => {
        let id = box.getAttribute("id")
        carritoF(id)
    })

})