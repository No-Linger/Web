export default function Footer() {

return (
<footer className=" dark:bg-gray-900 sticky top-[100vh] mb-5">
    <div className="w-full max-w-screen-xl mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 "/>
        <span data-testid = "footer-text" className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://github.com/No-Linger" className="hover:underline">No-Linger™.</a> Todos los derechos reservados. <a className="hover:underline"> Términos y condiciones.</a> </span>
    </div>
</footer>
);
}