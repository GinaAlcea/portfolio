import { Outlet } from 'react-router-dom'
import Sidebar from '../Navigation/Sidebar'
import './Layout.scss'
import { Stack } from '@mui/material'

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
