import React from 'react'
import '../styles/Hero.css'

const Hero = () => {
    return (
        <div className='hero-section'>
            <div className='hero-mobileview-option'>
                <span className='hero-mobileview-option-home'>HOME</span>|<span className='hero-mobileview-option-shop'>SHOP</span>
            </div>
            <h1 className='hero-title'>DISCOVER OUR PRODUCTS</h1>
            <p className='hero-description'>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
        </div>
    )
}

export default Hero