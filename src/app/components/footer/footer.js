export default function Footer() {

return (
<footer className=" dark:bg-gray-900 sticky top-[100vh] py-5">
    <div className="w-full max-w-screen-xl mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
        </div>
        <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700"/>
        <span data-testid = "footer-text" className="flex justify-center text-sm text-gray-500 sm:text-center dark:text-gray-400 space-x-5">
            © 2023 <a href="https://github.com/No-Linger" className="hover:underline ml-1">No-Linger™.</a> 
            <p>Todos los derechos reservados.</p> 
            <a className="hover:underline"> Términos y condiciones.</a> </span>
    </div>
</footer>
);
}