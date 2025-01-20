import {
  LayoutDashboard,
  CalendarRange,
  User,
  LayoutList,
  Sheet,
  LetterText,
} from 'lucide-react'

export const MenuLinks = [
  {
    id: '8368374r9',
    name: 'Dashboard',
    icon: <LayoutDashboard />,
    path: '/dashboard',
    children: [
      { id: '32343465', name: 'eCommerce', path: '/dashboard/ecommerce' },
      { id: '756576767', name: 'Analytics', path: '/dashboard/analytics' },
      { id: '08896746548', name: 'Marketing', path: '/dashboard/marketing' },
      { id: '25870-0909-757', name: 'CRM', path: '/dashboard/crm' },
      { id: '25870-0909-758', name: 'Stocks', path: '/dashboard/stocks' },
    ],
  },
  {
    id: '938434030762',
    name: 'Calendar',
    icon: <CalendarRange />,
    path: '/calendar',
  },
  {
    id: '2354121111788',
    name: 'Profile',
    icon: <User />,
    path: '/profile',
  },
  {
    id: '368899900',
    name: 'Task',
    icon: <LayoutList />,
    path: '/tasks',
    children: [
      { id: '32343465', name: 'List', path: '/tasks/list' },
      { id: '756576767', name: 'Kanban', path: '/tasks/kanban' },
    ],
  },
  {
    id: '2236990909999',
    name: 'Forms',
    icon: <LetterText />,
    children: [
      { id: '32343465', name: 'Form Element' },
      { id: '756576767', name: 'Form Layout' },
    ],
  },
  {
    id: '35687980811',
    name: 'Tables',
    icon: <Sheet />,
    children: [
      { id: '32343465', name: 'Tables' },
      { id: '756576767', name: 'Pro Tables' },
    ],
  },
]
