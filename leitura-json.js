const dados = require("./json.json");

console.log(dados);
console.log(typeof dados);

// Operações com Json

//Transformando objeto(json) em em string
const clienteEmString = JSON.stringify(dados);
console.log(clienteEmString);
console.log(typeof clienteEmString);

//Transformando string em objeto(json)
const objetoCliente = JSON.parse(clienteEmString);
console.log(objetoCliente);
console.log(typeof objetoCliente);