var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são, exatamente, ${hora} hora(s).`)
if(hora < 5){
        console.log('Vai dormir, infeliz!')
}
if(hora >= 5 && hora < 13){
    console.log('Bom dia!')
    }else if(hora > 12 && hora <18){
    console.log('Boa tarde!')
    
    }else{
        console.log('Boa noite!')
    }