"use client";
import { useStore } from "../zustand";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import loadingHand from "@/app/assets/lottie/loading-hand.json";

const LoadingPage = () => {
  const loadingPage = useStore((state: any) => state.loadingPage);

  return (
    <div className="fixed bg-white/30 backdrop-blur-sm top-0 right-0 left-0 bottom-0 z-[9999] flex items-center justify-center w-screen h-screen overflow-hidden overflow-y-hidden">
      <Player autoplay loop src={loadingHand} style={{ width: "50%" }}>
        <Controls
          visible={false}
          buttons={["play", "repeat", "frame", "debug"]}
        />
      </Player>
    </div>
  );
};

export default LoadingPage;
