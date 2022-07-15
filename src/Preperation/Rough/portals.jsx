import React from 'react'
import  ReactDOM from 'react-dom'
function PortalDemo() {
  return ReactDOM.createPortal(
    <h2>portals</h2>,
    document.getElementById('portal-root')
  )
}

export default PortalDemo