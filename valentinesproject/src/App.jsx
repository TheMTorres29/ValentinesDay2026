/* eslint-disable react-hooks/purity */
import React, { useState, useEffect, useMemo } from 'react'
import './App.css'
import mickeyFlowers from './assets/mikey.gif'
import mickeyKiss from './assets/kith.gif'
import emailjs from '@emailjs/browser'
import Letter from './Letter'
import Config from './Config'

function App() {
    const [config, setConfig] = useState(null)
    const [letterOpened, setLetterOpened] = useState(false)
    const [showContent, setShowContent] = useState(false)
    const [showKissGif, setShowKissGif] = useState(false)
    const [showHearts, setShowHearts] = useState(false)
    const [showButtons, setShowButtons] = useState(true)
    const [noButtonText, setNoButtonText] = useState("No")
    
    const noMessages = [
        "No",
        "Are you sure?",
        "Really?",
        "Think again!",
        "Please reconsider!",
        "Don't be silly!",
        "Give it a chance!",
        "You might regret it!",
        "Come on!",
        "Pretty please?",
        "Say yes!",
        "Make my day!",
        "Be my Valentine!",
        "Let's be happy together!",
        "I promise I'll be good!",
        "You know you want to!",
        "How can you resist?",
        "Love is in the air!",
        "Take a chance on love!",
        "Say you'll be mine!",
        "lol",
        "smhhhh"
    ]
    
    const [noIndex, setNoIndex] = useState(0)

    // Generate hearts data once
    const hearts = useMemo(() => {
        return [...Array(20)].map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 1}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
            symbol: i % 2 === 0 ? '♥' : '♡'
        }))
    }, [])

    // Check for existing config on mount
    useEffect(() => {
        const savedConfig = localStorage.getItem('valentineConfig')
        if (savedConfig) {
            const parsedConfig = JSON.parse(savedConfig)
            setConfig(parsedConfig)
            // Initialize EmailJS with saved config
            emailjs.init(parsedConfig.emailjsPublicKey)
        }
    }, [])

    // Trigger fade-in when letter is opened
    useEffect(() => {
        if (letterOpened) {
            setTimeout(() => {
                setShowContent(true)
            }, 100)
        }
    }, [letterOpened])

    const handleConfigComplete = (configData) => {
        setConfig(configData)
        // Initialize EmailJS
        emailjs.init(configData.emailjsPublicKey)
    }

    const handleLetterOpen = () => {
        setLetterOpened(true)
    }

    const handleYesClick = () => {
        setShowKissGif(true)
        setShowHearts(true)
        setShowButtons(false)
        
        // Send email notification
        const templateParams = {
            to_email: config.yourEmail,
            partner_name: config.partnerName,
            message: `${config.partnerName} said YES! 💕`,
            date: new Date().toLocaleString()
        }
        
        emailjs.send(
            config.emailjsServiceId,
            config.emailjsTemplateId,
            templateParams
        )
        .then((response) => {
            console.log('Email sent successfully!', response.status, response.text)
        })
        .catch((error) => {
            console.error('Failed to send email:', error)
        })
    }

    const handleNoClick = () => {
        const nextIndex = (noIndex + 1) % noMessages.length
        setNoIndex(nextIndex)
        setNoButtonText(noMessages[nextIndex])
    }

    // Show config if not set up yet
    if (!config) {
        return <Config onComplete={handleConfigComplete} />
    }

    // Show letter initially
    if (!letterOpened) {
        return <Letter onOpen={handleLetterOpen} partnerName={config.partnerName} />
    }

    // Show main content after letter is opened
    return (
        <div className={`container ${showContent ? 'fade-in' : ''}`}>
            {showHearts && (
                <div className="hearts-background">
                    {hearts.map((heart) => (
                        <div 
                            key={heart.id} 
                            className="heart"
                            style={{
                                left: heart.left,
                                animationDelay: heart.animationDelay,
                                animationDuration: heart.animationDuration
                            }}
                        >
                            {heart.symbol}
                        </div>
                    ))}
                </div>
            )}
            <div className="mickey-container">
                <img 
                    src={mickeyFlowers} 
                    alt="Mickey Mouse with flowers"
                    className={`mickey-img mickey-flowers ${showKissGif ? 'hide' : 'show'}`}
                />
                <img 
                    src={mickeyKiss} 
                    alt="Mickey Mouse kissing"
                    className={`mickey-img mickey-kiss ${showKissGif ? 'show heart-shape' : 'hide'}`}
                />
            </div>
            <h1 className="val-title">
                {showButtons 
                    ? `${config.partnerName}, will you be my Valentine?` 
                    : `Perfect, It's a date!\nHappy Valentine's Day ${config.partnerName}! 💕`}
            </h1>
            {showButtons && (
                <div className="btn-container">
                    <btn className="yes-btn" onClick={handleYesClick} >Yes</btn>
                    <btn className="no-btn" onClick={handleNoClick}>{noButtonText}</btn>
                </div>
            )}
        </div>
    )
}

export default App
