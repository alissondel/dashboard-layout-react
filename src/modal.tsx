import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from '@headlessui/react'
import { TrashIcon } from '@heroicons/react/24/outline'
import { ITodoList } from './App'
import { v4 as uuidv4 } from 'uuid'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'

export interface ModalProps {
  items: ITodoList | null
  openModal: boolean
  setOpenModal: (key: boolean) => void
}

export function ModalComponent({ items, openModal, setOpenModal }: ModalProps) {
  const [formValue, setFormValue] = useState<ITodoList>({
    id: '',
    name: '',
    email: '',
    password: '',
    status: true,
  })

  useEffect(() => {
    if (items?.id != null) {
      setFormValue((prevState) => ({
        ...prevState,
        id: items.id,
        name: items.name,
        email: items.email,
        password: items.password,
        status: items.status,
      }))
    }
  }, [items])

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value, checked, type } = event.target

    if (type === 'checkbox') {
      setFormValue((prevState) => ({
        ...prevState,
        [name]: checked,
      }))
    } else {
      setFormValue((prevState) => ({
        ...prevState,
        [name]: value,
      }))
    }
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (formValue.id === '') create()
    else update()
  }

  function create() {
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...formValue,
        id: uuidv4(),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        alert(`Usuário: ${formValue.name} criada com sucesso!`)
        setOpenModal(false)
      })
      .catch((error) => console.error(error))
  }

  function update() {
    fetch(`http://localhost:3000/users/${formValue.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formValue),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        alert(`Usuário: ${formValue.name} atualizado com sucesso!`)
        setOpenModal(false)
      })
      .catch((error) => console.error(error))
  }

  function remove() {
    fetch(`http://localhost:3000/users/${formValue.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(formValue),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        alert(`Usuário: ${formValue.name} deletado com sucesso!`)
        setOpenModal(false)
      })
      .catch((error) => console.error(error))
  }

  const enabled =
    formValue.name.length > 3 &&
    formValue.email.length > 10 &&
    formValue.password.length > 3

  return (
    <Dialog
      open={openModal}
      onClose={() => setOpenModal(false)}
      className="relative z-10"
    >
      <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

      <div className="fixed inset-0 z-10 flex items-center justify-center">
        <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-lg bg-white shadow-xl transition-all md:max-w-[50%] sm:max-w-lg">
          <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:hidden">
                <TrashIcon
                  aria-hidden="true"
                  className="h-6 w-6 cursor-pointer text-red-600"
                  title="Excluir"
                  onClick={remove}
                />
              </div>
              <div className="mt-3 text-left sm:ml-4 sm:mt-0">
                <DialogTitle
                  as="h3"
                  className="text-center text-lg font-semibold text-gray-900"
                >
                  Cadastro de Usuário
                </DialogTitle>
                <div className="mt-6">
                  <form className="w-full max-w-lg" onSubmit={handleSubmit}>
                    <div className="-mx-3 flex flex-wrap space-y-4">
                      <div className="w-full px-3">
                        <label
                          className="mb-2 text-xs font-bold uppercase tracking-wide text-gray-700"
                          htmlFor="name"
                        >
                          Nome:
                        </label>
                        <input
                          className="w-full appearance-none rounded border px-4 py-3 leading-tight text-gray-700 focus:bg-white focus:outline-none"
                          id="name"
                          name="name"
                          value={formValue?.name}
                          type="text"
                          placeholder="Digite seu nome..."
                          onChange={handleChange}
                        />
                        {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
                      </div>
                      <div className="w-full px-3">
                        <label
                          className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                          htmlFor="email"
                        >
                          Email:
                        </label>
                        <input
                          className="block w-full appearance-none rounded border border-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                          id="email"
                          name="email"
                          value={formValue?.email}
                          type="email"
                          placeholder="Digite seu email..."
                          onChange={handleChange}
                        />
                      </div>
                      <div className="w-full px-3">
                        <label
                          className="mb-2 block text-xs font-bold uppercase tracking-wide text-gray-700"
                          htmlFor="grid-last-name"
                        >
                          Senha:
                        </label>
                        <input
                          className="block w-full appearance-none rounded border border-gray-200 px-4 py-3 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
                          id="password"
                          name="password"
                          value={formValue?.password}
                          type="password"
                          placeholder="Digite sua senha..."
                          onChange={handleChange}
                        />
                      </div>
                      <div className="w-full px-3">
                        <label className="inline-flex cursor-pointer items-center">
                          <input
                            type="checkbox"
                            id="status"
                            name="status"
                            className="peer sr-only"
                            checked={!!formValue?.status}
                            onChange={handleChange}
                          />
                          <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800 rtl:peer-checked:after:-translate-x-full" />
                          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                            {formValue.status ? 'Ativo' : 'Inativo'}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="flex flex-row-reverse items-center justify-center gap-4 bg-gray-50 px-4 py-3">
                      <button
                        type="submit"
                        className="mt-3 inline-flex w-full cursor-pointer justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-zinc-50 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-blue-900 disabled:cursor-not-allowed disabled:bg-gray-500"
                        disabled={!enabled}
                      >
                        Salvar
                      </button>
                      <button
                        type="button"
                        onClick={() => setOpenModal(false)}
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}
