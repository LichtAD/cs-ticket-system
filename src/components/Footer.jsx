import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className='mt-10 bg-neutral text-neutral-content'>
            <div className="footer sm:footer-horizontal p-10 lg:flex">
                <nav className='flex-1 mr-16'>
                    <h6 className="footer-title">CS — Ticket System</h6>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </nav>
                <nav className='flex-1'>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className='flex-1'>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className='flex-1'>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav className='flex-1'>
                    <h6 className="footer-title">Social Links</h6>
                    <a className="link link-hover flex items-center gap-2"><CiFacebook /> Facebook</a>
                    <a className="link link-hover flex items-center gap-2"><AiFillTwitterCircle /> Twitter</a>
                    <a className="link link-hover flex items-center gap-2"><BsInstagram /> Instagram</a>
                    <a className="link link-hover flex items-center gap-2"><MdAlternateEmail /> support@cst.com</a>
                </nav>
            </div>

            <div className="footer sm:footer-horizontal footer-center border-t border-gray-600 w-11/12 mx-auto p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} CS — Ticket System. All rights reserved.</p>
                </aside>
            </div>
        </div>
    )
}

export default Footer