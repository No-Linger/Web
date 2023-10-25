"use client";
import Navbar from "../components/navbar/navbar";
import UserTable from "../components/table/userTable";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const usuarios = [
  {
    nombre: 'Neil Sims',
    email: 'neil.sims@flowbite.com',
    phone_number: '5512131415',
    ultima_conexion: 'Online',
    avatar: '',
  },
  {
    nombre: 'Bonnie Green',
    email: 'bonnie@flowbite.com',
    phone_number: '5513141617',
    ultima_conexion: 'Online',
    avatar: '',
  },
  {
    nombre: 'Jese Leos',
    email: 'jese@flowbite.com',
    phone_number: '5516171819',
    ultima_conexion: 'Online',
    avatar: '',
  },
  {
    nombre: 'Thomas Lean',
    email: 'thomes@flowbite.com',
    phone_number: '5519202123',
    ultima_conexion: 'Online',
    avatar: '',
  },
  {
    nombre: 'Leslie Livingston',
    email: 'leslie@flowbite.com',
    phone_number: '5521242527',
    ultima_conexion: 'Offline',
    avatar: '',
  },
];
export default function Personas() {
  const [isOpen, setisOpen] = useState(false)

  function closeModal() {
      setisOpen(false);  
  }

  function openModal() {
      setisOpen(true);  
  }   
  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-700">
        <Navbar />
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <header className="mb-10">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300">¡Bienvenido, usuario!</h1>
                <h2 className="text-lg font-semibold tracking-tight text-gray-500 dark:text-gray-400">Consulta y agrega personas</h2>
            </header>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white dark:bg-gray-800">
                <UserTable 
                users={usuarios}
                onClick={openModal}/>
                <Transition appear show={isOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >

                      <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-gray-900 dark:text-white pb-6"
                        >
                          Agregar usuarios
                        </Dialog.Title>
                        <div className="w-full">
                         <label for="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Nombre</label>
                        <input type="text" id="default-input" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                          dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div> 
                    <div className="w-full">
                      <label for="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="text" id="default-input" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                          dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>
                    <div className="w-full">
                      <label for="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Numero telefonico</label>
                        <input type="text" id="default-input" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                          dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>  

                        <div className="mt-4 justify-between flex">
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                            onClick={closeModal}
                          >
                            Cancelar
                          </button>
                          <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeModal}
                          >
                            Agregar
                          </button>
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}