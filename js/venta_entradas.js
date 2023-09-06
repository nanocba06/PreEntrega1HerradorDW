let cantidadEntradas = 10;
let precioEntrada = 0;
let totalVenta = 0;
let nomCategoria = "";

function calcularSubtotal(cantidad, precio) {
    return cantidad * precio;
}

function comprarEntradas(){

    while (cantidadEntradas > 0) {
        let categoria = parseInt(prompt("Ingrese la categoría de la entrada: \n 1-VIP \n 2-Platea \n 3-General \n 4-Salir"));

        //console.log(categoria);

        if (categoria === 1) {
            precioEntrada = 300;
        } else if (categoria === 2) {
            precioEntrada = 100;
        } else if (categoria === 3){
            precioEntrada = 50;
        } else if (categoria === 4){
            break;
        } else if (categoria === '' || categoria === null){
            alert("Ingresar una Categoría");
            comprarEntradas();
        } else {
            alert("Categoria Incorrecta");
            comprarEntradas();
        }
    
        let cantidadComprar = parseInt(prompt("Quedan " + cantidadEntradas + " entradas. Ingrese la cantidad de entradas que desea comprar:"));
    
        if (cantidadComprar > cantidadEntradas) {
            alert("No hay suficientes entradas disponibles");
        } else {
            let subtotal = calcularSubtotal(cantidadComprar, precioEntrada);
            totalVenta += subtotal;
            cantidadEntradas -= cantidadComprar;

            switch (categoria) {
                case 1:
                    nomCategoria = "Vip";
                    break;
                case 2:
                    nomCategoria = "Platea";
                    break;
                case 3:
                    nomCategoria = "General";
                    break;
            }

            alert("Ha comprado " + cantidadComprar + " entradas " + nomCategoria + ". Subtotal: $" + subtotal);
        }
    }

    if(cantidadEntradas == 0){
        alert("Entradas Agotadas");
    }
}

function disponibilidad(){

    alert("Entradas disponibles: " + cantidadEntradas + "\nTotal recaudado: $" + totalVenta);
}