function generate() {
    let num = document.querySelector("#txtNum").value
    let res = document.querySelector("#res")
    if (num.length == 0) {
        window.alert('Por favor, digite um número')
    } else {
    res.innerHTML = `<option>Tabuada do ${num}: </option>`
    res.setAttribute('size', 11)
    for (let i = 1; i<=10; i++) {
        let creator = document.createElement('option')
        creator.innerHTML = `${i} x ${num} = ${i * num}`
        res.appendChild(creator)
        }
    }
}   