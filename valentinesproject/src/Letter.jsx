import React, { useState } from 'react'
import './Letter.css'

function Letter({ onOpen, partnerName }) {
    const [isClosing, setIsClosing] = useState(false)

    const handleClick = () => {
        setIsClosing(true)
        // Wait for animation to complete before calling onOpen
        setTimeout(() => {
            onOpen()
        }, 800)
    }

    return (
        <div className={`letter-container ${isClosing ? 'fade-out' : ''}`} onClick={handleClick}>
            <div className="envelope">
                <div className="flap"></div>
                <div className="body"></div>
                <div className="letter-paper">
                    <div className="letter-content">
                        <p>💌</p>
                        {partnerName && <p className="letter-to">To: {partnerName}</p>}
                        <p>Click to open</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Letter