 var user = prompt('Qual é o seu nome?')
function carregar(){
    var msg = document.getElementById('msg')
    var hr = document.getElementById('hr')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    hr.innerHTML = `Agora são exatamente ${hora}:${min}`
    if(hora >= 0 && hora <=12){
        msg.innerHTML = `Bom dia, ${user}!`
        img.src = 'manhã.jpg'
        document.body.style.background = '#FBE882'
    }else if(hora > 12 && hora <= 17){
        msg.innerHTML = `Boa tarde, ${user}!`
        img.src = 'tarde.jpg'
        document.body.style.background = '#67D4F0'
    }else{
        msg.innerHTML = `Boa noite, ${user}!`
        img.src = 'noite.jpg'
        document.body.style.background = '#1B1739'
    }
}
