import React, { useState } from "react";
import { Link } from "react-router";
import { NavItems } from "./index";

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Header - Only visible on small screens */}
      <header className="flex items-center justify-between p-4 bg-white border-b lg:hidden">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/assets/icons/logo.svg" alt="logo" className="size-[30px]" />
          <h1 className="text-xl font-semibold">Tourvista</h1>
        </Link>

        <button 
          onClick={toggleSidebar}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          <img src="/assets/icons/menu.svg" alt="menu" className="size-6" />
        </button>
      </header>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-[270px] bg-white shadow-lg transform transition-transform duration-300 z-50 lg:hidden
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Header inside sidebar */}
        <div className="p-4 border-b flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" onClick={closeSidebar}>
            <img src="/assets/icons/logo.svg" alt="logo" className="size-[30px]" />
            <h1 className="text-xl font-semibold">Tourvista</h1>
          </Link>
          <button 
            onClick={closeSidebar}
            className="p-1 hover:bg-gray-100 rounded text-2xl leading-none"
            aria-label="Close menu"
          >
            &times;
          </button>
        </div>
        
        {/* Navigation */}
        <div className="p-4 h-full overflow-y-auto">
          <div onClick={closeSidebar}>
            <NavItems />
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileSidebar
