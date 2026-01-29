import React, { useState } from 'react'
import './Config.css'

function Config({ onComplete }) {
    const [partnerName, setPartnerName] = useState('')
    const [error, setError] = useState('')

    const handleChange = (e) => {
        setPartnerName(e.target.value)
        if (error) {
            setError('')
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (!partnerName.trim()) {
            setError('Please enter your partner\'s name')
            return
        }
        
        // Store name in localStorage
        localStorage.setItem('valentinePartnerName', partnerName.trim())
        onComplete(partnerName.trim())
    }

    return (
        <div className="config-container">
            <div className="config-card">
                <h1 className="config-title">💕 Valentine's Surprise 💕</h1>
                <p className="config-subtitle">Who is this special message for?</p>
                
                <form onSubmit={handleSubmit} className="config-form">
                    <div className="form-group">
                        <label htmlFor="partnerName">Your Partner's Name</label>
                        <input
                            type="text"
                            id="partnerName"
                            name="partnerName"
                            value={partnerName}
                            onChange={handleChange}
                            placeholder="e.g., Sarah"
                            className={error ? 'error' : ''}
                            autoFocus
                        />
                        {error && <span className="error-text">{error}</span>}
                    </div>

                    <button type="submit" className="config-submit">
                        Create Letter 💌
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Config