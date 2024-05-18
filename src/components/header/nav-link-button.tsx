import { NavLink } from 'react-router-dom'

import type { PropsWithChildren, FC } from 'react'
import { cn } from '../../utils'

interface NavLinkButtonProps {
  to: string
}

export const NavLinkButton: FC<PropsWithChildren<NavLinkButtonProps>> = ({
  to,
  children,
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn('inline-block rounded border border-slate-900 p-2', {
          'bg-slate-900 font-semibold text-white': isActive,
        })
      }
    >
      {children}
    </NavLink>
  )
}
