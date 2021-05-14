document.querySelector("#verificar").addEventListener("click",calcular)
function calcular() {
    let year = document.querySelector("#inputano").value
    if (year > new Date().getFullYear()){
        return alert("Esta pessoa ainda nao nasceu!")
    } if(year == ""){
        return alert("Insira o ano de nascimento!")
    }
    let idade = new Date().getFullYear() - year 
    let gender = ""
    let artigo = ""
    if (document.querySelector("#formsexo").elements["sexo"].value == 'masculino') {
        gender = "homem"
    } else { gender = "mulher"
             artigo += "a"}
    document.querySelector("#resultado").innerHTML = `Detectamos um${artigo} ${gender} de ${idade} anos!`
    var img = document.createElement("img")
    img.setAttribute("id", "foto")
    img.setAttribute("src", "")
    document.querySelector("#resultado").appendChild(img)
    switch(gender){
        case "homem":
            if (idade < 15) {
                document.querySelector("#foto").src = "./fotos_exer002/menino.jpeg"
            }
            if (idade >= 15 && idade < 30){
                document.querySelector("#foto").src = "./fotos_exer002/jovem_h.jpeg"
            }
            if (idade >=30 && idade < 60){
                document.querySelector("#foto").src = "./fotos_exer002/homem.jpeg"    
            }
            if (idade >= 60 && idade < 120){
                document.querySelector("#foto").src = "./fotos_exer002/idoso.jpeg"
            }
            if (idade >= 120){
                document.querySelector("#foto").src = "./fotos_exer002/esqueleto.jpeg"
            }
            break

        case "mulher":
            if (idade < 15) {
                document.querySelector("#foto").src = "./fotos_exer002/menina.jpeg"
            }
            if (idade >= 15 && idade < 30){
                document.querySelector("#foto").src = "./fotos_exer002/jovem_m.jpeg"
            }
            if (idade >=30 && idade < 60){
                document.querySelector("#foto").src = "./fotos_exer002/mulher.jpeg"    
            }
            if (idade >= 60 && idade < 120){
                document.querySelector("#foto").src = "./fotos_exer002/idosa.jpeg"
            }
            if (idade >= 120){
                document.querySelector("#foto").src = "./fotos_exer002/esqueleto.jpeg"
            }
            break
    }
    
}