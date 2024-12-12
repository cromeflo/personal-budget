const tbody = document.getElementById("transacciones-body");

document.getElementById("transaccion-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const monto = parseFloat(document.getElementById("monto").value);
    const tipo = document.getElementById("tipo").value;
    if(validarMonto(monto)){
        if(validarTipo(tipo)){
            agregarTransaccion(tipo, monto);
            document.getElementById("transaccion-form").reset();
        }
    }
});

let transacciones = [];
function agregarTransaccion(tipo, monto) {
    /* const tbody = document.getElementById("transacciones-body"); */
    const fila = document.createElement("tr");
    const celdaTipo = document.createElement("td");
    const celdaFecha = document.createElement("td");
    const celdaMonto = document.createElement("td");
    celdaTipo.textContent = tipo;
    celdaFecha.textContent = formatearFecha(Date.now());
    celdaMonto.textContent = (tipo === "Ingreso" ? monto.toFixed(2) : ((monto*-1).toFixed(2)));
    /* Color al monto según el tipo de operación */
    celdaMonto.classList.add(tipo === "Ingreso" ? "income" : "expense");
    fila.appendChild(celdaFecha);
    fila.appendChild(celdaTipo);
    fila.appendChild(celdaMonto);
    tbody.appendChild(fila);
    transacciones.push({ tipo: tipo, monto: tipo === "Ingreso" ? monto : monto * -1 , fecha: formatearFecha(Date.now())});
    /* console.log("Transacciones:", transacciones); */
    /* data.push({
        tipo: tipoValue,
        monto: parseFloat(monto),
        fecha: new Date(Date.now())
    })
    console.log(data) */
    document.getElementById("balance-total").innerHTML=formatearMonto(calcularBalance(transacciones));
}

document.getElementById("ordenar-monto").addEventListener("click", function () {
    const filas = Array.from(tbody.querySelectorAll("tr"));
    filas.sort((a, b) => {
        const montoA = parseFloat(a.cells[2].textContent);
        const montoB = parseFloat(b.cells[2].textContent);
        if(tipo === "Ingreso"){
            return montoB - montoA;
        }else{
            return montoA - montoB;
        }
    });

    filas.forEach(fila => tbody.appendChild(fila));
});

const calcularBalance = (transacciones) => {
    return transacciones.reduce((total, trans) => {
        return total + trans.monto;
    }, 0);
};
/* const array_monto = [100,120,150];
array.reduce((total, elemento)=> total + elemento, 0);
 */

function formatearMonto(monto, moneda = 'USD'){
    const formatter = new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency: moneda,
        minimunFractionDigits: 2,
        maximunFractionDigits: 2
    });
    return formatter.format(monto);
}

function formatearFecha(timestamp) {
    const fecha = new Date(timestamp);
    const dia = String(fecha.getDate()).padStart(2, "0");
    const mes = String(fecha.getMonth() + 1).padStart(2, "0");
    const anio = fecha.getFullYear();
    return `${dia}-${mes}-${anio}`;
}
