import React from "react";
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';

const Footer = () => {
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
                    <div class="flex justify-center space-x-4">
                        <a href="https://twitter.com/rjames1729"><SocialIcon url="https://twitter.com/rjames1729" network="twitter" bgColor="#2B2D42" fgColor="#EDF2F4" /></a>
                        <a href="https://www.linkedin.com/in/ryan-james-562612172"><SocialIcon url="https://www.linkedin.com/in/ryan-james-562612172" network="linkedin" bgColor="#2B2D42" fgColor="#EDF2F4" /></a>
                        <a href="https://github.com/ryanjames1729"><SocialIcon url="https://github.com/ryanjames1729" network="github" bgColor="#2B2D42" fgColor="#EDF2F4" /></a>
                        <a href="https://github.com/ryanjames1729"><SocialIcon url="https://github.com/ryanjames1729" network="email" bgColor="#2B2D42" fgColor="#EDF2F4" /></a>
                        <a href="#"><SocialIcon url="#" network="telegram" bgColor="#2B2D42" fgColor="#EDF2F4" /></a>
                    </div>
                </div>

                <div className="flex justify-around space-x-32">
                    <div className="flex flex-col space-y-3 text-lightGray">
                        <a href="https://www.ryanjameswritescode.com/">Blog</a>
                        <a href="https://github.com/ryanjames1729">Github</a>
                        <a href="#footer">Contact</a>
                    </div>
                    <div className="flex flex-col space-y-3 text-lightGray">
                        <a href="/">Ryan James</a>
                        <a href="mailto:ryanjames1729@gmail.com">ryanjames1729@gmail.com</a>
                        <a href="#">You can find me in the 828</a>
                    </div>
                
                </div>
            </div>
        </footer>
    )
}

export default Footer