import React from 'react'
import '../styles/Footer.css'
import Image from 'next/image'
import CustomDropdown from './CustomDropdown'

const quickLinks = ["Orders & Shipping", "Join/Login as a Seller", "Payment & Pricing", "Return & Refunds", "FAQs", "Privacy Policy", "Terms & Conditions"];
const metta_muse = ["About Us", "Stories", "Artisans", "Boutiques", "Contact Us", "EU Compliances Docs"]
const followUs = ["Instagram", "Linkedin"]

const Footer = () => {
    return (
        <div className='footer-main' >
            <div className='footer-top' >
                <div className='footer-top-left'>
                    <h4 className='footer-top-left-title' >BE THE FIRST TO KNOW</h4>
                    <p className='footer-top-left-description'>Sign up for updates from mettā muse</p>
                    <div>
                        <input type='text' id='email-input' placeholder='Enter Your Email Id ...' />
                        <button id='subscribe-button' >SUBSCRIBE</button>
                    </div>
                </div>
                <div className='footer-top-right'>
                    <div className='footer-top-right-contact-section'>
                        <h4 className='footer-top-right-contact-section-title'>CONTACT US</h4>
                        <div className='footer-top-right-contact'>
                            <p className='footer-top-right-contact-section-description' style={{ fontSize: '14px' }}>+44 221 133 5360</p>
                            <p className='footer-top-right-contact-section-description' style={{ fontSize: '14px' }}>customercare@mettamuse.com</p>
                        </div>
                    </div>
                    <div className='footer-top-right-currency-section'>
                        <h4 className='footer-top-right-currency-section-title'>CURRENCY</h4>
                        <div className='currency-drop'>
                            <Image src={'/assets/flags/usa.png'} alt={'US flag for USD currency'} width={24} height={24} style={{ borderRadius: '100%' }} />
                            <span>USD</span>
                        </div>
                        <p id='currency-description' className='footer-list-items' style={{ fontSize: '12px' }}>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className='footer-middle'>
                <div className='footer-middle-left'>
                    <h4 className='footer-titles'>mettā muse</h4>
                    <ul className='footer-list-items'>
                        {
                            metta_muse.map((item: string, index: number) => {
                                return (
                                    <li key={index} >{item}</li>
                                )
                            })
                        }
                    </ul>
                    <CustomDropdown title='mettā muse' theme='dark' options={metta_muse} checkSelected={false} />
                </div>
                <div className='footer-middle-middle'>
                    <h4 className='footer-titles'>QUICK LINKS</h4>
                    <ul className='footer-list-items'>
                        {
                            quickLinks.map((links: string, index: number) => {
                                return (
                                    <li key={index} >{links}</li>
                                )
                            })
                        }
                    </ul>
                    <CustomDropdown title='QUICK LINKS' theme='dark' options={quickLinks} checkSelected={false} />
                </div>
                <div className='footer-middle-right'>
                    <h4 className='footer-titles'>FOLLOW US</h4>
                    <div className='social-icons'>
                        <Image src={'/assets/social/instagram.svg'} alt={'Visit us on Instagram'} width={30} height={30} />
                        <Image src={'/assets/social/linkedin.svg'} alt={'Visit us on Linkedin'} width={30} height={30} />
                    </div>
                    <CustomDropdown title='FOLLOW US' theme='dark' options={followUs} checkSelected={false} />
                    <h4 className='footer-titles-down-right'>mettā muse Accepts</h4>
                    <div className='payment-icons'>
                        <Image src={'/assets/payments/google-pay.svg'} alt={'Google Pay'} width={50} height={50} />
                        <Image src={'/assets/payments/mastercard.svg'} alt={'MasterCard'} width={50} height={50} />
                        <Image src={'/assets/payments/paypal.svg'} alt={'Paypal'} width={50} height={50} />
                        <Image src={'/assets/payments/amex.svg'} alt={'Amex'} width={50} height={50} />
                        <Image src={'/assets/payments/apple-pay.svg'} alt={'Apple Pay'} width={50} height={50} />
                        <Image src={'/assets/payments/o-pay.svg'} alt={'O Pay'} width={50} height={50} />
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <p>Copyright © 2023 mettamuse. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer