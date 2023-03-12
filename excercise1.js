let arreglo = [1,3,4,2,7,0]

for (let i = 0; i < arreglo.length-1; i++) {
    for (let j = 0; j < arreglo.length; j++) {
        if (arreglo[i] + arreglo[j]==10) {
            console.log(arreglo[i] + ' ' + arreglo[j])
        }
    }
}