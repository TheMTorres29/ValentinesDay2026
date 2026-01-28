import React, { useState } from 'react'
import './App.css'
import mickeyFlowers from './assets/mikey.gif'
import mickeyKiss from './assets/kith.gif'
import emailjs from '@emailjs/browser'

function App() {
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

    const handleYesClick = () => {
        setMickeyImg(mickeyKiss)
        setShowHearts(true)
        setShowButtons(false)
        
        // Send email notification
        const templateParams = {
            to_email: 'themtorres29@gmail.com', // Replace with your email
            message: 'She said YES! 💕',
            date: new Date().toLocaleString()
        }
        
        emailjs.send(
            'service_5uniw3r',      // Replace with your EmailJS Service ID
            'template_53jz9rm',     // Replace with your EmailJS Template ID
            templateParams,
            'ewzkK8die2UPV--dA'       // Replace with your EmailJS Public Key
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

  return (
        <div className="container">
            {showHearts && (
                <div className="hearts-background">
                    {[...Array(20)].map((_, i) => (
                        <div 
                            key={i} 
                            className="heart"
                            style={{
                                left: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 1}s`,
                                animationDuration: `${5 + Math.random() * 5}s`
                            }}
                        >
                            {i % 2 === 0 ? '♥' : '♡'}
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
