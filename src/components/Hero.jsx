import React from "react";
import ReactPlayer from "react-player";


const Hero = () => {
    return (
        <section>
            <ReactPlayer 
            className="absolute top-2/4 left-2/4 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
           src="./imagev/Yango_tech1.mp4"
            playing={true}
            loop={true}
            pip={false}
            autoPlay
            playsInline
            muted
            preload="auto"
            />
            <div className="relative flex flex-col text-center items-center justify-center h-screen">
                <h1 className=" font-extrabold text-[white] text-8xl">
                    Empower Businesses<br/>with global<br/>Technologies
                </h1>
                <p className=" text-white py-10 text-2xl">
                    Start your AI transformation to unlock<br/>growth opportunities 
                </p>
                <button 
                className=" bg-white cursor-pointer px-[150px] py-[15px] rounded-[10px]  border-[1px] border-[solid] font-bold text-red-500 font-serif" 
                onClick={() => console.log('click')} >
                    Talk to an Expert
                </button>
            </div>
             
            
        </section>
    )
}

export default Hero;