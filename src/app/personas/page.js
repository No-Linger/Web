"use client";
import Navbar from "../components/navbar/navbar";
import UserTable from "../components/table/userTable";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { authClient } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { NEXT_PUBLIC_API_URL } from "../utils/config";
import { getSession } from "next-auth/react";
export default function Personas() {
  
  const [isOpen, setisOpen] = useState(false)
  const [loading, setLoading] = useState(true);
  const AUTH = authClient
  const [user,SetUser] = useState({
      id:"",
      name:"",
      email:"",
      telefono:"",
      Tienda_id:"",
      role:""
  })
  const [users,SetUsers] = useState([])

  const checkSession = async()=>{
    const session = await getSession()
  if(!session || !session.user){
    console.log("XDXDXD")
  }
  else{
    console.log(session)
  }
  }

  const getUsers = async()=>{
    const response = await fetch(NEXT_PUBLIC_API_URL +"/getUsers",{
      method:"GET"
    })
    if(response.ok){
      const response_json = await response.json()
      SetUsers(response_json.users)
      setLoading(false)
    }
    else{
      console.log("NO funciono")
      setLoading(false)
    }
  }

  useEffect(() => {
    getUsers()
    checkSession()
  }, [])

  function closeModal() {
      setisOpen(false);  
  }

  function openModal() {
      setisOpen(true);  
  }
  
  function createUser(){
    const password = "Password123!"

      createUserWithEmailAndPassword(AUTH, user.email, password)
      .then((userCredential) => {
      // Signed up 
      const user_n = userCredential.user;
      const data = {
        id:user_n.uid,
        name:user.name,
        email:user.email,
        phone:user.phone,
        store_id:user_n.uid,
        role:"INGE"
      }
      fetch(NEXT_PUBLIC_API_URL + "/createUser",{
        method:"POST",
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(data)
      })
      .then(response =>{
        if(!response.ok){
          console.log("Error at DB!")
        }
        else{
          console.log("Succesful")
          closeModal()
        }
      })
      })
      .catch((error) => {
        console.log(error)
      });
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-700">
        <Navbar />
        {loading ? (
          <div className="flex items-center justify-center w-full h-screen">
          <div role="status">
          <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
          <span className="sr-only">Loading...</span>
      </div>
</div>
        ):(

        
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <header className="mb-10">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300">¡Bienvenido, usuario!</h1>
                <h2 className="text-lg font-semibold tracking-tight text-gray-500 dark:text-gray-400">Consulta y agrega personas</h2>
            </header>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-white dark:bg-gray-800">
                <UserTable 
                users={users}
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
                         <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Nombre</label>
                        <input type="text" id="default-input" 
                        onChange={(e) => SetUser({...user,name:e.target.value})}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                          dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div> 
                    <div className="w-full">
                      <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input type="text" id="default-input" 
                        onChange={(e) => SetUser({...user,email:e.target.value})}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                          dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>
                    <div className="w-full">
                      <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Numero telefonico</label>
                        <input type="text" id="default-input"
                        onChange={(e) => SetUser({...user,phone:e.target.value})} 
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
                            onClick={createUser}
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
        )}
      </div>
    </>
  )
}