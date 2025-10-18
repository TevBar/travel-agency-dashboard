import React from 'react'
import { Outlet } from 'react-router'
import { NavItems, MobileSidebar } from '../../../components'

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      {/* Mobile Sidebar Component - Contains header and sidebar */}
      <div className="lg:hidden">
        <MobileSidebar />
      </div>
      
      {/* Desktop Layout */}
      <div className="hidden lg:flex h-screen">
        {/* Desktop Sidebar */}
        <aside className='w-full max-w-[270px] bg-gray-100 border-r'>
          <div className="h-full p-4">
            <NavItems />
          </div>
        </aside>
        
        {/* Main content area */}
        <main className="flex-1 overflow-auto">
          <Outlet />
        </main>
      </div>
      
      {/* Mobile Main Content */}
      <main className="lg:hidden pt-0">
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout
