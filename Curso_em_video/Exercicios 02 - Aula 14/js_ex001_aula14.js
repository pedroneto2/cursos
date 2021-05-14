//COUTING BUTTOM CUSTOM
let botao = document.querySelector("#contar")
botao.addEventListener("mouseover",change)
botao.addEventListener("mouseout",change2)
function change() {
    botao.style.background = "white"
    botao.style.color = "rgb(46, 3, 82)"
}
function change2(){
    botao.style.background = "rgb(46, 3, 82)"
    botao.style.color = "white"
}
//COUNTING BUTTOM ACTION
document.querySelector("#contar").addEventListener("click",contar)
function contar() {
    let inicio = document.querySelector("#inicio").value
    let fim = document.querySelector("#fim").value
    let passo = document.querySelector("#passo").value
    //condicoes para iniciar
    if(inicio =="" || fim == "" || passo == ""){
        return alert("Voce nao preencheu todas as entradas!")
    }
    if(inicio == fim){
        return alert("O inicio e o fim sao iguais!")
    }
    if(passo == 0){
        return alert("O passo nao pode ser nulo!")
    }
    //se a contagem for crescente
    if(Number(inicio) < Number(fim)){
        if(Number(passo) < 0){
            return alert("Para este caso, o passo deve ser positivo!")
        }
        document.querySelector("#contagem").innerHTML = 'Contando: </br>'
        document.querySelector("#contagem").innerHTML +=`\u{1F3C1} \u{27A1} `
        for (let i = Number(inicio) ; i <= Number(fim) ; i += Number(passo)){
            document.querySelector("#contagem").innerHTML +=`${i.toFixed(2)} ➝ `           
        }
        document.querySelector("#contagem").innerHTML +=`\u{1F3C1}`
    } else{ //se a contagem for
        if(Number(passo) >0){
            return alert("Para este caso, o passo deve ser negativo!")
        }
        document.querySelector("#contagem").innerHTML = `Contando: </br>`
        document.querySelector("#contagem").innerHTML +=`\u{1F3C1} \u{27A1} `
        for (let i = Number(inicio) ; i >= Number(fim) ; i += Number(passo)){
            document.querySelector("#contagem").innerHTML +=`${i.toFixed(2)} \u{27A1}`
        }
        document.querySelector("#contagem").innerHTML +=`\u{1F3C1}`
    }
}

