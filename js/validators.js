function validarMonto(monto){
    if (isNaN(monto) || monto <= 0) {
        alert("Por favor, ingresa un monto válido.");
        return false;
    }
    return true;
}
//
function validarTipo(tipo){
    if (tipo == "Ingreso" || tipo == "Gasto") {
        return true;
    }else{
        alert("Por favor, el tipo debe ser correcto (Ingreso o Gasto).");
        return false;
    }
}
//
// Validación para el primer monto
function validarSiHaySaldo(tipo, monto, saldo){
    if ((monto > saldo) && tipo === "Gasto") {
        montoError.textContent = "Saldo insuficiente";
        return false;
    }else{
        return true;
    }
}