function contar(){
    let inc = document.getElementById('inc')
    let ps = document.getElementById('ps')
    let fim = document.getElementById('fim')
    let res = document.getElementById('res')
    if(inc.value == '' || fim.value == '' || ps.value == ''){
        res.innerHTML = 'IMPOSSÍVEL CONTAR!'
        res.style.color = 'red'
    }else{
        res.innerHTML = 'Contando:'
        let i = Number(inc.value)
        let f = Number(fim.value)
        let p = Number(ps.value)
        if(p <= 0){
            res.innerHTML = 'PASSO INVÁLIDO! VAMOS CONSIDERAR PASSO = <strong>1</strong> <br>'
            res.style.color = 'red'
            p = 1
        }
        if(i < f){
            for(c = i; c <= f; c += p){
                res.innerHTML += `${c} 👉`
            }
        }else{
            for( c = i; c >= f;c -= p){
                res.innerHTML += `${c} 👉`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    } 
}