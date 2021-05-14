var diaSem = new Date().getDay()
switch (diaSem){
    case 0:
        console.log("Hoje eh Domingo!")
        break

    case 1:
        console.log("Hoje eh Segunda-feira")
        break
    
    case 2:
        console.log("Hoje eh Terca-feira")
        break
    
    case 3:
        console.log("Hoje eh Quarta-feira")
        break

    case 4:
        console.log(" Hoje eh Quinta-Feira")
        break
    
    case 5:
        console.log("Hoje eh Sexta-Feira")
        break
    
    case 6:
        console.log("Hoje eh Sabado!")
        break

    default: 
        console.log("Dia invalido!")
    
}