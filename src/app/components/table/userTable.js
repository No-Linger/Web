import React from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';

export default function UserTable ({ users , onClick}) {


  if(users.length === 0) {
    return (
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto">
        <caption className='p-5 font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800'>
            <div className="flex flex-row justify-end ">
                <button type="button" className="flex flex-row justify-center items-center"
                    onClick={onClick}>
                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Agregar usuario</p>
                        <PlusIcon className="block w-6 text-gray-500 dark:text-gray-400" aria-hidden="true"/></button>
            </div>
        </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                    Número de teléfono
                </th>
                <th scope="col" className="px-6 py-3">
                    Tienda
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4 text-center" colSpan={3}>
                    No hay datos
                </td>
            </tr>
        </tbody>
      </table>
    );
  }
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto">
        <caption className='p-5 font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800'>
            <div className="flex flex-row justify-end ">
                <button type="button" className="flex flex-row justify-center items-center"
                    onClick={onClick}>
                        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Agregar usuario</p>
                        <PlusIcon className="block w-6 text-gray-500 dark:text-gray-400" aria-hidden="true"/></button>
            </div>
        </caption>
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Nombre
          </th>
          <th scope="col" className="px-6 py-3">
            Número de teléfono
          </th>
          <th scope="col" className="px-6 py-3">
            Tienda
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr
            key={index}
            className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 ${index % 2 === 0 ? 'hover:bg-gray-50 dark:hover:bg-gray-600' : ''}`}
          >
            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
              <div className="pl-3">
                <div className="text-base font-semibold">{user.Nombre}</div>
                <div className="font-normal text-gray-500">{user.Email}</div>
              </div>
            </th>
            <td className="px-6 py-4">{user.Telefono}</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                {user.Tienda_id}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};