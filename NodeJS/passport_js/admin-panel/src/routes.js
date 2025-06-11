import { lazy } from 'react'
import SendOtp from './views/pages/SendOtp'

const Dashboard = lazy(() => import('./views/dashboard/Dashboard'))

// Base
const Accordion = lazy(() => import('./views/base/accordion/Accordion'))

const Charts = lazy(() => import('./views/charts/Charts'))


const Widgets = lazy(() => import('./views/widgets/Widgets'))

const ChangePassword = lazy(() => import('./views/pages/ChangePassword'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/base', name: 'Base', exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },

  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
  { path: '/change-password', element: ChangePassword },
]

export default routes
