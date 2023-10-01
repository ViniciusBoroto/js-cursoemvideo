function verificar() {
    let date = new Date()
    let year = date.getFullYear()
    let fYear  = Number(document.querySelector('input#txtage').value)
    let res = document.querySelector('div#res')
    
        let fSex = document.getElementsByName('radsex')
        let age = year - fYear
        let sex = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'img')
        
        function imgSrc(lifeStage, sex) {
                return img.setAttribute('src', `images/${lifeStage}-${sex}.png`)
            }

            if (fYear.length == 0 || fYear > year) {
                window.alert('[ERRO] Verifique os dados e tente novamente!')
            } else {
        if (fSex[0].checked) {
            sex = 'm'
            if (age >= 0 && age < 10) {
                imgSrc('baby', sex)
            } else if (age < 21 ) {
                // teen
                imgSrc('teen', sex)
            } else if (age < 50) {
                // adult
                imgSrc('adult', sex)
            } else {
                // old
                imgSrc('old', sex)
            }
            res.innerHTML = `Detectamos um homem de ${age} anos`
        } else {
            sex = 'f'
            if (age >= 0 && age < 10) {
                imgSrc('baby', sex)
            } else if (age < 21 ) {
                // teen
                imgSrc('teen', sex)
            } else if (age < 50) {
                // adult
                imgSrc('adult', sex)
            } else {
                // old
                imgSrc('old', sex)
            }
            res.innerHTML = `Detectamos uma mulher de ${age} anos`
        }
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}