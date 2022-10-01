// Funcion que genera numero aleatorio para la maquina

function redondeonumero(min , max) {
    return Math.floor(Math.random()*(max - min + 1) + min)
}

// Funcion que muestra la eleccón de cada jugador

function eleccion(jugada) {
    let resultado = ""
    if (jugada == 1) {
        resultado = "Piedra 🪨"
    }else if (jugada == 2) {
        resultado = 'Papel 📜'
    }else if (jugada == 3) {
        resultado = 'Tijera ✂️'
    }else{
        resultado = 'Nulo'
    }  
    return resultado
}

// funcion que determina los comportamientos de la batalla

function comportamientobatalla(player,compu) {
    let battle = "" 
     if (player == compu) {
        battle = "Empate"
    } else if (player == 1 && compu == 3) {
        battle = "Ganaste Perro"
        triunfos = triunfos + 1
    } else if (player == 2 && compu == 1) {
        battle = "Ganaste Perro"
        triunfos = triunfos + 1
    } else if (player == 3 && compu == 2) {
        battle = "Ganaste Perro"
        triunfos = triunfos + 1
    } else{
        battle = "Perdiste por lampara"
        perdidas = perdidas + 1
    }
    return alert(battle) 
}

// 1 es piedra, 2 es papel, 3 tijera

let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0  

while (triunfos < 3 && perdidas  < 3) {
    pc = redondeonumero(1,3)
    jugador = prompt("Elige: 1 Piedra, 2 Papel, 3 Tijera");

    alert('PC elige: ' + eleccion(pc))
    alert('Tu eliges ' + eleccion(jugador))

    comportamientobatalla(jugador,pc)
}   

alert('Ganaste: ' + triunfos + ' veces. Perdiste: ' + perdidas + ' veces.')





