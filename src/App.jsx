import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../pages/home/index.jsx'
import LandingPage from '../pages/landing/index.jsx'
import PDPPage from '../pages/pdp/index.jsx'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/landing', element: <LandingPage /> },
  { path: '/pdp', element: <PDPPage /> },
])

export default function App() {
  return <RouterProvider router={router} />
}
