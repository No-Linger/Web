import Logo from "@/images/NoLinger.jpeg";
import Footer from "@/app/components/footer/footer.js";

export default function Login() {

  return (
<div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
    <div>
        <section>
            <div className="flex flex-col items-center justify-center p-0 space-y-0 md:space-y-6 sm:p-16">
                  <div className="flex flex-col items-center justify-center w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">

                    <a href="https://github.com/No-Linger" className="flex items-center mt-6 text-2xl dark:text-white">
                        <img className="w-40 h-40 mr-2" src={Logo.src} alt="logo"/>
                    </a>

                      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                              Inicia sesión en tu cuenta
                          </h1>
                          <form className="space-y-4 md:space-y-6" action="#">
                              <div>
                                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo</label>
                                  <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Adrianbravo@gmail.com" required=""/>
                              </div>
                              <div>
                                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                                  <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                              </div>
                              <div className="flex items-center justify-between">
                                  <div className="flex items-start">
                                      <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                                      </div>
                                      <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Recuerdame</label>
                                      </div>
                                  </div>
                                  <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Olvidé mi contraseña</a>
                              </div>
                              <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Iniciar sesión</button>
                              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                  No tienes cuenta todavía? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Crear cuenta</a>
                              </p>
                          </form>
                      </div>
                </div>
            </div>
        </section>
    </div>
    <Footer/>
</div>
    
  );
}
