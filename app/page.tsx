"use client";
import Link from "next/link";
import { useStore } from "./zustand";
export default function Home() {
  const { namaMahasiswa, nimMahasiswa, handle } = useStore();
  return (
    <div className=" h-[100vh] m-auto flex items-center justify-center bg-slate-300">
      <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md ">
        <div className="px-6 py-4">
          <p className="mt-1 text-center text-gray-500 ">
            Masukkan Data Diri !
          </p>

          <div>
            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg   focus:border-blue-400  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                placeholder="Nama Mahasiswa"
                aria-label="Nama Mahasiswa"
                value={namaMahasiswa}
                onChange={(e) => handle("namaMahasiswa", e.target.value)}
              />
            </div>

            <div className="w-full mt-4">
              <input
                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg   focus:border-blue-400  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300"
                type="text"
                placeholder="Masukkan NIM"
                aria-label="Masukkan NIM"
                value={nimMahasiswa}
                onChange={(e) => handle("nimMahasiswa", e.target.value)}
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              {namaMahasiswa && nimMahasiswa ? (
                <Link
                  href="/materi1"
                  className="px-6 py-2 w-full text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 text-center"
                >
                  Sign In
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
