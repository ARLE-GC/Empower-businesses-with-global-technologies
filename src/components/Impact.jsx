import React from "react";

const Impact = () => {
    return (
        <section className="pl-[3.2rem] pr-[3.2rem] py-[3.2rem] block"><hr className="text-red-500 "/>
        <div className="flex justify-between">
            <div>
                <h2 className="text-4xl font-extrabold font-stretch-50%">Global presence</h2>
            </div>
            <p className=" text-4xl">
               Like Yango group changes<br/>
                everyday lives, Yango Tech<br/>
                 transforms with scalable, proven<br/>
                  AI solutions</p>
        </div>
       <div className="pl-[3.2rem] pr-[3.2rem] py-[3.2rem] block ">
         <div className="flex  relative ">
             <div className="px-[10px] text-left block">
                 <img src="./imagev/im1.jpg" alt="" className="relative overflow-hidden h-100 w-100 rounded-[1.6rem]"/>
                 <div>07.14.25</div>
                 <p className="font-serif text-2xl">Yango Pakistan expands its<br/>
                  portfolio with solutions for<br/>
                   businesses Yango Tech and<br/> 
                   partners with DealCart</p>
             </div>
             <div className="px-[100px] text-left block">
                 <img src="./imagev/im2.jpg" alt="" className="relative overflow-hidden h-100 w-100 rounded-[1.6rem]"/>
                 <div>05.21.25</div>
                 <p className="font-serif text-2xl">
                    Yango Tech and Grand<br/>
                     Hypermarkets Sign Strategic<br/> Partnership at Seamless<br/>
                      Middle East 2025</p>
             </div>
             <div className="px-[10px] text-left block">
                 <img src="./imagev/im3.jpg" alt="" className="relative overflow-hidden h-100 w-100  rounded-[1.6rem]"/>
                 <div>05.06.25</div>
                 <p className="font-serif text-2xl">
                    Yango Tech and Expo City<br/>
                    Dubai Launch Autonomous<br/> 
                    Food Delivery</p>
             </div>
         </div>    
       </div>
        </section>
    )
}

export default Impact;