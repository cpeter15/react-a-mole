import React from "react";
import { useEffect } from 'react'
import MoleHill from './molehill.png'

function EmptySlot(props) {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.setDisplayMole(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{ 'width': '30vw' }} src={MoleHill} />
        </div>
    )
}

export default EmptySlot