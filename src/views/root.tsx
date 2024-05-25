import { Outlet } from 'react-router-dom'
import { Header } from '../components/header/header'
import { ConnectionStateBar } from '../components/connection-state-bar'

export const Root = () => {
  return (
    <div>
      <ConnectionStateBar />
      <Header />
      <div className="mx-4">
        <Outlet />
      </div>
    </div>
  )
}
