const chalk = require("chalk");
const prompt = require('prompt-sync')();

var listaPropriedades = [];
var inputPropriedade = "";
var isRunning = true;

console.log("Seja bem vindo ao ordenador de propriedades, você pode inserir quantas vocês quiser abaixo e digitar SAIR para exibir a lista de propriedade passadas de forma ordenada.")
while(inputPropriedade !== "SAIR"){
    inputPropriedade = prompt('Insira o nome da propriedade ou digite exatamente SAIR: ');
        if(isRunning === true) {
            listaPropriedades.push(inputPropriedade);
        }
}
listaPropriedades.pop();
listaPropriedades.sort();
for(var i = 0; i < listaPropriedades.length; i++){
    console.log(chalk.blue(listaPropriedades[i]));
}