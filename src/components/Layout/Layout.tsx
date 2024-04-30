import { Outlet } from 'react-router-dom'
import Sidebar from '../Navigation/Sidebar'
import './Layout.scss'
import { Stack } from '@mui/material'

const Layout = () => {
  return (
    <Stack className="App" direction={'row'}>
      <Sidebar />
      <div className="page">
        <Outlet />
      </div>
    </Stack>
  )
}

export default Layout
