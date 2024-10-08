import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Root } from './views/root'
import { Home } from './views/home/home'
import { About } from './views/about/about'
import { Caches } from './views/caches/caches'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/caches',
        element: <Caches />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
])

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
