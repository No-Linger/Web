import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-3 text-center fixed bottom-0 w-full">
      <div className="container mx-auto">
      <hr className="border-gray-200 mx-auto dark:border-gray-700 w-2/4 my-2"/>
        © 2023 <a href="https://github.com/No-Linger" className="hover:underline">No-Linger™</a>. Todos los derechos reservados. <a className="hover:underline">Términos y condiciones</a>.
      </div>
    </footer>
  );
}
