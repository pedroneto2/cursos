import React from 'react'
import Filho from './Filho'

export default () => {
    const liberaFilho = lugar => {
        alert(`Liberado para ${lugar}`)
    }
    return(
        <div>
        <Filho resposta = {liberaFilho} />
        </div>
    )
}
    