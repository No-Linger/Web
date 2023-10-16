import React from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';

export default function UserTable ({ users , onClick}) {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption className='p-5 font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800'>
            <div className="flex flex-row justify-end ">
                <button type="button" className="flex flex-row justify-center items-center"
                    onClick={onClick}>
                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">Agregar usuario</p>
                        <PlusIcon className="block w-6 text-gray-500 dark:text-gray-400" aria-hidden="true"/></button>
            </div>
        </caption>
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
        <tr>
          <th scope="col" className="p-4">
            <div className="flex items-center">
              <input
                id="checkbox-all-search"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label htmlFor="checkbox-all-search" className="sr-only">
                checkbox
              </label>
            </div>
          </th>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Número de teléfono
          </th>
          <th scope="col" className="px-6 py-3">
            Última conexión
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr
            key={index}
            className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 ${index % 2 === 0 ? 'hover:bg-gray-50 dark:hover:bg-gray-600' : ''}`}
          >
            <td className="w-4 p-4">
              <div className="flex items-center">
                <input
                  id={`checkbox-table-search-${index + 1}`}
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor={`checkbox-table-search-${index + 1}`} className="sr-only">
                  checkbox
                </label>
              </div>
            </td>
            <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
              <img className="w-10 h-10 rounded-full" src={user.avatar} alt={`${user.nombre} image`} />
              <div className="pl-3">
                <div className="text-base font-semibold">{user.nombre}</div>
                <div className="font-normal text-gray-500">{user.email}</div>
              </div>
            </th>
            <td className="px-6 py-4">{user.phone_number}</td>
            <td className="px-6 py-4">
              <div className="flex items-center">
                {user.ultima_conexion}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};