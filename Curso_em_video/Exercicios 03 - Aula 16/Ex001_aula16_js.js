var num = []
document.querySelector("#enviar").addEventListener("click",enviar)
function enviar() {
    let n = Number(document.querySelector("#numero").value) 
    if (n < 1 || n > 100 || num.indexOf(n) != -1) { //condicoes iniciais
        return alert("Numero invalido ou existente!") 
    }
    if(num.length == 0){
        document.querySelector("#selecao").remove()  //remove a opcao existente 
        let selecao = document.createElement("select")
        selecao.setAttribute("id", "selecao")
        selecao.setAttribute("size","10")
        document.querySelector("#display").appendChild(selecao) //adiciona a nova selecao
    }
    num.push(n)
    let newopt = document.createElement("option")
    newopt.setAttribute("value",`Opt${num.indexOf(n)}`)
    newopt.innerHTML = `Valor ${n} adicionado.`
    document.querySelector("#selecao").appendChild(newopt)
}
document.querySelector("#finalizar").addEventListener("click", finalizar)
function finalizar() {
    if(num.length == 0) {
        return alert("Nenhum numero adicionado!")
    }
    num.sort(function(a, b){ return a - b; })
    let sum = 0
    for(let i = 0 ; i < num.length ; i++){
        sum += num[i]
    }
    if(document.querySelector("#res") != null){
        document.querySelector("#res").remove()
    }
    //criar a div que sustenta os paragrafos
    let newdiv = document.createElement("div")
    newdiv.setAttribute("id", "res")
    document.querySelector("#section").appendChild(newdiv)
    //criar os paragrafos da resposta
    let newp1 = document.createElement("p")
    newp1.innerHTML = `Ao todo, temos ${num.length} numeros cadastrados.` 
    let newp2 = document.createElement("p")
    newp2.innerHTML = `O maior valor informado foi ${num[num.length-1]}.`
    let newp3 = document.createElement("p")
    newp3.innerHTML = `O menor valor informado foi ${num[0]}.`
    let newp4 = document.createElement("p")
    newp4.innerHTML = `Somando todos os valores, temos ${sum}.`
    let newp5 = document.createElement("p")
    newp5.innerHTML = `A media dos valores digitados e ${(sum/num.length).toFixed(2)}.`
    //adiciona os paragrafos a div
    document.querySelector("#res").appendChild(newp1)
    document.querySelector("#res").appendChild(newp2)
    document.querySelector("#res").appendChild(newp3)
    document.querySelector("#res").appendChild(newp4)
    document.querySelector("#res").appendChild(newp5)            
}