//1
let arrayVacio = []

//2
let arrayNumeros =[0,1,2,3,4,5,6,7,8,9]

//3
let arrayNumerosPares =[0,2,4,6,8]

//4
let arrayBidimensional = [[0,1,2],['a','b','c']]

//5
function suma(num1, num2){
    return num1+num2
}

//6
function potenciacion(a, b){
    return Math.pow(a, b);
}


//7
function separarPalabras(string){
    return string.split(' ')
}


//8
function repetirString(string,num){
    return string.repeat(num)
}

//9
function esPrimo(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) { return false }
    }
    return true;
}

//10
function ordenarArray(arrOfNums){
    let newArr = arrOfNums.sort((a, b) => a - b);
    return newArr
  }

//11
function obtenerPares(arr){
 let pares = arr.filter(arr => arr % 2 === 0)
 return pares
}

//12
function pintarArray(arr){
    let resultado = arr.toString();
    return resultado;
} // no entiendo por qué me da error en este?

//13
function arrayMapi(arr,myFunction){
    let newArr = arr.map(myFunction())
      return newArr
  } //este no lo entiendo

//14
function eliminarDuplicados(arr){
// mañana lo miro
}


//15
let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]

//16
let holaMundo = ['Hola', 'Mundo']

//17
let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal']


//18
 let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]

//19
function multiplicacion(a, b){
    return a * b
}

//20
function division(a,b){
    return a/b
}

//21
function esPar(num){
 if(num % 2 == 0){
    return true
 } else {
    return false
 }
}

//22
function resta(a,b){
    return a - b
}
let arrayFunciones =[suma, resta, multiplicacion]


//23
function ordenarArray2(arrOfNums){
    let newArr = arrOfNums.sort((a, b) => a - b);
    return newArr.reverse()
  }

//24
function obtenerImpares(arr){
    let pares = arr.filter(arr => arr % 2 === 1)
    return pares
   }

//25
function sumarArray(arr){
    return arr.reduce((acc, curr) => acc + curr)
}


//26
function multiplicarArray(arr){
    return arr.reduce((acc, curr) => acc * curr)
   }