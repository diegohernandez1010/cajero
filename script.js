
// const eligeUsuario=() =>
// const nombre =prompt ("seleccione su cuenta");
// let contraseña = prompt('ingrese su contraseña')

const cuentas=[
    { nombre: 'mali', saldo: 200, contraseña: 1 },
    { nombre: 'gera', saldo: 290, contraseña: 2 },
    { nombre: 'maui', saldo: 67,  contraseña: 3 }
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

// document.getElementById("claveUsuario").style.display = "none";
//             document.getElementById("opcionesCajero").style.display = "inherit";
}


function gera(){
usuarioActual= cuentas[1].nombre;
saldoActual = cuentas[1].saldo;
contraseñaActual =cuentas[1].contraseña;
// document.getElementById("claveUsuario").style.display = "none";
//             document.getElementById("opcionesCajero").style.display = "inherit";

}
function maui(){
    usuarioActual = cuentas[2].nombre;
    saldoActual= cuentas[2].saldo;
    contraseñaActual=cuentas[2].contraseña;
    // document.getElementById("claveUsuario").style.display = "none";
    //         document.getElementById("opcionesCajero").style.display = "inherit";

}
//ocultando opciones cajero
function ocultarOpciones(){
    document.getElementById("usuario").style.display = "none";
    document.getElementById("lave").style.display = "none";
            document.getElementById("opcionesCajero").style.display = "inherit";
}
//validando usuarios

function validandoUsuario(){
let nombre = document.getElementById("ingreseUsuario").value;
paso(nombre);

console.log("nombre usuario= " + nombre);

}
function paso(nombre){

    let= usuarioFinal=(nombre);
    for(let i=0; i< cuentas.length; i++){
if(usuarioFinal == cuentas[i].nombre){
    document.getElementById("Usuario").style.display = "none";
    document.getElementById("opcionesCajero").style.display = "inherit";
    }
    // console.log(typeof usuarioFinal);
}
}
//validando contraseñas

function clave(){
    let contraseña = document.getElementById("password").value;
    paso2 (contraseña);

    console.log("contraseña= " + contraseña );
} 

//se hace la validación. Si está bien, oculta la pantalla de ingreso de clave y muestra las opciones del cajero.
function paso2(contraseña){
let= validacionFinal= parseInt (contraseña);
    for(let i = 0; i < cuentas.length; i++){
        // if (usuarioActual == cuentas[i].nombre && validacionFinal == cuentas[i].contraseña)
        if (validacionFinal == cuentas[i].contraseña) {
            document.getElementById("clave").style.display = "none";
            document.getElementById("opcionesCajero").style.display = "inherit";
        break;
        }
        
        }
}





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
