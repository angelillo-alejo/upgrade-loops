//Usa un for...in para imprimir por consola los datos del alienígena.
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (let property in alien) {
   console.log(`${property} => ${alien[property]}`);//Practicando template!
}


