import React from 'react'
import '../styles/Footer.css'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='footerMain' >
            <div className='footerTop' >
                <div className='footerTopLeft'>
                    <h4 className='footerTitles' >BE THE FIRST TO KNOW</h4>
                    <p className='footerListItems'>Sign up for updates from mettā muse</p>
                    <div>
                        <input type='text' id='emailInput' placeholder='Enter Your Email Id ...' />
                        <button id='subscribeButton' >SUBSCRIBE</button>
                    </div>
                </div>
                <div className='footerTopRight'>
                    <div>
                        <h4 className='footerTitles'>CONTACT US</h4>
                        <p className='footerListItems' style={{ fontSize: '14px' }}>+44 221 133 5360</p>
                        <p className='footerListItems' style={{ fontSize: '14px' }}>customercare@mettamuse.com</p>
                    </div>
                    <div>
                        <h4>CURRENCY</h4>
                        <div>
                            <Image src={'/assets/USA.png'} alt={'currency_icon'} width={24} height={24} style={{ borderRadius: '100%' }} />
                            <span>USD</span>
                        </div>
                        <p className='footerListItems' style={{ fontSize: '12px' }}>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                    </div>

                </div>
            </div>
            <hr />
            <div className='footerMiddle'>
                <div className='footerMiddle_Left'>
                    <h4 className='footerTitles'>mettā muse</h4>
                    <ul className='footerListItems'>
                        <li>About Us</li>
                        <li>Stories</li>
                        <li>Artisans</li>
                        <li>Boutiques</li>
                        <li>Contact Us</li>
                        <li>EU Compliances Docs</li>
                    </ul>
                </div>
                <div className='footerMiddle_Middle'>
                    <h4 className='footerTitles'>QUICK LINKS</h4>
                    <ul className='footerListItems'>
                        <li>Orders & Shipping</li>
                        <li>Join/Login as a Seller</li>
                        <li>Payment & Pricing</li>
                        <li>Return & Refunds</li>
                        <li> FAQs</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div className='footerMiddle_Right'>
                    <h4 className='footerTitles'>FOLLOW US</h4>
                    <div>

                    </div>
                    <h4 className='footerTitles'>mettā muse Accepts</h4>
                    <div>

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