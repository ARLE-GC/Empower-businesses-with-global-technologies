import React from "react";

const Footer = () => {
    return (
        <section className="pl-[3.2rem] pr-[3.2rem] py-[3.2rem] block bg-black">
        <div className="flex justify-between">
            <div className="flex items-center">
                    <img src="./imagev/orig.svg" alt="" className="opacity-100 [transition:opacity_linear_.25s]  top-[0] right-[0] w-full h-full [aspect-ratio:auto_183_/_32] text-[0] leading-[0]"/>
                </div>
                <div className="text-white">
                    <h3 className="text-gray-500">Our services</h3>
                    <div><a href="">Retail</a></div>
                    <div><a href="">Logistics</a></div>
                    <div><a href="">Robotics</a></div>
                    <div><a href="">Infrastructure</a></div>
                    <div><a href="">AI Studio</a></div>
                </div>
                 <div className="text-white">
                    <h3 className="text-gray-500">Consulting</h3>
                    <div><a href="">Coming soon</a></div>
                    
                </div>
                 <div className="text-white">
                    <h3 className="text-gray-500">Company</h3>
                    <div><a href="">Careers</a></div>
                    <div><a href="">Our values</a></div>
                    <div><a href="">About us</a></div>
                    <div><a href="">Blog</a></div>
                </div>
       </div>
       <div className="flex justify-between">
         <div className="w-[fit-content] max-w-[fit-content] m-[2rem] px-[2rem] py-[0.8rem] bg-[rgba(131,23,23,0.3)] border-[1px]  border-[rgba(0,0,0,0.05)] backdrop-filter backdrop-blur-[1.6rem] rounded-[1.6rem] text-center flex-grow text-[15px] leading-[30px] box-border text-[white] cursor-pointer">
                    <button className="sursor-pointer">
                        <img src="./imagev/orig2.svg" alt="" className=" cursor-pointer opacity-100 [transition:opacity_linear_.25s]  top-[0] right-[0] [aspect-ratio:auto_183_/_32] text-[0] leading-[0] w-[2.4rem] h-[2.4rem] relative mr-[0.8rem] bg-contain bg-center pointer-events-none inline-block"/>
                       <select id="choix" name="choix">
                          <option value="option1">(EN)</option>
                          <option value="option2" className="text-black">(FR)</option>
                        </select>
                    </button>
                </div>
                <div className="text-white">
                    <h3 className="py-[20px] text-gray-500">Follow us</h3>
                    <ul className="flex">
                        <il className="px-[10px]"><a href=""><img src="./imagev/orig3.svg" alt="" /></a></il>
                        <il className="px-[10px]"><a href=""><img src="./imagev/orig4.svg" alt="" /></a></il>
                        <il className="px-[10px]"><a href=""><img src="./imagev/orig5.svg" alt="" /></a></il>
                        <il className="px-[10px]"><a href=""><img src="./imagev/im4.webp" alt="" className=" w-[3.3rem] h-[3.3rem] relative mr-[1.8rem]"/></a></il>
                    </ul>
                </div>
                <div>
                    <p className='mb-[15px] block text-white'>© 2025 Yango Tech.</p>
                    <p className='mb-[15px] block text-white'>Privacy Policy.</p>
                    <p className='mb-[15px] block text-white'>Cookies Policy.</p>
                </div>

       </div>

        </section>
    )
}

export default Footer;