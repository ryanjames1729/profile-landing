import React from "react";
import { useState } from "react";
import Link from 'next/link';
import Script from 'next/script'

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-8 py-8">
      <a href="/" className="text-xl">
        Ryan James
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2 px-8 hamburger block"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-4 py-8"
              onClick={() => setIsNavOpen(false)}
            >
                <div className="space-y-2 px-2 hamburger open block">
                    <span className="animate-pulse hamburger-top"></span>
                    <span className="animate-pulse hamburger-middle"></span>
                    <span className="animate-pulse hamburger-bottom"></span>
                </div>
                <ul className="flex flex-col items-right justify-between min-h-[100px]">
                    <li className="border-b border-gray-400 my-2 uppercase">
                        <a href="https://www.ryanjameswritescode.com/">Blog</a>
                    </li>
                    <li className="border-b border-gray-400 my-2 uppercase">
                        <a href="https://github.com/ryanjames1729">Github</a>
                     </li>
                    <li className="border-b border-gray-400 my-2 uppercase">
                        <a href="#footer">Contact</a>
                    </li>
                </ul>
            </div>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden uppercase space-x-8 lg:flex">
          <li>
            <a href="https://www.ryanjameswritescode.com/">Blog</a>
          </li>
          <li>
            <a href="https://github.com/ryanjames1729">Github</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}



export default Navbar