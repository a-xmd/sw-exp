import { NavLink as OriginalNavLink } from 'react-router-dom'

import type { PropsWithChildren, FC } from 'react'
import { cn } from '../../utils'

interface NavLinkButtonProps {
  to: string
}

export const NavLink: FC<PropsWithChildren<NavLinkButtonProps>> = ({
  to,
  children,
}) => {
  return (
    <OriginalNavLink
      to={to}
      className={({ isActive }) =>
        cn(
          'inline-block border-b-4 border-transparent p-1 font-semibold hover:border-current',
          {
            'border-current': isActive,
          },
        )
      }
    >
      {children}
    </OriginalNavLink>
  )
}
