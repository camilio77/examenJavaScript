export const carritoDefault = async () => {
    let datos = await fetch('http://172.16.101.146:5999/carrito');
    let data = await datos.json();
    return data;
}
export const obtenerChaqueta = async (id) => {
    let datos = await fetch(`http://172.16.101.146:5999/abrigo/?id=${id}`);
    let data = await datos.json();
    return data;
}
export const obtenerCamiseta = async (id) => {
    let datos = await fetch(`http://172.16.101.146:5999/camiseta/?id=${id}`);
    let data = await datos.json();
    return data;
}
export const obtenerPantalon = async (id) => {
    let datos = await fetch(`http://172.16.101.146:5999/pantalon/?id=${id}`);
    let data = await datos.json();
    return data;
}


let span = document.querySelector('span');
span.setAttribute("articulos", 0)
export const carritoF = async (id) => {
    let content = document.querySelector(".ccontent")
    let maquetacion = ""
    if (id[0] == "C"){
        let ide = id.split("C")[1]
        console.log(ide);
        let camiseta = await obtenerCamiseta(ide)
        maquetacion += `
        <div id="IT${camiseta[0].id}" class="cbox">
            <div class="text">
                <div><img src="${camiseta[0].imagen}"></div>
                <h2>${camiseta[0].nombre}/h2>
                <input type="number" value="1">
                <label>$ ${camiseta[0].precio}</label>
                <a href="../views/carrito1.html"><button><i class='bx bxs-trash'></i></button></a>
            </div>
        </div>
        `
        console.log(maquetacion);
        content.innerHTML = maquetacion
    } else if(id[0] == "CH"){
        let ide = id.split("CH")[1]
        console.log(ide);
        let camiseta = await obtenerChaqueta(ide)
        maquetacion += `
        <div id="IT${camiseta[0].id}" class="cbox">
            <div class="text">
                <div><img src="${camiseta[0].imagen}"></div>
                <h2>${camiseta[0].nombre}/h2>
                <input type="number" value="1">
                <label>$ ${camiseta[0].precio}</label>
                <a href="../views/carrito1.html"><button><i class='bx bxs-trash'></i></button></a>
            </div>
        </div>
        `
        console.log(maquetacion);
        content.innerHTML = maquetacion
    } else {
        let ide = id.split("P")[1]
        console.log(ide);
        let camiseta = await obtenerPantalon(ide)
        maquetacion += `
        <div id="IT${camiseta[0].id}" class="cbox">
            <div class="text">
                <div><img src="${camiseta[0].imagen}"></div>
                <h2>${camiseta[0].nombre}/h2>
                <input type="number" value="1">
                <label>$ ${camiseta[0].precio}</label>
                <a href="../views/carrito1.html"><button><i class='bx bxs-trash'></i></button></a>
            </div>
        </div>
        `
        console.log(maquetacion);
        content.innerHTML = maquetacion
    }
}