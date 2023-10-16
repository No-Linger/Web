"use client";
import Navbar from "../components/navbar/navbar";
import Table from "../components/table/table";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function Tiendas() {
    const [isOpen, setisOpen] = useState(false)

    function closeModal() {
        setisOpen(false);  
    }

    function openModal() {
        setisOpen(true);  
    }   

    const columns = ['Nombre', 'Dirección', 'Encargado',];

    const data = [
    { 'Nombre': 'Apple MacBook Pro 17"', 'Dirección': 'Silver', 'Encargado': 'Laptop',},
    { 'Nombre': 'Microsoft Surface Pro', 'Dirección': 'White', 'Encargado': 'Laptop PC',},
    { 'Nombre': 'Magic Mouse 2', 'Dirección': 'Black', 'Encargado': 'Accessories', },
];

  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-700">
        <Navbar />
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <header className="mb-10">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300">¡Bienvenido, usuario!</h1>
                <h2 className="text-lg font-semibold tracking-tight text-gray-500 dark:text-gray-400">Consulta y agrega planogramas</h2>
            </header>
                <Table 
                columns={columns} 
                data={data} 
                button = {"Agregar tienda"} 
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
                            leaveTo="opacity-0 scale-95">
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                            <Dialog.Title
                                as="h3"
                                className="text-lg font-medium leading-6 text-gray-900">
                                Aqui va el formulario para agregar tiendas
                            </Dialog.Title>
                            <div className="mt-2">
                                <p className="text-sm text-gray-500">
                                    Siuu
                                </p>
                            </div>
                            <div className="mt-4 justify-between flex">
                                <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                                onClick={closeModal}>
                                Cancelar
                                </button>
                                <button
                                type="button"
                                className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                onClick={closeModal}>
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
        </main>
      </div>
    </>
  )
}