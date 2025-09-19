import React from "react";


const Header = () => {
    return (
        <header className="bg-transparent duration-200 [transition-property:background-color,_color,_box-shadow] block">
            <div className="px-[3.2rem] py-[0] absolute z-10 flex flex-row justify-between box-border w-full mx-[auto] my-[0] text-[15px]">
                <div className="flex items-center">
                    <img src="./imagev/orig.svg" alt="" className="opacity-100 [transition:opacity_linear_.25s]  top-[0] right-[0] w-full h-full [aspect-ratio:auto_183_/_32] text-[0] leading-[0]"/>
                </div>
                <div className="w-[fit-content] max-w-[fit-content] m-[2rem] px-[2rem] py-[0.8rem] bg-[rgba(0,_0,_0,_0.3)] border-[1px]  border-[rgba(0,0,0,0.05)] backdrop-filter backdrop-blur-[1.6rem] rounded-[1.6rem] text-center flex-grow text-[15px] leading-[30px] box-border text-[white]">
                    <ul className="m-0 p-0 [list-style:none] block">
                        <li className="!mr-16 inline-block relative m-0">
                            <a href="" className="uppercase  text-[1rem] font-semibold leading-[1.6rem] tracking-wider text-[white] inline-block box-border w-full whitespace-nowrap no-underline cursor-pointer outline-[0]">Solutions</a>
                        </li>
                        <li className="!mr-16 inline-block relative m-0">
                            <a href=""  className="uppercase  text-[1rem] font-semibold leading-[1.6rem] tracking-wider text-[white] inline-block box-border w-full whitespace-nowrap no-underline cursor-pointer outline-[0]">about us</a>
                        </li>
                        <li className="!mr-16 inline-block relative m-0">
                            <a href=""  className="uppercase  text-[1rem] font-semibold leading-[1.6rem] tracking-wider text-[white] inline-block box-border w-full whitespace-nowrap no-underline cursor-pointer outline-[0]">news</a>
                        </li>
                        <li className="!mr-1 inline-block relative m-0">
                            <a href=""  className="uppercase  text-[1rem] font-semibold leading-[1.6rem] tracking-wider text-[white] inline-block box-border w-full whitespace-nowrap no-underline cursor-pointer outline-[0]">events</a>
                        </li>
                    </ul>
                </div>
                <div className="w-[fit-content] max-w-[fit-content] m-[2rem] px-[2rem] py-[0.8rem] bg-[rgba(131,23,23,0.3)] border-[1px]  border-[rgba(0,0,0,0.05)] backdrop-filter backdrop-blur-[1.6rem] rounded-[1.6rem] text-center flex-grow text-[15px] leading-[30px] box-border text-[white] cursor-pointer">
                    <button className="sursor-pointer">
                        <img src="./imagev/orig2.svg" alt="" className=" cursor-pointer opacity-100 [transition:opacity_linear_.25s]  top-[0] right-[0] [aspect-ratio:auto_183_/_32] text-[0] leading-[0] w-[2.4rem] h-[2.4rem] relative mr-[0.8rem] bg-contain bg-center pointer-events-none inline-block"/>
                       <select id="choix" name="choix">
                          <option value="option1">(EN)</option>
                          <option value="option2" className="text-black">(FR)</option>
                        </select>
                    </button>
                </div>
            </div>
        </header>
    )

}

export default Header;