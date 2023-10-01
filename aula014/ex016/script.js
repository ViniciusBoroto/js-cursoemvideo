function counting() {
    let startValue = document.querySelector('input#start').value
    let endValue = document.querySelector('input#end').value
    let stepValue = document.querySelector('input#step').value
    const res = document.querySelector('#resDiv')

    if (startValue.length == 0 || endValue.length == 0 || stepValue.length == 0) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        res.innerHTML = 'Contando: '
        let start = Number(startValue)
        let end = Number(endValue)
        let step = Number(stepValue)
        res.innerHTML += `<br>`
        if (step == 0){
            step = 1
            window.alert('Como o passo é 0, iremos considerá-lo como 1')
        }
        if (start < end) {
            for (let i = start; i <= end; i += step){
            res.innerHTML += ` ${i} \u{27A1}`
            }
        } else {
            for (let i = start; i >= end; i -= step)
            res.innerHTML += ` ${i} \u{27A1}`
        }
        
        res.innerHTML += `\u{2714}`
    }
}
    



