const nombre =prompt ("seleccione su cuenta");
let contraseña = prompt('ingrese su contraseña')

const cuentas=[
    { nombre: 'Mali', saldo: 200, contraseña1: 1 },
    { nombre: 'Gera', saldo: 290, contraseña2: 2 },
    { nombre: 'Maui', saldo: 67,  contraseña3: 3 }
];
// if (nombre==='mali' || nombre==='gera' || nombre==='maui'){console.log("datos correctos")}
if ( nombre=='mali' && contraseña==1 || nombre=='gera'&& contraseña==2 || nombre=='maui' && contraseña==3){console.log("datos correctos")}
// else if ( contraseña !== nombre){console.log("contraseña incorrecta")}
else {alert('dato incorrecto')}

function usuario(nombre){
for (let i = 0; i < users.length; i++) {
    if (users[i].nombre === nombre) {
      return i;
    }
}
return -1;
}
console.log(nombre);
