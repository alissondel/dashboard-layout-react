import Logo from '../../../../public/images/logo-main.svg'

import { ChevronDown, ChevronUp } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export const MenuComponent = ({
  menuLink,
  openMenus,
  setOpenMenus,
  location,
}: MenuProps) => {
  const navigate = useNavigate()

  const toggleMenu = (id: string) => {
    setOpenMenus((prev: any) => ({ ...prev, [id]: !prev[id] }))
  }

  const isActive = (path: string) => location.pathname === path

  return (
    <aside className="fixed left-0 top-0 z-50 h-screen w-[250px] overflow-y-hidden bg-slate-800 duration-300 ease-linear lg:hidden lg:translate-x-0">
      <img src={Logo} alt="Logo" className="p-6" />
      <div className="no-scrollbar flex h-[90%] flex-col overflow-auto duration-300 ease-linear">
        <div className="p-4 font-nunito text-base font-semibold text-zinc-500">
          <div className="mb-4">
            <h2 className="pl-6">MENU</h2>
          </div>
          {menuLink.map((menu: any) => (
            <div className="ml-auto flex flex-row px-4" key={menu.id}>
              <div className="flex w-full flex-col">
                <div
                  className={`${
                    isActive(menu.path || '') && 'bg-zinc-600'
                  } mb-1 flex w-full cursor-pointer flex-row justify-between p-2 hover:bg-zinc-700`}
                  onClick={() => toggleMenu(menu.id)}
                >
                  <div className="flex flex-row gap-2 text-zinc-50">
                    <span>{menu.icon}</span>
                    <p className="font-nunito text-base">{menu.name}</p>
                  </div>
                  {menu.children && (
                    <span className="text-zinc-50">
                      {openMenus[menu.id] ? <ChevronUp /> : <ChevronDown />}
                    </span>
                  )}
                </div>
                {openMenus[menu.id] &&
                  menu.children?.map((link: MenuLinkChild) => (
                    <ul
                      key={link.id}
                      className="flex flex-col items-start justify-center gap-4 px-6"
                    >
                      <li
                        onClick={() => {
                          navigate(link.path as string)
                        }}
                        className={`cursor-pointer py-1 font-nunito text-base hover:text-zinc-50 ${
                          isActive(link.path || '')
                            ? 'text-blue-600'
                            : 'text-zinc-400'
                        }`}
                      >
                        {link.name}
                      </li>
                    </ul>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  )
}
