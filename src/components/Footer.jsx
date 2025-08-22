import React from 'react'
import ProdexLogo from './ProdexLogo'
import { BsFacebook } from 'react-icons/bs';
import { FaLinkedin, FaSquareXTwitter, FaYoutube } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#a2d2e6] text-base-content p-10">
    <aside>
        <div>
            <ProdexLogo/>
        </div>
    </aside>
    <nav className='space-y-3'>
        <h6 className="text-lg font-bold">Find us on</h6>
         <div className="grid grid-flow-col gap-8 md:gap-12 lg:gap-16 items-center justify-center">
                <a href="https://www.facebook.com/" target="_blank">
                <BsFacebook size={25} />
                </a>
                <a href="https://x.com/" target="_blank">
                <FaSquareXTwitter size={25} />
                </a>
                <a href="https://www.linkedin.com/" target="_blank">
                <FaLinkedin size={25} />
                </a>
                <a href="https://www.youtube.com/" target="_blank">
                <FaYoutube size={30} />
                </a>
            </div>
    </nav>
    <aside>
        <p>Copyright © {new Date().getFullYear()} - All right reserved by ProDex</p>
    </aside>
    </footer>

  )
}
