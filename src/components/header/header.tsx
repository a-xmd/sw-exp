import { NavLinkButton } from './nav-link-button'

export const Header = () => {
  return (
    <header className="m-4">
      <nav className="flex gap-2">
        <NavLinkButton to="/">home</NavLinkButton>
        <NavLinkButton to="/about">about</NavLinkButton>
      </nav>
    </header>
  )
}
