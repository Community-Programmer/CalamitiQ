import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Earth from "../../../public/Earth";
import { useState } from "react";
import ChatBot from "@/components/ChatBot/ChatBot";
import bot from "../../assets/chatbot.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <>
      <div className="w-full lg:grid lg:min-h-[400px] lg:grid-cols-2 xl:min-h-[600px] ">
        <div className="flex items-center justify-center py-12">
          <div className="mx-auto grid w-[350px] gap-6">
            <div className="grid gap-2 text-center gap-5">
              <h1 className="text-4xl font-bold">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </h1>
              <p className="text-balance text-muted-foreground">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint,
                odit aliquid adipisci vero, voluptates et repellendus aspernatur
                similique illo quis nesciunt, totam dolorem iusto rem facere
                fuga itaque dolores delectus!
              </p>
            </div>
            <Button className="w-full gap-4">
              <Link href="disaster-map">Disaster Map</Link>
              <FaArrowRight />
            </Button>
          </div>
        </div>
        <div className=" lg:block">
          <div className="items-center flex h-full">
            <Canvas
              style={{ height: "450px" }}
              frameloop="demand"
              camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 300 }}
            >
              <ambientLight intensity="2" />
              <OrbitControls enableZoom={false} autoRotate />
              <Suspense fallback={null}>
                <Earth scale={2} />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
      <div className="chatBotBtn">
        <button onClick={() => setShowChatbot(!showChatbot)}>
          <img src={bot} alt="bot" />
        </button>
      </div>
      {showChatbot && <ChatBot />}
    </>
  );
};

export default Home;
