document.querySelector('#enviar').addEventListener("click",calcular)
function calcular() {
    let n = document.querySelector("#numero").value
    if(n == ""){
        return alert("Insira um numero!")
    }
    document.querySelector("#lista").remove() //remove a lista antiga
    let n_lista = document.createElement("div")// cria uma lista nova
    n_lista.setAttribute("id", "lista") // seta o id da lista nova com id "lista" de novo para o remove() funcionar sempre
    document.querySelector("#tabuada").appendChild(n_lista) // adiciona a lista nova a ul #tabuada
    for(let i = 0 ; i <= 10 ; i++){
        let novo = document.createElement("li") // cria uma lista
        novo.setAttribute("id", `l${i}`) // adiciona id a lista
        novo.innerHTML = `${Number(n)} x ${i} = ${Number(n)*i}` // adiciona o conteudo do calculo na lista
        document.querySelector("#lista").appendChild(novo) //adiciona a lista na div lista criada anteriormente
        document.querySelector(`#l${i}`).addEventListener("click", (event) => {
            document.querySelector("#res").innerHTML = i*n
        })
    }
}
