import React from "react";

const Connexion = () => {
    return (
        <section className="pl-[3.2rem] pr-[3.2rem] py-[3.2rem] block"><hr className="text-red-500 "/>
        <div className="flex justify-between">
            <div>
                <h2 className="text-4xl font-extrabold font-stretch-50%">let’s get in touch</h2>
            </div>
            <p className=" text-4xl">
               We will show what’s possible,<br/>
                practical, and impactful for your<br/>
                 business</p>
        </div>
        <div className="pl-[3.2rem] pr-[3.2rem] py-[3.2rem] block space-x-8">
        <form action="" method="POST">
            <div className="flex">
                <div>
                <input  type="text" id="first-name" name="first-name" placeholder="First name" required className=" cursor-pointer px-[150px] py-[15px] rounded-[10px]  border-[1px] border-[solid] font-bold text-gray-400 bg-gray-300 font-serif" />

            </div>
            <div className="px-[50px]">
                <input  type="text" id="last-name" name="last-name" placeholder="Last name" required className=" cursor-pointer px-[150px] py-[15px] rounded-[10px]  border-[1px] border-[solid] font-bold text-gray-400 bg-gray-300 font-serif"/>

            </div>
            </div>
            <div className="flex py-[25px]">
                <div>
                <input  type="email" id="email" name="email" placeholder="Email" required className=" cursor-pointer px-[150px] py-[15px] rounded-[10px]  border-[1px] border-[solid] font-bold text-gray-400 bg-gray-300 font-serif"/>

            </div>
            <div className="px-[50px]">
                <input c type="tel" id="phone" name="phone" placeholder="Phone number" required className=" cursor-pointer px-[150px] py-[15px] rounded-[10px]  border-[1px] border-[solid] font-bold text-gray-400 bg-gray-300 font-serif"/>

            </div>
            </div>
           <div className="flex py-[25px]">
             <div>
                            <input class="form-field" type="text" id="company" name="company" placeholder="Company name" className=" cursor-pointer px-[150px] py-[15px] rounded-[10px]  border-[1px] border-[solid] font-bold text-gray-400 bg-gray-300 font-serif"/>

            </div>
            <div className="px-[50px]">
                <input class="form-field" type="text" id="company" name="company" placeholder="Company name" className=" cursor-pointer px-[150px] py-[15px] rounded-[10px]  border-[1px] border-[solid] font-bold text-gray-400 bg-gray-300 font-serif"/>
            </div>
           </div>
            <div className="flex py-[25px]">
                <div>
                    <input class="form-field" type="text" id="job-title" name="job-title" placeholder="Job title" className=" cursor-pointer px-[150px] py-[15px] rounded-[10px]  border-[1px] border-[solid] font-bold text-gray-400 bg-gray-300 font-serif"/>

            </div>
            <div className="px-[50px]">
                <input class="form-field" type="text" id="country" name="country" placeholder="Country / Region" className=" cursor-pointer px-[150px] py-[15px] rounded-[10px]  border-[1px] border-[solid] font-bold text-gray-400 bg-gray-300 font-serif"/>

            </div>
            </div>
            <div>
                <input class="form-field" type="text" id="how-hear" name="how-hear" placeholder="How did you hear about us?" className=" cursor-pointer px-[420px] py-[15px] rounded-[10px]  border-[1px] border-[solid] font-bold text-gray-400 bg-gray-300 font-serif"/>

            </div>
            <div className="py-[50px]">
                <button type="submit" className=" cursor-pointer px-[500px] py-[15px] rounded-[10px]  border-[1px] border-[solid] font-bold text-white bg-red-500 font-serif">Send</button>

            </div>
        </form>
        </div>
        </section>
    )
}

export default Connexion;