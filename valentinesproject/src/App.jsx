/* eslint-disable react-hooks/purity */
import React, { useState, useEffect, useMemo } from 'react'
import './App.css'
import mickeyFlowers from './assets/mikey.gif'
import mickeyKiss from './assets/kith.gif'
import emailjs from '@emailjs/browser'
import Letter from './Letter'

function App() {
    const [letterOpened, setLetterOpened] = useState(false)
    const [showContent, setShowContent] = useState(false)
    const [mickeyImg, setMickeyImg] = useState(mickeyFlowers)
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

    // Initialize EmailJS
    useEffect(() => {
        emailjs.init('ewzkK8die2UPV--dA')
    }, [])

    // Trigger fade-in when letter is opened
    useEffect(() => {
        if (letterOpened) {
            // Small delay before showing content to ensure smooth transition
            setTimeout(() => {
                setShowContent(true)
            }, 100)
        }
    }, [letterOpened])

    const handleLetterOpen = () => {
        setLetterOpened(true)
    }

    const handleYesClick = () => {
        setMickeyImg(mickeyKiss)
        setShowHearts(true)
        setShowButtons(false)
        
        // Send email notification
        const templateParams = {
            to_email: '',
            //to_email: 'themtorres29@gmail.com',
            message: 'She said YES! 💕',
            date: new Date().toLocaleString()
        }
        
        emailjs.send(
            'service_5uniw3r',
            'template_53jz9rm',
            templateParams
        )
        .then((response) => {
            console.log('Email sent successfully!', response.status, response.text)
        })
        .catch((error) => {
            console.error('Failed to send email:', error)
        })
    }

    // Handle 'No' Button Click
    const handleNoClick = () => {
        const nextIndex = (noIndex + 1) % noMessages.length
        setNoIndex(nextIndex)
        setNoButtonText(noMessages[nextIndex])
    }

    // Show letter initially
    if (!letterOpened) {
        return <Letter onOpen={handleLetterOpen} />
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
            <img 
                src={mickeyImg} 
                alt="Mickey Mouse"
                className="mickey-img"
            ></img>
            <h1 className="val-title">
                {showButtons ? "Will you be my Valentine?" : "Perfect, It's a date!\nHappy Valentine's Day bb! 💕"}
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
