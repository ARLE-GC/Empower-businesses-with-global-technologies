import React from "react";

const Blog = () => {
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
             <div className="px-[100px] text-left block">
                 <img src="./imagev/cart1.webp" alt="" className="relative overflow-hidden h-full text-[0] rounded-[1.6rem]"/>
             </div>
             <div className="px-[150px] block">
                 <div >
                     
                     <h2 className="font-extrabold text-7xl">30+</h2>
                 </div>
                 <p className="py-6">Countries</p>

                 <div className="px-[7px]  block">
                 <div >
                    
                     <h2 className="font-extrabold text-7xl">100M+</h2>
                 </div>
                 <p className="py-6">users<br/></p>
             </div>
             </div>
             <div className="px-[7px]  block">
                 <div >
                    
                     <h2 className="font-extrabold text-7xl">$3B+</h2>
                 </div>
                 <p className="py-6">GMV<br/></p>

                 <div className="px-[7px]  block">
                 <div >
                    
                     <h2 className="font-extrabold text-7xl">1M+</h2>
                 </div>
                 <p className="py-6">daily orders<br/></p>
             </div>
             </div>
             
         </div>
       </div>
         <div className="justify-center">
            <button 
                className=" justify-center bg-red-500 cursor-pointer px-[150px] py-[15px] rounded-[10px] space-x-8 flex flex-col text-center items-center border-[1px] border-[solid] font-bold text-white font-serif" 
                onClick={() => console.log('click')} >
                    Talk to an Expert
                </button>
         </div>
       

        </section>
        
        
    )
}

export default Blog;