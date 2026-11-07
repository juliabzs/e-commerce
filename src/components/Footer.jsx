import { Heart, Mail, MapPin, Phone } from 'lucide-react';
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    const quickLinks = ['About Us', 'Contact Us', 'Size Guide', 'FAQs',];
    const categories = ["Men's Fashion", "Women's Wear", "Kids Collection"];
    const socialIcons = [
        {icon: FaFacebook, href: '#'},
        {icon: FaTwitter, href: '#'},
        {icon: FaInstagram, href: '#'},
        {icon: FaYoutube, href: '#'},
        
    ]
    return (
        <footer className='bg-gray-900 text-white pt-16 pb-8'>
            <div className='container mx-auto px-4 md:px-8 lg:px-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
                gap-8 mb-12'>
                    <div>
                        <h2 className='text-2xl fon-bold mb-4'>
                            FASHION <span
                            className='text-xs align-top ml-0.5'>@</span></h2>
                    <p className='text-gray-400 text-sm leading-relaxed  mb-4'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className='flex gap-3'>
                        {socialIcons.map((social, idx) => (
                            <a key={idx} href={social.href}
                            className='bg-gray-800 p-2 rounded-full
                            hover:bg-gray-700 transition-colors duration-300'>
                                <social.icon size={18} />
                            </a>
                        ))}
                    </div>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
                        <ul className='space-y-2'>
                            {quickLinks.map((link, idx) => (
                                <li key={idx}>
                                    <a
                                    href='#'
                                    className='text-gray-400 hover:text-white
                                    transition-colors duration-300'>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                   <div>
                        <h3 className='text-lg font-semibold mb-4'>Categories</h3>
                        <ul className='space-y-2'>
                            {categories.map((link, idx) => (
                                <li key={idx}>
                                    <a
                                    href='#'
                                    className='text-gray-400 hover:text-white
                                    transition-colors duration-300'>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h3 className='text-lg font-semibold mb-4'>Contact Info</h3>
                        <ul className='space-y-3'>
                           <li className='flex items-start gap-3'>
                            <MapPin size={18} className='text-gray-400 mt-0.5'/>
                            <span className='text-gray-400 text-sm'>
                                123 Fashion Street, City, Ct 200002
                            </span>
                           </li>
                           <li className='flex items-start gap-3'>
                            <Phone size={18} className='text-gray-400 mt-0.5'/>
                            <span className='text-gray-400 text-sm'>
                                +123 456 7890
                            </span>
                           </li>
                           <li className='flex items-start gap-3'>
                            <Mail size={18} className='text-gray-400 mt-0.5'/>
                            <span className='text-gray-400 text-sm'>
                                info@fashionstore.com
                            </span>
                           </li>
                        </ul>
                    </div>
                </div>
                <div className='border-t border-gray-700 pt-8 mb-8'>
                    <div className='flex flex-col md:flex-row justify-between
                    items-center gap-4'>
                        <div>
                            <h3
                            className='text-lg font-semibold mb-1'
                            > Subscribe to Newsletter </h3>
                            <p
                            className='text-gray-400 text-sm'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className='flex w-full md:w-auto'>
                            <input type="email" placeholder='Enter your email'
                            className='px-4 py-2 rounded-l-lg w-full
                            md:w-64 bg-gray-800 text-white border
                            border-gray-700 focus:outline-none
                            focus:border-gray-600' />
                            <button className='bg-white text-gray-900
                            px-6 py-2 rounded-r-lg font-semibold
                            hover:bg-gray-100 transition-colors
                            duration-300'>
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
                <div className='border-t border-gray-700 pt-6 text-center'>
                    <p className='text-gray-400 text-sm flex flex-col
                    sm:flex-row items-center sm:justify-between
                    justify-center gap-2'>
                        <span>@ 2026 Fashion. All rights reserved.</span>
                        <span className='flex items-center gap-2'>
                        Made with <Heart
                        size={14}
                        className='text-red-500 fill-red-500'/>
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer