import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../Layout/index'

const Template_layout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
        
      </div>
    </div>
  )
}

export default Template_layout;
/*
<div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
        
      </div>
*/