import React, { useState } from 'react'
import './Config.css'

function Config({ onComplete }) {
    const [formData, setFormData] = useState({
        partnerName: '',
        yourEmail: '',
        emailjsServiceId: '',
        emailjsTemplateId: '',
        emailjsPublicKey: ''
    })
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        // Clear error for this field when user types
        if (errors[e.target.name]) {
            setErrors({
                ...errors,
                [e.target.name]: ''
            })
        }
    }

    const validateForm = () => {
        const newErrors = {}
        
        if (!formData.partnerName.trim()) {
            newErrors.partnerName = 'Please enter your partner\'s name'
        }
        
        if (!formData.yourEmail.trim()) {
            newErrors.yourEmail = 'Please enter your email'
        } else if (!/\S+@\S+\.\S+/.test(formData.yourEmail)) {
            newErrors.yourEmail = 'Please enter a valid email'
        }
        
        if (!formData.emailjsServiceId.trim()) {
            newErrors.emailjsServiceId = 'Please enter your EmailJS Service ID'
        }
        
        if (!formData.emailjsTemplateId.trim()) {
            newErrors.emailjsTemplateId = 'Please enter your EmailJS Template ID'
        }
        
        if (!formData.emailjsPublicKey.trim()) {
            newErrors.emailjsPublicKey = 'Please enter your EmailJS Public Key'
        }
        
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (validateForm()) {
            // Store config in localStorage
            localStorage.setItem('valentineConfig', JSON.stringify(formData))
            onComplete(formData)
        }
    }

    return (
        <div className="config-container">
            <div className="config-card">
                <h1 className="config-title">💕 Setup Your Valentine's App 💕</h1>
                <p className="config-subtitle">Configure your romantic surprise!</p>
                
                <form onSubmit={handleSubmit} className="config-form">
                    <div className="form-group">
                        <label htmlFor="partnerName">Partner's Name</label>
                        <input
                            type="text"
                            id="partnerName"
                            name="partnerName"
                            value={formData.partnerName}
                            onChange={handleChange}
                            placeholder="e.g., Sarah"
                            className={errors.partnerName ? 'error' : ''}
                        />
                        {errors.partnerName && <span className="error-text">{errors.partnerName}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="yourEmail">Your Email (for notifications)</label>
                        <input
                            type="email"
                            id="yourEmail"
                            name="yourEmail"
                            value={formData.yourEmail}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                            className={errors.yourEmail ? 'error' : ''}
                        />
                        {errors.yourEmail && <span className="error-text">{errors.yourEmail}</span>}
                    </div>

                    <div className="emailjs-section">
                        <h3>EmailJS Configuration</h3>
                        <p className="helper-text">
                            Get these from <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer">EmailJS.com</a>
                        </p>
                        
                        <div className="form-group">
                            <label htmlFor="emailjsServiceId">Service ID</label>
                            <input
                                type="text"
                                id="emailjsServiceId"
                                name="emailjsServiceId"
                                value={formData.emailjsServiceId}
                                onChange={handleChange}
                                placeholder="service_xxxxxxx"
                                className={errors.emailjsServiceId ? 'error' : ''}
                            />
                            {errors.emailjsServiceId && <span className="error-text">{errors.emailjsServiceId}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="emailjsTemplateId">Template ID</label>
                            <input
                                type="text"
                                id="emailjsTemplateId"
                                name="emailjsTemplateId"
                                value={formData.emailjsTemplateId}
                                onChange={handleChange}
                                placeholder="template_xxxxxxx"
                                className={errors.emailjsTemplateId ? 'error' : ''}
                            />
                            {errors.emailjsTemplateId && <span className="error-text">{errors.emailjsTemplateId}</span>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="emailjsPublicKey">Public Key</label>
                            <input
                                type="text"
                                id="emailjsPublicKey"
                                name="emailjsPublicKey"
                                value={formData.emailjsPublicKey}
                                onChange={handleChange}
                                placeholder="your_public_key"
                                className={errors.emailjsPublicKey ? 'error' : ''}
                            />
                            {errors.emailjsPublicKey && <span className="error-text">{errors.emailjsPublicKey}</span>}
                        </div>
                    </div>

                    <button type="submit" className="config-submit">
                        Continue to Letter 💌
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Config