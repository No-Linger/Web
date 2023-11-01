"use client";
import Navbar from "../components/navbar/navbar";
import Table from "../components/table/table";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useEffect } from 'react'
import { NEXT_PUBLIC_API_URL } from "../utils/config";
import BucketService from "../utils/oracleBucket";
import axios from "axios";


export default function Planogramas() {
    const [planogramList, setPlanogramList] = useState([]);
    const [planogram, setPlanogram] = useState({
        name: "",
        store: "",
        date: "",
        img: null
    });

    const [image, setImage] = useState();  
    const [stores, setStores] = useState([])
    const [isOpen, setisOpen] = useState(false)

    function closeModal() {
        setisOpen(false);  
    }

    function openModal() {
        setisOpen(true);  
    }   

    async function getStores(){
      const stores = await axios.get(`${NEXT_PUBLIC_API_URL}/getStores`)
      
      setStores(stores.data.stores);    
    }

    useEffect(() => {
      getStores()

      axios.get(`${NEXT_PUBLIC_API_URL}/getPlanograms`)
           .then((response) => {
              setPlanogramList(response.data.planograms);
              console.log(response.data.planograms)
            })
             .catch(e => console.log(e))

    }, [])

    async function addPlanogram(){

      if(!planogram.name || !planogram.store){
        console.log('Error: Todos los campos deben ser cadenas de texto y tener información');
      }
      try {

        const bucket = new BucketService();
        const url = await bucket.uploadFile(image, planogram.name);
  
        const response = await axios.post(`${NEXT_PUBLIC_API_URL}/createPlanogram`, {
          name: planogram.name,
          store: planogram.store,
          date: new Date(),
          img: url
        
        });
        console.log(response);

        axios.get(`${NEXT_PUBLIC_API_URL}/getPlanograms`)
             .then((response) => {
              setPlanogramList(response.data.planograms);
             })
             .catch(e => console.log(e))
      }catch(e){
        console.log(e)
      }      
    }
    const columns = ['Nombre', 'Tienda', 'Fecha', 'Ver'];

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
                data={planogramList.map((row) => ({
                  ...row,
                  Ver: (
                    <button
                      // onClick={() => setSelectedImage(row.Ve r)}
                    >
                      Ver Imagen
                    </button>
                  ),
                }))}
                button = {"Agregar planograma"} 
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
                    className="text-lg font-medium leading-6 text-gray-900 dark:text-white pb-6">
                    Agregar planograma
                  </Dialog.Title>
                  <div className="flex flex-col justify-between space-y-4">
                    <div className="w-full">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Nombre</label>
                        <input type="text" id="default-input"
                        onChange={(e) => setPlanogram({...planogram, name: e.target.value})}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                        focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                          dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div> 
                    <div className="w-full">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selecciona tienda</label>
                      <select 
                      id="stores" 
                      onChange={(e) => setPlanogram({...planogram, store: e.target.value})}
                      className="bg-gray-50 border border-gray-300
                                 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                                 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                                 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option defaultValue>Selecciona una tienda</option>
                        {stores.map((store, key) => {
                          return(<option key={key} value={store.Nombre}>{store.Nombre}</option>)
                        })}
                      </select>
                    </div>
                    <div className="w-full">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selecciona planograma</label>
                      <input 
                      onChange={(e) => {
                        const file = e.target.files[0]
                        console.log(file);
                        if (file){
                          const reader = new FileReader();
                          reader.readAsDataURL(file);
                          reader.onload = () => {
                            setImage(reader.result);
                          }
                        }
                      }}
                      className="block w-full text-sm text-gray-900 border 
                      border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none
                      dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" type="file" accept="image/png, image/jpeg"/>
                    </div>
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
                      onClick={addPlanogram}
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
        </main>
      </div>
    </>
  )
}