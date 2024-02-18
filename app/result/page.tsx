"use client";
import React from "react";
import { useStore } from "../zustand";
import Image from "next/image";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import congratulationFish from "@/app/assets/lottie/congrat.json";

const Result = () => {
  const { nilai, namaMahasiswa, nimMahasiswa } = useStore();
  return (
    <div>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center flex flex-col items-center justify-center">
          {/* <p className="text-base font-semibold text-indigo-600">404</p> */}
          {/* <Player
            autoplay
            loop
            src={congratulationFish}
            style={{ width: "50%" }}
          >
            <Controls
              visible={false}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player> */}
          <div className=" w-[40vw] text-center flex items-center justify-center">
            <Image
              src="/result_2.gif" // Route of the image file
              alt="Your Name"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "70%", height: "auto", objectFit: "contain" }}
            />
          </div>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Name {namaMahasiswa} dengan Martikelnummer {nimMahasiswa}
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sie erhalten Punkte{" "}
            <div className=" font-bold text-xl">{nilai}</div>
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              zurück
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Result;
