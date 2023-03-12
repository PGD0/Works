let myArray=[1,2,1,3,3,1,2,1,5,1]
let uno="1: ", dos="2: ", tres="3: ", cuatro="4: ", cinco="5: ";
let booleano = true;
for (let i = 0; i < myArray.length; i++){
    if (myArray < 1 || myArray > 5) {
        booleano = false;
        break;
    }
    switch (myArray[i]) {
        case 1:
        uno += "*";
        break;
        case 2:
        dos += "*";
        break;
        case 3:
        tres += "*";
        break;
        case 4:
        cuatro += "*";
        break;
        case 5:
        cinco += "*";
        break;
    }
}
console.log(uno);
console.log(dos);
console.log(tres);
console.log(cuatro);
console.log(cinco);