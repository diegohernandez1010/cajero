
// const eligeUsuario=() =>
// const nombre =prompt ("seleccione su cuenta");
// let contraseña = prompt('ingrese su contraseña')

const cuentas=[
    { nombre: 'Mali', saldo: 200, contraseña: 1 },
    { nombre: 'Gera', saldo: 290, contraseña: 2 },
    { nombre: 'Maui', saldo: 67,  contraseña: 3 }
];

//variables globales.
let usuarioActual;
let saldoActual;
let passwordActual;
//fin globales.

//datos del usuario, guardar en variables globales.
function mali(){
usuarioActual = cuentas[0].nombre;
saldoActual= cuentas[0].saldo;
contraseñaActual=cuentas[0].contraseña;

document.getElementById()

}
function gera(){
usuarioActual= cuentas[1].nombre;
saldoActual = cuentas[1].saldo;
contraseñaActual =cuentas[1].contraseña;

}
function maui(){
    usuarioActual = cuentas[2].nombre;
    saldoActual= cuentas[2].saldo;
    contraseñaActual=cuentas[2].contraseña;
    
    document.getElementById()
}
//validando contraseñas
function usuario(){
    let contraseña = document.getElementById("password").value;

    console.log("contraseña= " + contraseña );
}
function 




// if (nombre==='mali' || nombre==='gera' || nombre==='maui'){console.log("datos correctos")}
// if ( nombre=='mali' && contraseña==1 || nombre=='gera'&& contraseña==2 || nombre=='maui' && contraseña==3){console.log("datos correctos")}
// // else if ( contraseña !== nombre){console.log("contraseña incorrecta")}
// else {alert('dato incorrecto')}

// function usuario(nombre){
// for (let i = 0; i < users.length; i++) {
//     if (users[i].nombre === nombre) {
//       return i;
//     }
// }
// return -1;
// }
// console.log(nombre);
