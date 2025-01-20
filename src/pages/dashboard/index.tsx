import { useState } from 'react'
import { useLocation, Outlet } from 'react-router-dom'

import { MenuComponent } from '../../components/dashboard/menu'
import { ModalMenu } from '../../components/dashboard/menu/modal'
import { Navbar } from '../../components/dashboard/navbar'
import { MenuLinks } from '../../constants/menu-links'

export default function DashboardPage() {
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({})
  const [openModal, setOpenModal] = useState<boolean>(false)

  const location = useLocation()

  return (
    <main className="grid h-screen grid-cols-[auto,1fr] lg:grid-cols-1">
      <MenuComponent
        menuLink={MenuLinks}
        openMenus={openMenus}
        setOpenMenus={setOpenMenus}
        location={location}
      />
      <div className="h-full">
        <Navbar openModal={openModal} setOpenModal={setOpenModal} />
        <section className="fixed inset-0 left-[240px] top-[64px] overflow-y-auto bg-slate-100 lg:left-0">
          <Outlet />
        </section>
      </div>
      {openModal && (
        <ModalMenu
          location={location}
          menuLink={MenuLinks}
          openMenus={openMenus}
          openModal={openModal}
          setOpenMenus={setOpenMenus}
          setOpenModal={setOpenModal}
        />
      )}
    </main>
  )
}
