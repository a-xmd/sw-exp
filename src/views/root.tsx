import { NavLink, Outlet } from 'react-router-dom'
import { Header } from '../components/header/header'

export const Root = () => {
  return (
    <div>
      <Header />
      <div className="mx-4">
        <Outlet />
      </div>
    </div>
  )
}
