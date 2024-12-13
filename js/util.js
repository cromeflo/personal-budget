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

function getBalanceClass(monto) {
    const balanceElement = document.getElementById('balance-total');
    const balance = parseFloat(monto);
    /* Limipiar las clases previamente asignadas */
    balanceElement.classList.remove('low-balance', 'regular-balance', 'extra-balance');
    /* Evaluamos en base a los parámetros indicados en el Lab 6 y usando la propiedad classList */
    if (balance <= 500) {
        balanceElement.classList.add('low-balance');
    } else if (balance <= 1000) {
        balanceElement.classList.add('regular-balance');
    } else {
        balanceElement.classList.add('extra-balance');
    }
}