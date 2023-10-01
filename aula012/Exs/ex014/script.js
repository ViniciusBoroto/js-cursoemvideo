function carregar() {
    let msg = window.document.querySelector('div#msg')
    let img = window.document.querySelector('img#img')
    let greet = window.document.querySelector('div#greetings')
    let date = new Date()
    //let hour = date.getHours()
    hour = 13
    msg.innerHTML = `Agora são ${hour} horas`
    if (hour < 12) {
        // bom dia
        img.src = "images/morningpic.png"
        greet.innerHTML = "Bom dia"
        document.body.style.background = '#ffd4b1'
    } else if (hour < 18) {
        // boa tarde
        img.src = "images/afternoonpic.png"
        greet.innerHTML = "Boa tarde"
        document.body.style.background = '#5f6e81'
    } else {
        // boa noite
        img.src = "images/nightpic.png"
        greet.innerHTML = "Boa noite"
        document.body.style.background = '#16344b'
    }

}

