import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Bringing people closer, one meal at a time. BuddyBite delivers your favorite food from top restaurants, making every bite a shared delight. We're passionate about quality, convenience, and community.</p>
                <div className="footer-social-icons">
                    <a href="https://www.facebook.com/"><img src={assets.facebook_icon} alt="" /></a>
                    <a href="http://www.twitter.com/"><img src={assets.twitter_icon} alt="" /></a>
                    <a href="https://in.linkedin.com/"><img src={assets.linkedin_icon} alt="" /></a>
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="#footer">About us</a></li>
                    <li><a href="/cart">Delivery</a></li>
                    <li><a href="#footer">Privacy Policy</a></li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+94 9998887776</li>
                    <li>buddybite@gmail.com</li>
                </ul>
            </div>
           
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2024 &copy; BuddyBite - All Right Reserved.
        </p>
    </div>
  )
}

export default Footer