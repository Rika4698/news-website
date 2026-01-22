"use client"
import { FaFacebookF, FaYoutube, FaRss } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; 
import { X, Search } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";


function MobileMenu({isOpen, onClose}) {

    useEffect(() => {
        if(open) {
            document.body.style.overflow = "hidden";
        } else{
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);


  const socialLinks = [
    { name: 'Facebook', icon: <FaFacebookF size={18} />, href: '#', color: 'text-blue-800' },
    { name: 'X', icon: <FaXTwitter size={18} />, href: '#', color: 'text-black' },
    { name: 'YouTube', icon: <FaYoutube size={20} />, href: '#', color: 'text-red-700' },
    { name: 'RSS', icon: <FaRss size={18} />, href: '#', color: 'text-[#F26522]' }
  ];

    return (
       <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/70 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}

        
      >
      
        {isOpen && (
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-gray-300 hover:rotate-90 transition-transform duration-300"
          >
            <X className="w-6 h-6 inline-block scale-125" strokeWidth={1.5} />
          </button>
        )}
      </div>

      

      {/* Off-canvas Menu */}
      <div
        className={`fixed top-0 left-0 w-[85%] max-w-[320px] h-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Header: Search Bar & Close Button */}
          <div className="p-4 flex items-center gap-3 border-b border-gray-100 ">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-3 pr-10 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-black transition-colors shadow-inner"
              />
              <Search className="w-4 h-4 text-gray-800 absolute right-3 top-1/2 -translate-y-1/2" strokeWidth={3}/>
            </div>
           
          </div>

          {/* Navigation Links */}
          <nav className="flex-1  py-4">
            <ul className="flex flex-col ">
              <li className="px-4 py-2 border-l-4 border-transparent hover:border-black hover:bg-gray-50 transition-all font-condensed">
                <Link href="#" className="flex items-center text-[20px] font-semibold text-gray-800">
                  Home
                </Link>
              </li>
              {["Politics", "News", "Business", "Culture", "National", "Sports", "Lifestyle", "Travel"].map((item) => (
                <li
                  key={item}
                  className="px-4 py-2 border-l-4 border-transparent hover:border-black hover:bg-gray-50 transition-all font-condensed "
                >
                  <Link href="#" className="flex items-center text-[20px] font-semibold text-gray-800">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Media Icons */}
        <div className="px-4 py-8 bg-white">
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  className={`${social.color} hover:scale-110 transition-transform flex items-center justify-center cursor-pointer`}
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="px-4 py-4 text-left text-[11px] text-gray-500">
    <p className="leading-relaxed  font-condensed tracking-wider"> © 2026 <span className="border-b pb-0.5 border-gray-400">JNews</span> - Premium WordPress news & magazine theme by <span className="border-b pb-0.5 border-gray-400">Jegtheme</span>.</p>
          </div>
        </div>
      </div>
    </>
    );
}

export default MobileMenu;