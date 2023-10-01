let list = []

function inLista(num, list) {
    for (item in list) {
        if (num == list[item]) {
            return true
        }
    }
    return false
}

function max(list) {
    let maior = list[0]
    for(item in list) {
        if (list[item] > maior) {
            maior = list[item]
        }
    }
    return maior
}
function min(list) {
    let menor = list[0]
    for(item in list) {
        if (list[item] < menor) {
            menor = list[item]
        }
    }
    return menor
}
function soma(list) {
    let result = 0
    for (item in list){
        result += list[item]
    }
    return result
}

function adicionar() {
    let numTxt = document.querySelector('#txtNum')
    let numToAdd = Number(document.querySelector('#txtNum').value)
    let listSelect = document.querySelector('#listSelect')
    if (numToAdd.length == 0 || numToAdd > 100 || numToAdd < 1 || inLista(numToAdd, list)) {
        window.alert('Por favor, verifique se o número está entre 0 e 100 e ainda não foi adicionado na lista')
    } else {
        list.push(numToAdd)
            let add = document.createElement('option')
            add.text = `Valor ${numToAdd} adicionado`
            listSelect.appendChild(add)
            res.innerHTML = ''
    }
    numTxt.value = ''
    numTxt.focus()
}

function finalizar() {
    if (list.length >0) {
    let res = document.querySelector('#res')
    res.innerHTML = `
    <p>Ao todo, temos ${list.length} números cadastrados</p>
    <p>O maior valor informado foi ${max(list)}</p>
    <p>O menor valor informado foi ${min(list)}</p>
    <p>Somando todos os valores, temos ${soma(list)}</p>
    <p>A média dos valores digitados é ${soma(list)/list.length}</p>
    `
    } else {
        window.alert('adicione valores antes de finalizar')
    }
}
console.log(soma([1, 5, 3, 2]))
