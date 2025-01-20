import { useEffect, useState } from 'react'
// import { ModalComponent } from './modal'

// export interface ITodoList {
//   id: string
//   name: string
//   email: string
//   password: string
//   status: boolean
// }

// export function App() {
//   const [toList, setTodoList] = useState<ITodoList[]>([])
//   const [selectedItem, setSelectedItem] = useState<ITodoList | null>(null)
//   const [openModal, setOpenModal] = useState<boolean>(false)

//   useEffect(() => {
//     fetch('http://localhost:3000/users', {
//       method: 'GET',
//     })
//       .then((response) => response.json())
//       .then((data) => setTodoList(data))
//       .catch((error) => console.error(error))
//   })

//   function handleClick(item: ITodoList | null): void {
//     if (item !== null) setSelectedItem(item)
//     else setSelectedItem(null)
//     setOpenModal(true)
//   }

//   return (
//     <div className="flex h-screen flex-col items-center justify-center">
//       <h1 className="mb-4 text-2xl font-semibold underline">
//         To Do List React
//       </h1>
//       <button
//         className="mb-4 rounded bg-blue-700 px-4 py-2 font-bold text-white hover:bg-blue-500"
//         onClick={() => handleClick(null)}
//       >
//         Adicionar Usuário
//       </button>
//       <div className="relative flex flex-col rounded-lg border border-slate-200 bg-white shadow-sm">
//         {toList.length === 0 ? (
//           <p className="px-2 py-4 text-xl font-semibold">
//             Não há item na lista!!
//           </p>
//         ) : (
//           toList.map((item, index) => {
//             return (
//               <div
//                 key={index}
//                 className="flex min-w-[240px] flex-col gap-1 p-1.5"
//               >
//                 <button
//                   className="flex w-full cursor-pointer items-center justify-center rounded-md bg-zinc-100 p-3 text-slate-800 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
//                   onClick={() => handleClick(item)}
//                 >
//                   {item.name}
//                 </button>
//               </div>
//             )
//           })
//         )}
//         {openModal && (
//           <ModalComponent
//             items={selectedItem}
//             openModal={openModal}
//             setOpenModal={setOpenModal}
//           />
//         )}
//       </div>
//     </div>
//   )
// }

// export default App
