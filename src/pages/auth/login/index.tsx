import Image from '../../../../public/images/img-login.png'

export default function LoginPage() {
  return (
    <div className="grid min-h-lvh grid-cols-2 grid-rows-[3fr]">
      <div className="row-span-1 flex items-center justify-center border-r-2 border-zinc-100 md:hidden">
        <img
          src={Image}
          alt="Imagem-Logo"
          className="md:max-h-auto md:max-w-auto h-96 pr-4"
        />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 md:col-span-2">
        <h2 className="font-nunito text-lg font-semibold">Faça seu login</h2>
        <form className="flex w-96 flex-col">
          <div className="mb-4">
            <label className="font-nunito block" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="font-nunito block w-full rounded-sm border border-gray-300 bg-gray-50 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="font-nunito block" htmlFor="password">
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="font-nunito block w-full rounded-sm border border-gray-300 bg-gray-50 p-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            Entrar
          </button>
        </form>
      </div>
      <div className="col-span-2 row-span-1 h-8 w-full">
        <p className="text-center text-zinc-500">
          &copy; 2025, React Develop. Todos diretos reservados.
        </p>
      </div>
    </div>
  )
}

// export default function app() {
//   return (
//     <div className="grid min-h-lvh grid-cols-2 grid-rows-[auto,1fr]">
//       <div className="col-span-2 row-span-1 h-8 w-full bg-red-500">TEMA</div>
//       <div className="bg-green-500">IMAGEM</div>
//       <div className="bg-blue-500">FORMULARIO</div>
//     </div>
//   )
// }
