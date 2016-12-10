var msjErrVacio = "Este campo no debe estar vacio";

function validar(){

  var valNom = validarVacio('nombre','nombreError');
  var valApe = validarVacio('apellido','apellidoError');
  var valTelef = validarTelefono();
  var valEdad  = validarEdad();
  var valEmail = validarVacio('email','emailError');
  
  var expmailresp = valEmail.match('/^\w+([\.-]?\w+)*@/');
  console.log(expmailresp);
  
  generarId(valNom,valApe,valEdad)
}

/*Funcion para validar Nombre*/
function validarVacio(elemento,elementoError){
  var valor = document.getElementById(elemento).value;
  if(valor != ''){
    document.getElementById(elementoError).innerHTML = '';
    console.log(valor);
    return valor;
  }else{
    document.getElementById(elementoError).innerHTML = msjErrVacio;
    return false
  }
}

function validarTelefono(){

  var telefono = document.getElementById('telefono').value;
  telefono = parseInt(telefono);

  if(telefono > 9999 && telefono < 1000000000){
    document.getElementById('telefonoError').innerHTML = '';
    console.log(telefono);
    return telefono;
  }else{
    document.getElementById('telefonoError').innerHTML = "Formato invalido de telefono";
    document.getElementById('telefonoError').style.color('red');
    return false
  }
}

function validarEdad(){

  var edad = document.getElementById('edad').value;
  edad = parseInt(edad);

  if(edad >= 18 ){
    document.getElementById('edadError').innerHTML = '';
    console.log(edad);
    return edad;
  }else{
    document.getElementById('edadError').innerHTML = "Usted no es mayor de edad";
    document.getElementById('edadError').style.color('red');
    return false
  }
}

function validarEmail(email){
  var expmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
  
  if (!expmail.test(valEmail)){
    document.getElementById('emailError').innerHTML = "Email con formato invalido";
  }

  console.log(expmail);
}

function generarId(nombre,apellido,edad){
  var grupo = 'GRUP3';

  if (edad >= 20 && edad <= 35){
     grupo = "GRUP1";
  }else if (edad >= 36 && edad <= 55){
     grupo = "GRUP2";
  }

  document.getElementById('Id').value = (nombre+apellido+grupo);
  console.log(nombre+apellido+grupo);
  document.getElementsByClassName('validar').value = '';
  
}
