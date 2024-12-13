# Documentación del Proyecto PERSONAL-BUDGET

# Descripción del Proyecto

Aplicación web para gestión de finanzas personales con funcionalidades de registro de transacciones, cálculo de balance y visualización de historial.

## 🏗️ Estructura del Proyecto

```
personal-budget/
│
├── index.html
├── css/
│   └── styles.css
└── js/
    ├── app.js
    ├── util.js
    └── validators.js
```

## ✨ Características Principales

- Registro de transacciones (Ingresos/Gastos).
- Cálculo de balance en tiempo real.
- Validación dinámica de transacciones.
- Visualización de historial de movimientos.

## 📌 Modularización

### Estrategia Principal: Separación de Responsabilidades

El proyecto implementa una modularización efectiva mediante la división de archivos JavaScript:

- **`app.js`**: Lógica principal de la aplicación.
- **`util.js`**: Funciones de utilidad (formateo de fechas, cálculo de balance).
- **`validators.js`**: Funciones de validación de datos.

```javascript
// Ejemplo de modularización
// validators.js
function validarMonto(monto) { ... }
function validarTipo(tipo) { ... }
```

## 🚀 Implementación Clave

### Gestión de Estado

```javascript
let saldo = 0;
let transacciones = [];

function agregarTransaccion(tipo, monto) {
    transacciones.push({ 
        tipo, 
        monto: tipo === "Ingreso" ? monto : monto * -1, 
        fecha: formatearFecha(Date.now())
    });
    saldo = calcularBalance(transacciones);
}
```

## 🛡️ Validaciones

```javascript
//Ejemplo de Validación de Saldo
function validarSiHaySaldo(tipo, monto, saldo) {
    if ((monto > saldo) && tipo === "Gasto") {
        montoError.textContent = "Saldo insuficiente";
        return false;
    }
    return true;
}
```

## 🎨 Diseño y Estilos
### Variables CSS para Diseño Consistente
```
:root {
    --font-family: Arial, sans-serif;
    --background-body: lightgrey;
    --income-color: blue;
    --expense-color: red;
}
```

## 🔧 Mejoras
Validación Dinámica de Transacciones
Sistema de validación robusto que previene errores comunes:

```javascript
// validators.js
function validarSiHaySaldo(tipo, monto, saldo) {
    if ((monto > saldo) && tipo === "Gasto") {
        montoError.textContent = "Saldo insuficiente";
        return false;
    }
    return true;
}
```
## 🚄 Optimización
Uso de Variables CSS para Estilización Consistente
Implementación de variables CSS para mantener un diseño coherente y facilitar cambios globales:

```
:root {
    --font-family: Arial, sans-serif;
    --background-body: lightgrey;
    --income-color: blue;
    --expense-color: red;
}
```
Esta estrategia facilita modificaciones rápidas y centralizadas del estilo de la aplicación, mejorando tanto la eficiencia como la mantenibilidad.

## 🌟 Puntos Destacados

- Modularidad bien definida.
- Validaciones sólidas y efectivas.
- Diseño adaptable y fácil de mantener.
- Separación clara de responsabilidades.

## 🔍 Próximos Pasos

- Implementar la persistencia de datos utilizando LocalStorage.
- Ampliar el alcance de las validaciones existentes.
- Optimizar la experiencia de usuario mediante feedback más detallado e interactivo.




## 🔧 Funcionalidades

- Registro de transacciones.
- Cálculo de balance.
- Validación de inputs.
- Persistencia de datos.
- Gráficos de gastos.

## 📈 Rendimiento

### Optimizaciones

- Uso de variables CSS.
- Modularización de código.
- Validaciones eficientes.

## 🚧 Próximos Pasos

- Implementar LocalStorage.
- Añadir gráficos de gastos.
- Mejorar validaciones.
- Implementar filtros avanzados.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, lee las pautas de contribución antes de enviar un PR.

## 📄 Licencia

Open Source.

## 👥 Contacto

Correo: cromeflo@gmail.com