import{
    carritoF
} from "./carrito.js"

export const llamadaChaquetas = async () => {
    let datos = await fetch('http://172.16.101.146:5999/abrigo');
    let data = await datos.json();
    return data;
}
export const llamadaCamisetas = async () => {
    let datos = await fetch('http://172.16.101.146:5999/camiseta');
    let data = await datos.json();
    return data;
}
export const llamadaPantalones = async () => {
    let datos = await fetch('http://172.16.101.146:5999/pantalon');
    let data = await datos.json();
    return data;
}

let camiseta = await llamadaCamisetas();
let chaqueta = await llamadaChaquetas();
let pantalon = await llamadaPantalones();
let content = document.querySelector(".contentT")
export const cargaTodo = () => {
    let camisetas = camiseta
    let chaquetas = chaqueta
    let pantalones = pantalon
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
    for (let i = 0; i < chaquetas.length; i++) {
        let camiseta = chaquetas[i];
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
    for (let i = 0; i < pantalones.length; i++) {
        let camiseta = pantalones[i];
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
}

cargaTodo()
content.querySelectorAll(".box").forEach(box => {
    box.addEventListener("click", () => {
        let id = box.getAttribute("id")
        carritoF(id)
    })

})