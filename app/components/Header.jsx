'use client';

import { useState } from 'react';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [homeDropdownOpen, setHomeDropdownOpen] = useState(false);

  const navItems = [
    { name: 'HOME', hasDropdown: true },
    { name: 'NEWS' },
    { name: 'POLITICS'},
    { name: 'BUSINESS' },
    { name: 'NATIONAL' },
    { name: 'CULTURE' },
    { name: 'OPINION' },
    { name: 'LIFESTYLE' },
    { name: 'SPORTS' }
  ];

  const homeDropdownItems = [
    'Homepage Layout 1',
    'Homepage Layout 2',
    'Homepage Layout 3'
    
  ];

  return (
    <>
    <header className="bg-white w-full shadow-sm fixed top-0 z-50">
      {/* Top Bar */}
      <div className=" xl:border-b border-gray-800">
        <div className="w-full mx-auto">
          {/* Desktop Logo */}
          <div className="hidden xl:flex items-center justify-center py-7">
            <h1 className="logo-text text-[26px] tracking-wider inline-block scale-y-110 font-extrabold  ">
              <span className="">THE</span>{' '}
              <span className="">DOWNTOWN</span>
            </h1>
          </div>

      

          {/* Mobile or Tablet Logo */}
          <div className="flex xl:hidden items-center justify-between py-4 px-4">
               <button onClick={() => setMobileMenuOpen(true)} className='p-1 -ml-1 text-black'>
            <Menu className='w-6 h-6' strokeWidth={3}/>
            </button>
             
              <div className="text-center logo-text font-extrabold tracking-wider inline-block scale-y-110">
                  <div className="flex items-center justify-center gap-1">
                 <div className="w-[50px] h-[1.5px] bg-gray-800 "></div>
                <div className="text-sm text-black">THE</div>
                 <div className="w-[50px] h-[1.5px] bg-gray-800"></div>
                   </div>
                <div className="text-[26px] border leading-3">DOWNTOWN</div>
              </div>
             
             <button className='p-1 -mr-1 text-black'>
             <Search className='w-6 h-6' strokeWidth={3}/>
             </button>
          
          </div>
        </div>
      </div>
      

      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="w-full mx-auto  ">
          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center justify-center space-x-6 py-3">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative group"
                   
                  >
                    <button className="nav-link flex items-center gap-0.5 border-b-2 pb-1 transition-colors" onMouseEnter={() => setHomeDropdownOpen(true)}>
                      {item.name}
                      <ChevronDown size={16} className={`transition-transform text-gray-400 ${homeDropdownOpen ? '' : ''}`} />
                    </button>
                    
                    {homeDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden border border-gray-200 z-50"  onMouseEnter={() => setHomeDropdownOpen(true)}
                    onMouseLeave={() => setHomeDropdownOpen(false)}>
                        {homeDropdownItems.map((dropdownItem, index) => (
                           <Link
                            key={index}
                            href="#"
                            className={`block px-4 py-3 text-[13px] font-medium transition-colors border-b border-gray-100 last:border-0 ${dropdownItem === "Homepage Layout 1"? "text-[#212121] bg-gray-50 " : "text-gray-500 hover:text-[#212121] hover:bg-gray-50 "}`}
                            style={{
                              fontFamily: 'var(--font-roboto-condensed)',
                              fontWeight: 400,
                              fontSize: '13px'
                            }}
                          >
                            {dropdownItem}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href="#"
                    className="nav-link hover:border-b-2 pb-1  transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

     
        </div>
      </nav>

 
    </header>

    <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />

    </>
  );
}