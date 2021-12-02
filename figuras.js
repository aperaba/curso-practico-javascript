// Código del cuadrado
console.group("cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado) {
    return lado * 4;
} 

// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado ) {
    return lado * lado;
} 

// console.log("El área del cuadrado es: " + areaCuadrado + " cm^2");

console.groupEnd();

// Código del triángulo
console.group("triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm," + ladoTriangulo2 + "cm," + baseTriangulo + "cm.");

console.log("La altura del triángulo es: " + alturaTriangulo);

function perimetroTriangulo(lado){
    return (lado *3);
}


function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

const ladoiso = 3;
const baseiso = 3;
const alturaiso = Math.pow(ladoiso,2) - (Math.pow(baseiso,2) / 4);

console.groupEnd();

// Código del círculo
console.group("circulos");
console.groupEnd();

const PI = Math.PI; 

function perimetroCirculo(radio) {
    return (2 * radio) * PI;
} 

function areaCirculo(radio) {
    return (radio * radio) * PI;
}

console.log("El radio del circulo es: " + radioCirculo + " cm");
console.log("El diametro del circulo es: " + diametroCirculo + " cm");
console.log("PI es: " + PI);
console.log("El área del círculo es: " + areaCirculo + " cm^2");

// Aqui interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcularAreaTriangulo() {
    const input = document.getElementById("InputTriangulo");
    const value = input.value;
    const area = areaTriangulo(value , value);
    alert(area);
}

function calcularPerimetroTriangulo() {
    const input = document.getElementById("InputTriangulo");
    const value = input.value;
    const perimetro = perimetroTriangulo(value);
    alert(perimetro);
}


function calcularPerimetroCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetroC = perimetroCirculo(value);
    alert(perimetroC);
}

function calcularAreaCirculo() {
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const areaC = areaCirculo(value);
    alert(areaC);
}
