import React from "react";
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';

const Footer = ({landingPages}) => {
    return (
        <footer className="bg-darkBlue" id="footer">
            <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
                <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
                    <div className="mx-auto my-6 text-center text-lightGray md:hidden">
                        Copyright &copy; 2022, All Rights Reserved
                    </div>
                    <div>
                        <h1 className="text-xl text-lightGray">Ryan James</h1>
                    </div>
                    <div className="flex justify-center space-x-4">
                        <Link href={landingPages[0].twitterLink}><SocialIcon url={landingPages[0].twitterLink} network="twitter" bgColor="#2B2D42" fgColor="#EDF2F4" /></Link>
                        <Link href={landingPages[0].linkedinLink}><SocialIcon url={landingPages[0].linkedinLink} network="linkedin" bgColor="#2B2D42" fgColor="#EDF2F4" /></Link>
                        <Link href={landingPages[0].githubLink}><SocialIcon url={landingPages[0].githubLink} network="github" bgColor="#2B2D42" fgColor="#EDF2F4" /></Link>
                        <Link href={landingPages[0].emailLink}><SocialIcon url={landingPages[0].emailLink} network="email" bgColor="#2B2D42" fgColor="#EDF2F4" /></Link>
                        <Link href="#"><SocialIcon url="#" network="telegram" bgColor="#2B2D42" fgColor="#EDF2F4" /></Link>
                    </div>
                </div>

                <div className="flex justify-around space-x-32">
                    <div className="flex flex-col space-y-3 text-lightGray">
                        <Link href={landingPages[0].blogLink}>Blog</Link>
                        <Link href={landingPages[0].githubLink}>Github</Link>
                        <Link href="#footer">Contact</Link>
                    </div>
                    <div className="flex flex-col space-y-3 text-lightGray">
                        <Link href="/">Ryan James</Link>
                        <Link href={landingPages[0].emailLink}>ryanjames1729@gmail.com</Link>
                        <Link href="#">You can find me in the 828</Link>
                    </div>
                
                </div>
            </div>
        </footer>
    )
}

export default Footer