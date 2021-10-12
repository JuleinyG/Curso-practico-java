
//Código del cuadrado

//console.group("Cuadrados");

//const ladoCuadrado = 5;
//console.log('Los lados del cuadrafo miden: ' + ladoCuadrado + 'cm');

//onst perimetroCuadrado = ladoCuadrado * 4;
//console.log('El perimetro del cuadrado es: '+ perimetroCuadrado + 'cm');

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log('El area del cuadrado es: '+ areaCuadrado + 'cm²');

//console.groupEnd();


//Código del triàngulo
//console.group("Triángulos");

//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;
//console.log(
    //'Los lados del triàngulo miden: '
    //+ ladoTriangulo1
    //+ 'cm, '
    //+ ladoTriangulo2
    //+ 'cm, '
    //+ baseTriangulo
    //+ 'cm ');

///const alturaTriangulo = 5.5;
//console.log("La altura del triángulo es de: " + alturaTriangulo + 'cm');


//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
//console.log('El perimetro del triángulo es: '+ perimetroTriangulo + 'cm');

//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2 ;
//console.log('El area del triángulo es: '+ areaTriangulo+ 'cm²');
//JavaScrip siempre ejecuta lo que eesta dentro de los parentesis


//Código del Círculos
//console.group("Círculos");

//Radio
//const radioCirculo = 4;
//console.log("El radio del ciruclo es de: " + radioCirculo + 'cm');

//Diámetro
//const diametroCirculo = radioCirculo * 2;
//console.log("El diametro del circulo es de: " + diametroCirculo + 'cm');

//PI
//const PI = Math.PI;
//console.log("PI es: " + PI);

//Circunferencia
//const perimetroCirculo = diametroCirculo * PI;
///console.log("El perimetro es de: " + perimetroCirculo + 'cm');

//Área
//const  areaCirculo = (radioCirculo * radioCirculo) * PI;
//console.log("El área del círculo es: " + areaCirculo + 'cm');

//console.groupEnd();


//Código del cuadrado encapsulado en funciones
console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
};

perimetroCuadrado();

function areaCuadrado(lado) {
    return lado * lado;
};

areaCuadrado();
console.groupEnd();


//Código del triàngulo encapsulado en funciones
console.group("Triángulos");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

perimetroTriangulo();

function areaTriangulo(base, altura) {
    return (base * altura) / 2 ;
}

areaTriangulo();
console.groupEnd();

//Código del Círculos encapsulado en funciones
console.group("Círculos");

function diametroCirculo(radio) {
    return radio * 2 ;
}

diametroCirculo();

//PI
const PI = Math.PI;
console.log("PI es: " + PI);

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.groupEnd();

//Aqui interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const inputLado1 = parseInt(document.getElementById("inputTrianguloLado1").value);
    const inputLado2 = parseInt(document.getElementById("inputTrianguloLado2").value);
    const inputBase = parseInt(document.getElementById("inputTrianguloBase").value);
    
    
    const perimetro = perimetroTriangulo(inputLado1, inputLado2, inputBase);
   
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const inputBase = parseInt(document.getElementById("inputTrianguloBase").value);
    const inputAltura = parseInt(document.getElementById("inputTrianguloAltura").value);

    const area = areaTriangulo(inputBase, inputAltura);
    alert(area);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert(area);
}

