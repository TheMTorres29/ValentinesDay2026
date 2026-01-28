import React from 'react'
import './Letter.css'

function Letter({ onOpen }) {
    return (
        <div className="letter-container" onClick={onOpen}>
            <div className="envelope">
                <div className="flap"></div>
                <div className="body"></div>
                <div className="letter-paper">
                    <div className="letter-content">
                        <p>To: Frida</p>
                        <p>Click to open</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Letter