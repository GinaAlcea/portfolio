import { Outlet } from 'react-router-dom'
import Sidebar from '../Navigation/Sidebar'
import './Layout.scss'

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
