//chamando moment
const moment = require("moment")
const {produtos} = require("../model/dados")
//chamando funcoes principais
const {exibeTela, totalizador} = require("../lib/funcoes")

function listaDeProdutos() {
    let valorTotal = 0
    //for para mostrar a lista de compras
    for (let i = 0; i < produtos.length; i++) {
    valorTotal += totalizador(produtos[i].quantidade, produtos[i].valor) 
    exibeTela(`${produtos[i].id} - ${produtos[i].nome} - ${produtos[i].valor}`)
    }
    exibeTela("\nO valor total de produtos é: " + valorTotal)

    
}


exports.principal = () => {
    exibeTela("---------- Mercados Twlor ----------\n")
    const data = moment().format('DD/MM')
    exibeTela("Lista de produtos - " + data)
    listaDeProdutos()
}