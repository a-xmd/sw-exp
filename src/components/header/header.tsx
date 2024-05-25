import { NavLink } from './nav-link'

export const Header = () => {
  return (
    <header className="m-4 mb-8 max-w-screen-md md:mx-auto">
      <nav className="flex gap-2">
        <NavLink to="/">home</NavLink>
        <NavLink to="/sample">sample page</NavLink>
        <NavLink to="/about">about</NavLink>
      </nav>
    </header>
  )
}
