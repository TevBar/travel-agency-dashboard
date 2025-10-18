
import React from 'react'
import { Link, NavLink } from 'react-router'

const NavItems = () => {

const user = { 
  name: 'Tevin Barrios',
  email: 'tevin@example.com',
  imageUrl: '/assets/images/david.webp' // Using existing image
}

  return (
    <section className="nav-items flex flex-col h-full">
      {/* Top Section - Logo and Navigation */}
      <div className="flex-1 flex flex-col space-y-4">
        {/* Logo */}
        <Link to='/' className="link-logo flex items-center space-x-2 mb-6">
          <img src="/assets/icons/logo.svg" alt="logo" 
          className="size-[30px]" />
          <h1 className="text-xl font-semibold">Tourvisto</h1>
        </Link>
        
        {/* Navigation Links */}
        <nav className="flex flex-col space-y-2">
          <NavLink 
            to='/' 
            className={({ isActive }) => 
              `nav-link group flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-blue-100 text-blue-600 border-r-2 border-blue-600' 
                  : 'hover:bg-gray-200 text-gray-700'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <img 
                  src="/assets/icons/home.svg" 
                  alt="dashboard" 
                  className={`size-5 transition-all duration-200 group-hover:brightness-110 ${isActive ? 'filter brightness-0 saturate-100' : ''}`}
                />
                <span className={`font-medium ${isActive ? 'font-semibold' : ''}`}>
                  Dashboard
                </span>
              </>
            )}
          </NavLink>
          
          <NavLink 
            to='/all-users' 
            className={({ isActive }) => 
              `nav-link group flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-blue-100 text-blue-600 border-r-2 border-blue-600' 
                  : 'hover:bg-gray-200 text-gray-700'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <img 
                  src="/assets/icons/users.svg" 
                  alt="users" 
                  className={`size-5 transition-all duration-200 group-hover:brightness-110 ${isActive ? 'filter brightness-0 saturate-100' : ''}`}
                />
                <span className={`font-medium ${isActive ? 'font-semibold' : ''}`}>
                  All Users
                </span>
              </>
            )}
          </NavLink>
          
          <NavLink 
            to='/ai-trips' 
            className={({ isActive }) => 
              `nav-link group flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-blue-100 text-blue-600 border-r-2 border-blue-600' 
                  : 'hover:bg-gray-200 text-gray-700'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <img 
                  src="/assets/icons/magic-star.svg" 
                  alt="ai trips" 
                  className={`size-5 transition-all duration-200 group-hover:brightness-110 ${isActive ? 'filter brightness-0 saturate-100' : ''}`}
                />
                <span className={`font-medium ${isActive ? 'font-semibold' : ''}`}>
                  AI Trips
                </span>
              </>
            )}
          </NavLink>
        </nav>
      </div>

      {/* Footer - Pinned to Bottom */}
      <footer className="nav-footer flex items-center justify-between p-3 border-t border-gray-200 mt-auto">
        <div className="flex items-center space-x-3">
          <img src={user?.imageUrl || '/assets/images/default-profile.jpg'} alt={user?.name || 'Tevin Barrios'} className="rounded-full w-10 h-10" />
          <article>
            <div className="user-info">
              <h2 className="text-sm font-semibold">{user?.name}</h2>
              <p className="text-xs text-gray-500">{user?.email}</p>
            </div>
          </article>
        </div>

        <button onClick ={() => {
            console.log('Logging out...');
        }}
        className="cursor-pointer hover:bg-gray-100 p-1 rounded"
        >
          <img src="/assets/icons/logout.svg" alt="Logout" className="size-6" />
        </button>
      </footer>
    </section>
  )
}

export default NavItems
