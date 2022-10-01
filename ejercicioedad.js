let edades = [5,100,20,40,80];
let maxima = 0;

for (i=0;i<=edades.length;i++){
    if (edades[i]>maxima) {
        maxima = edades[i];
    }
}
console.log("La edad maxima es: "+maxima)