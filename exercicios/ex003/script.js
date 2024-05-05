function tabuada(){
    let num = document.getElementById('num')
    let tab = document.getElementById('seltab')
    var av = document.getElementById('av')
    if(num.value.length == 0){
        av.innerHTML = 'Digite um número no espaço acima!'
        av.style.color = 'red'
        av.style.fontSize = '10pt'
        av.style.textDecoration = 'underline'
        tab.innerHTML = ''
    }else{
            let n = Number(num.value)
            let c = 1
            av.innerHTML = `Tabuada de multiplicação do ${n}:`
            av.style.fontSize = '10pt'
            av.style.color = 'green'
            tab.innerHTML = ''
            while(c <= 10){
                let item = document.createElement('option')
                item.text = `${n} x ${c} = ${n*c}`
                tab.appendChild(item)
                c++
        }
    }
}