function parimpar(n){
    if(n == 0){
        return 'Neutro!'
    }
    if(n%2 == 0){
        return 'Par!'
    }else{
        return 'Ímpar!'
    }
}
let res = parimpar(0)
console.log(res)