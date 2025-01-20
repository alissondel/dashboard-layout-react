import { CircleUser, Menu, SunMoon } from 'lucide-react'
import LogoIcon from '../../../../public/images/logo-icon.svg'

type NavbarProps = {
  openModal: boolean
  setOpenModal: (openModal: boolean) => void
}

export const Navbar = ({ openModal, setOpenModal }: NavbarProps) => {
  return (
    <nav className="fixed left-0 right-0 top-0 flex h-[10%] items-center justify-between border-b border-b-zinc-100 bg-zinc-50 px-6 shadow-md">
      <div className="flex flex-row gap-3">
        <Menu
          className="hidden h-8 w-10 cursor-pointer border lg:block"
          onClick={() => setOpenModal(!openModal)}
        />
        <img src={LogoIcon} alt="Icon" className="hidden lg:block" />
      </div>
      <ul className="ml-auto flex flex-row gap-6">
        <li>
          <SunMoon className="h-8 cursor-pointer" />
        </li>
        <li>
          <CircleUser className="h-8 cursor-pointer" />
        </li>
      </ul>
    </nav>
  )
}
