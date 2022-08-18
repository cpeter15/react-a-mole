import React from 'react'
import { useState } from 'react'
import Mole from './Mole.js'
import EmptySlot from './EmptySlot.js'

function MoleContainer(props) {
    let [mole, setMole] = useState(false)

    const handleClick = (e) => {
        props.setScore(props.score + 1)
        setMole(false)
    }

    let displayMole = mole ? <Mole setScore={props.setScore} setDisplayMole={setMole} handleClick={handleClick} /> : <EmptySlot setDisplayMole={setMole} />

    return (
        <div style={{ 'display': 'inline-block', 'width': '30vw' }}>
            {displayMole}
        </div>
    )
}

export default MoleContainer
