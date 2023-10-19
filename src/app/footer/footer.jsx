import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-3 text-center fixed bottom-0 w-full">
      <div className="container mx-auto">
      <hr className="border-gray-200 mx-auto dark:border-gray-700 w-2/4 my-2"/>
        <span data-testid = "footer-text" className="flex justify-center text-sm text-gray-500 sm:text-center dark:text-gray-400 space-x-5">
              © 2023 <a href="https://github.com/No-Linger" className="hover:underline ml-1">No-Linger™.</a> 
              <p>Todos los derechos reservados.</p> 
              <a className="hover:underline"> Términos y condiciones.</a> 
        </span>
      </div>
    </footer>
  );
}