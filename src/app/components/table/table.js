import { PlusIcon } from "@heroicons/react/24/outline";


export default function Table({ columns, data, button, onClick }) {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <caption className="p-5 font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    <div className="flex flex-row justify-end ">
                        <button type="button" className="flex flex-row justify-center items-center"
                        onClick={onClick}>
                            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">{button}</p>
                            <PlusIcon className="block w-6 text-gray-500 dark:text-gray-400" aria-hidden="true"/></button>
                    </div>
                </caption>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index} scope="col" className="px-6 py-3">
                                {column}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            {columns.map((column, columnIndex) => (
                                <td key={columnIndex} className="px-6 py-4">
                                    {row[column]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
