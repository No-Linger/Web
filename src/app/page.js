"use client";
import Navbar from "./components/navbar/navbar";
export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-700">
        <Navbar />
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-300">Dashboard principal :)</h1>
          </div>
        </main>
      </div>
    </>
  )
}