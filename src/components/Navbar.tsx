"use client"
import React, { useState } from 'react'
import '../styles/Navbar.css'
import Image from 'next/image'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    return (
        <div className='navbar'>
            <div className='navbar-tape'>
                <div className='nav-contact' id='nav-contact-1'>
                    <Image src={'/assets/icons/stripIcon.png'} alt={'Contact info 1'} width={20} height={20} />
                    <p>Lorem ipsum dolor</p>
                </div>
                <div className='nav-contact'>
                    <Image src={'/assets/icons/stripIcon.png'} alt={'Contact info 2'} width={20} height={20} />
                    <p>Lorem ipsum dolor</p>
                </div>
                <div className='nav-contact' id='nav-contact-2'>
                    <Image src={'/assets/icons/stripIcon.png'} alt={'Contact info 3'} width={20} height={20} />
                    <p>Lorem ipsum dolor</p>
                </div>
            </div>
            <div className='navbar-main'>
                <div className='navbar-logo-menu'>
                    <span id='nav-menu-icon'
                        className="material-symbols-outlined"
                        onClick={() => setIsMenuOpen(!isMenuOpen)} >
                        {isMenuOpen ? 'close' : 'menu'}
                    </span>
                    <Image className='company-logo' src={'/assets/company-brand/company-logo.png'} alt={'Brand logo of Logo'} width={36} height={36} />
                </div>
                <Image className='company-name' src={'/assets/company-brand/company-name.png'} alt={'BrandName - Logo'} width={107} height={30} />
                <div className='navbar-action-links'>
                    <span className="material-symbols-outlined">search</span>
                    <span className="material-symbols-outlined">favorite</span>
                    <span className="material-symbols-outlined">shopping_bag</span>
                    <span id='person-icon' className="material-symbols-outlined">person</span>
                    <div className='navbar-language-drop'>
                        <p>ENG</p>
                        <span className="material-symbols-outlined">keyboard_arrow_down</span>
                    </div>
                </div>
            </div>
            <ul className={`nav-bar-menu ${isMenuOpen ? 'open' : ''} `} >
                <li>SHOP</li>
                <li>SKILLS</li>
                <li>STORIES</li>
                <li>ABOUT</li>
                <li>CONTACT US</li>
            </ul>
        </div>
    )
}

export default Navbar