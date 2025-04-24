import React from 'react'
import '../styles/Footer.css'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='footer-main' >
            <div className='footer-top' >
                <div className='footer-top-left'>
                    <h4 className='footer-titles' >BE THE FIRST TO KNOW</h4>
                    <p className='footer-list-items'>Sign up for updates from mettā muse</p>
                    <div>
                        <input type='text' id='email-input' placeholder='Enter Your Email Id ...' />
                        <button id='subscribe-button' >SUBSCRIBE</button>
                    </div>
                </div>
                <div className='footer-top-right'>
                    <div>
                        <h4 className='footer-titles'>CONTACT US</h4>
                        <p className='footer-list-items' style={{ fontSize: '14px' }}>+44 221 133 5360</p>
                        <p className='footer-list-items' style={{ fontSize: '14px' }}>customercare@mettamuse.com</p>
                    </div>
                    <div>
                        <h4>CURRENCY</h4>
                        <div>
                            <Image src={'/assets/USA.png'} alt={'Currency Icon'} width={24} height={24} style={{ borderRadius: '100%' }} />
                            <span>USD</span>
                        </div>
                        <p className='footer-list-items' style={{ fontSize: '12px' }}>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                    </div>

                </div>
            </div>
            <hr />
            <div className='footer-middle'>
                <div className='footer-middle-left'>
                    <h4 className='footer-titles'>mettā muse</h4>
                    <ul className='footer-list-items'>
                        <li>About Us</li>
                        <li>Stories</li>
                        <li>Artisans</li>
                        <li>Boutiques</li>
                        <li>Contact Us</li>
                        <li>EU Compliances Docs</li>
                    </ul>
                </div>
                <div className='footer-middle-middle'>
                    <h4 className='footer-titles'>QUICK LINKS</h4>
                    <ul className='footer-list-items'>
                        <li>Orders & Shipping</li>
                        <li>Join/Login as a Seller</li>
                        <li>Payment & Pricing</li>
                        <li>Return & Refunds</li>
                        <li> FAQs</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div className='footer-middle-right'>
                    <h4 className='footer-titles'>FOLLOW US</h4>
                    <div className='social-icons'>
                        <Image src={'/assets/insta.svg'} alt={'Instagram'} width={30} height={30} />
                        <Image src={'/assets/linkedin.svg'} alt={'Linkedin'} width={30} height={30} />

                    </div>
                    <h4 className='footer-titles-down-right'>mettā muse Accepts</h4>
                    <div className='payment-icons'>
                        <Image src={'/assets/gpay.svg'} alt={'Google Pay'} width={50} height={50} />
                        <Image src={'/assets/mastercard.svg'} alt={'MasterCard'} width={50} height={50} />
                        <Image src={'/assets/paypal.svg'} alt={'Paypal'} width={50} height={50} />
                        <Image src={'/assets/amex.svg'} alt={'Amex'} width={50} height={50} />
                        <Image src={'/assets/applepay.svg'} alt={'Apple Pay'} width={50} height={50} />
                        <Image src={'/assets/opay.svg'} alt={'O Pay'} width={50} height={50} />

                    </div>
                </div>

            </div>
            <div className='footerBottom'>
                <p>Copyright © 2023 mettamuse. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer