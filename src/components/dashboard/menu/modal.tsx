import { X, ChevronDown, ChevronUp } from 'lucide-react'
import Logo from '../../../../public/images/logo-main.svg'
import { Location, useNavigate } from 'react-router-dom'

type ModalMenuProps = {
  openModal: boolean
  setOpenModal: (openModal: boolean) => void
  menuLink: MenuLink[]
  openMenus: Record<string, boolean>
  setOpenMenus: (key: any) => void
  location: Location<any>
}

export const ModalMenu = ({
  openModal,
  setOpenModal,
  menuLink,
  openMenus,
  setOpenMenus,
  location,
}: ModalMenuProps) => {
  const navigate = useNavigate()

  const toggleMenu = (id: string) => {
    setOpenMenus((prev: any) => ({ ...prev, [id]: !prev[id] }))
  }

  const isActive = (path: string) => location.pathname === path

  function handleClickLink(path: string) {
    navigate(path)
    setOpenModal(!openModal)
  }

  return (
    <aside className="absolute min-h-full w-full overflow-hidden bg-slate-800">
      <div>
        <div className="flex cursor-pointer flex-row items-center justify-between pr-8">
          <img src={Logo} alt="Logo" className="p-6" />
          <X
            className="cursor-pointer text-zinc-50 hover:text-zinc-200"
            onClick={() => setOpenModal(!openModal)}
          />
        </div>
        <div className="p-4 font-nunito text-base font-semibold text-zinc-500">
          <div className="mb-4">
            <h2 className="pl-6">MENU</h2>
          </div>
          {menuLink.map((menu) => (
            <div className="ml-auto flex flex-row px-4" key={menu.id}>
              <div className="flex w-full flex-col">
                <div
                  className={`${isActive(menu.path || '') && 'bg-zinc-600'} mb-1 flex w-full cursor-pointer flex-row justify-between p-2 hover:bg-zinc-700`}
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
                  menu.children?.map((link: any) => (
                    <ul
                      key={link.id}
                      className="flex flex-col items-start justify-center gap-4 px-6"
                    >
                      <li
                        onClick={() => handleClickLink(link.path)}
                        className={`cursor-pointer py-1 font-nunito text-base hover:text-zinc-50 ${
                          isActive(link.path || '')
                            ? 'text-zinc-50'
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
