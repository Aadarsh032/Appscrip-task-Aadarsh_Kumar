import React from 'react'
import '../styles/Navbar.css'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbarTape'>
                <div className='navcontact'>
                    <Image src={'/assets/stripIcon.png'} alt={'Contact 1'} width={20} height={20} />
                    <p>Lorem ipsum dolor</p>
                </div>
                <div className='navcontact'>
                    <Image src={'/assets/stripIcon.png'} alt={'Contact 2'} width={20} height={20} />
                    <p>Lorem ipsum dolor</p>
                </div>
                <div className='navcontact'>
                    <Image src={'/assets/stripIcon.png'} alt={'Contact 3'} width={20} height={20} />
                    <p>Lorem ipsum dolor</p>
                </div>
            </div>
            <div className='navbarMain'>
                <Image src={'/assets/CompanyLogo.png'} alt={'Logo'} width={36} height={36} />
                <Image src={'/assets/CompanyName.png'} alt={'BrandName'} width={107} height={30} />
                <div className='navbarActionLinks'>
                    <span className="material-icons">search</span>
                    <span className="material-icons">favorite</span>
                    <span className="material-icons">shopping_bag</span>
                    <span className="material-icons">person</span>
                    <div className='navbarLanguageDrop'>
                        <p>ENG</p>
                        <span className="material-icons">keyboard_arrow_down</span>
                    </div>
                </div>

            </div>
            <ul className='navBarMenu'>
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