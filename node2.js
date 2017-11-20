var i = 2;
var somme = 0;

while(process.argv[i]){
    somme += parseInt(process.argv[i])
    i++;
}

console.log(somme);