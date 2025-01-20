type MenuLink = {
  id: string
  name: string
  icon: JSX.Element // O ícone será um elemento JSX
  path?: string // Opcional, já que alguns itens de menu não têm um caminho direto
  children?: MenuLinkChild[] // eslint-disable-line
}

type MenuLinkChild = {
  id: string
  name: string
  path?: string // Opcional, pois nem todos os filhos podem ter um caminho
}

type MenuProps = {
  menuLink: MenuLink[]
  openMenus: Record<string, boolean>
  setOpenMenus: (key: any) => void
  location: Location<any>
}
