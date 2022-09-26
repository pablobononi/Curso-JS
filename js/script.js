let savedPin = '2233'

function login() {
    let ingresar = false;

    for (i = 2; i >= 0; i--) {
        let userPin = prompt('Bienvenido a Boni Wines, Ingresa tu PIN. Tenés ' + (i + 1) + ' intentos');
        if (userPin === savedPin) {
            alert('Bienvenido a tu tienda de vinos favorita')
            ingresar = true;
            break;
        } else {
            alert('Error. Te quedan ' + i + ' intentos');
        }


    }


    return ingresar;

}

if (login()) {
    let saldo = 15000;
    let opcion = prompt('Elegi una opción: \n1- Consulta tu saldo Boni Cash. \n2- Depositá saldo Boni Cash \n3- Comprar Pack Premium selección Septiembre. \n4- Comprar Pack Classic selección Septiembre. \n- Presioná X para finalizar.');

    while (opcion != 'X' && opcion != 'x') {

        switch (opcion) {
            case '1':
                alert('Tu saldo es de $ ' + saldo);
                break;
            case '2':
                let deposito = parseInt(prompt('Ingresa saldo en Boni Cash a depositar'));
                saldo += deposito;
                alert('Deposito exitoso. Tu nuevo saldo en Boni Cash es de $ ' + saldo);
                break;
            case '3':
                let compraPremium = parseInt(prompt('Cada pack Premium incluye 3 vinos y tiene un precio de $6000. Ingresá la cantidad que desea comprar'));
                if (compraPremium <= saldo) {
                    saldo -= (compraPremium * 6000);
                    alert('Felicitaciones! Ya podes retirar tu compra por nuestra sucursal. Tu nuevo saldo es de $ ' + saldo);
                } else {
                    alert('No contas con suficiente saldo Boni Cash para poder finalizar la compra');
                }
                break;
            case '4':
                let compraBasic = parseInt(prompt('Cada pack Basic incluye 3 vinos y tiene un precio de $3000. Ingresá la cantidad que desea comprar'));
                if (compraBasic <= saldo) {
                    saldo -= (compraBasic * 3000);
                    alert('Felicitaciones! Ya podes retirar tu compra por nuestra sucursal. Tu nuevo saldo es de $ ' + saldo);
                } else {
                    alert('No contas con suficiente saldo Boni Cash para poder finalizar la compra');
                }
                break;
            default:
                alert('Elegiste una opción invalida');
                break;
        }
        opcion = prompt('Elegi una opción: \n1- Consulta tu saldo Boni Cash. \n2- Depositá saldo Boni Cash \n3- Comprar Pack Premium selección Septiembre. \n4- Comprar Pack Classic selección Septiembre. \n- Presioná X para finalizar.');
    }
} else {
    alert('Tu PIN es erroneo, conctactaté a nuestro wsapp');
}

alert('Gracias y chin chin!!');


