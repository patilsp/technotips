"use client";

import Image from "next/image";
import Lottie from"lottie-react";
import animationData from "@/assets/loading.json";

const Loading = () => {
  return (
    <div className='absolute inset-0 flex items-center justify-center'>
       <div className="text-card-foreground">
          <div className="flex justify-center p-20"> 
            <Lottie animationData={animationData} />                     
          </div>            
        </div> 
    </div>
  );
};

export default Loading;



