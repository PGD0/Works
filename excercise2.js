let myArray = [1,8,8,5,4,6,7,2,2,8]
let numero;
let cont=1;
let numaux;
let contaux=1;

for(let i = 0; i < myArray.length; i++){
    contaux = 0;
    for (let j = 0; j < myArray.length; j++) {
        if (myArray[i] === myArray[j]) {
            contaux++;
        }
        if (contaux>cont) {
            numero=myArray[i]
            cont=contaux;
        }
    }
}

console.log(numero);
console.log(cont);