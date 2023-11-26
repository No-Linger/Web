'use client';

import NoLinger from '@/images/NoLinger.png';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Footer from '../components/footer/footer.jsx';


export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignIn = async () => {
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError(result.error);
    } else if (result?.ok) {
      router.push('/planogramas');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-980">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md transform transition-transform hover:scale-105 hover:shadow-xl mb-10">

        <img data-testid = "no-linger-logo" className= 'mx-auto h-48 w-48' src={NoLinger.src} alt='logo NoLinger'/>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Bienvenido Colaborador</h2>
        </div>
        <form className="mt-6">

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-semibold">Correo Electrónico</label>
            <input
              type="email"
              autoComplete='email'
              id="email"
              name="email"
              className="w-full text-black px-4 py-2 border-gray-300 border-2 rounded-lg focus:outline-none"
              placeholder="adrianBravo@tec.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 text-sm font-semibold">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border-gray-300 border-2 rounded-lg focus:outline-none text-black"
              placeholder="********"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && (
            <div className="mb-4 text-red-500 text-sm">{error}</div>
          )}
          
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="w-full bg-[#4285F4] hover:bg-[#357AE8] text-white font-semibold py-2 px-4 my-2 rounded-lg focus:ring focus:ring-[#4285F4] focus:outline-none"
              onClick={handleSignIn}
              disabled={!email || !password}
            >
              Iniciar Sesión
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-gray-600 text-sm">
        Olvidaste tu contraseña? <a href="/forgot_password" className="text-blue-900 hover:underline">Entra aquí</a>
        </p>
        <div className="mt-6">
        </div>
      

      </div>
      <Footer/>
    </div>
  );
}