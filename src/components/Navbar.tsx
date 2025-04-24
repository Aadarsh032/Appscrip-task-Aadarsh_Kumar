import React from 'react'
import '../styles/Navbar.css'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-tape'>
                <div className='nav-contact'>
                    <Image src={'/assets/stripIcon.png'} alt={'Contact 1'} width={20} height={20} />
                    <p>Lorem ipsum dolor</p>
                </div>
                <div className='nav-contact'>
                    <Image src={'/assets/stripIcon.png'} alt={'Contact 2'} width={20} height={20} />
                    <p>Lorem ipsum dolor</p>
                </div>
                <div className='nav-contact'>
                    <Image src={'/assets/stripIcon.png'} alt={'Contact 3'} width={20} height={20} />
                    <p>Lorem ipsum dolor</p>
                </div>
            </div>
            <div className='navbar-main'>
                <Image src={'/assets/CompanyLogo.png'} alt={'Logo'} width={36} height={36} />
                <Image src={'/assets/CompanyName.png'} alt={'BrandName'} width={107} height={30} />
                <div className='navbar-action-links'>
                    <span className="material-symbols-outlined">search</span>
                    <span className="material-symbols-outlined">favorite</span>
                    <span className="material-symbols-outlined">shopping_bag</span>
                    <span className="material-symbols-outlined">person</span>
                    <div className='navbar-language-drop'>
                        <p>ENG</p>
                        <span className="material-symbols-outlined">keyboard_arrow_down</span>
                    </div>
                </div>

            </div>
            <ul className='nav-bar-menu'>
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