import {
  Eye,
  ShoppingCart,
  Package,
  Users,
  // ArrowDown,
  ArrowUp,
} from 'lucide-react'

const cardsView = [
  {
    id: '236898093333',
    icon: <Eye />,
    price: '$3.456K',
    description: 'Total views',
    porcent: '0.43%',
  },
  {
    id: '61964974774574',
    icon: <ShoppingCart />,
    price: '$45,2K',
    description: 'Total Profit',
    porcent: '4.35%',
  },
  {
    id: '091901829328938388',
    icon: <Package />,
    price: '2.450',
    description: 'Total Product',
    porcent: '2.59%',
  },
  {
    id: '23343455456566',
    icon: <Users />,
    price: '3.456',
    description: 'Total Users',
    porcent: '0.95%',
  },
]

export const Ecommerce = () => {
  return (
    <section className="grid w-full grid-cols-4 grid-rows-4 items-center justify-center gap-6 p-6 xl:grid-cols-2 sm:grid-cols-1">
      {cardsView.map((view) => {
        return (
          <div
            key={view.id}
            className="z-50 flex flex-col bg-zinc-50 p-6 shadow-md"
          >
            <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-full bg-gray-200">
              <span className="text-blue-900">{view.icon}</span>
            </div>
            <div>
              <p className="font-nunito text-2xl font-bold">{view.price}</p>
              <div className="mt-2 flex flex-row items-center justify-between">
                <p className="font-nunito text-sm text-zinc-500">
                  {view.description}
                </p>
                <div className="flex flex-row items-center gap-2">
                  <p className="text-base text-green-500">{view.porcent}</p>
                  <ArrowUp className="h-4 w-4 text-green-500" />
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}
