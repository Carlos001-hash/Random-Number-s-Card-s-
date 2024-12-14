"use client"

import React, { useState } from "react";

export default function MyApp() {
    const [ pont, setPont ] = useState(false);
    const [inputValue, setIputValue] = useState(0);
    const [show, setShow] = useState(false)

    
    const handleClickMore = () => {
     if (inputValue < 24) {
        setIputValue(inputValue +1)
     } else {
        miniMax = "Excedeu o numero maximo de cartas!";
     }
    };

    const handleClickMenus = () => {
        if (inputValue > 0) {
        setIputValue(inputValue -1)
     } if (inputValue == 1) {
        miniMax = "Excedeu o numero minimo de cartas!";
     }
    };
    let miniMax = "";

    

    const handleShow = () => {
        setShow(true)
    }
    let div = [];
    

    if (show == false) {
        for (let i = 0; i < inputValue; i++) {
            let t = "?";
            div.push(t)
        }
   } else {
        for (let i = 0; i < inputValue; i++) {
            let t = Math.floor(Math.random() * 100) + 1;
            div.push(t)
        }
   }

    console.log(div)
    
    
    

    return (
            <body>
                <div className="flex flex-col  items-center w-full min-h-screen bg-gray-300 ">
                    <div className="w-full h-1/2 flex flex-col gap-6 items-center p-2">
                        {pont ? (
                            <div className=" animate-bounce text-6xl font-semibold bg-orange-500 rounded-lg">{inputValue}</div>
                        ): (
                            <div className=" text-6xl text-gray-300 font-semibold rounded-lg">Hi!</div>
                        )}
                        <div className="w-auto mx-auto flex flex-row items-center gap-9">
                            {pont ? (
                                <div className="w-auto mx-auto flex flex-row items-center gap-9">
                                    <button onClick={handleClickMore} className=" overflow-hidden size-[75px] bg-gray-200 flex items-center justify-center text-7xl  font-semibold border-2 border-black rounded-sm"><p className=" animate-bounce">+</p></button>
                                    <button onClick={handleClickMenus} className="overflow-hidden size-[75px] bg-gray-200 flex items-center justify-center text-7xl  font-semibold border-2 border-black rounded-2xl"><p className=" animate-bounce mb-2.5">-</p></button>
                                </div>
                            ): (
                                <div className="w-auto mx-auto flex flex-row items-center gap-9">
                                    <button onClick={handleClickMore} className="size-[75px] bg-gray-200 flex items-center justify-center text-7xl  font-semibold border-2 border-black rounded-sm"><p className=" animate-pulse">+</p></button>
                                    <button onClick={handleClickMenus} className="size-[75px] bg-gray-200 flex items-center justify-center text-7xl  font-semibold border-2 border-black rounded-2xl"><p className=" animate-pulse mb-2.5">-</p></button>
                                </div>
                            )}
                            
                    
                        </div>
                        {pont ? (
                            <div className="flex flex-col items-center">
                                <button onClick={() => setPont(false)} className=" w-52 bg-red-600 text-xl font-semibold rounded-t-3xl hover:drop-shadow-md hover:bg-red-500  p-5 border-t-2 border-x-2 border-black">Mostrar</button>
                                {show ? (
                                    <button onClick={() => setShow(false)} className=" w-52 bg-red-600 text-xl font-semibold rounded-b-3xl hover:drop-shadow-md hover:bg-red-600  p-3 border-x-2 border-b-2 border-black">Parar</button>
                                ): (
                                    <button onClick={() => setShow(true)} className=" w-52 bg-red-600 text-xl font-semibold rounded-b-3xl hover:drop-shadow-md hover:bg-red-500  p-3 border-x-2 border-b-2 border-black">Sortear</button>
                                )}
                            </div>
                            
                        ): (
                            <button onClick={() => setPont(true)} className=" text-xl font-semibold w-52 bg-red-600 rounded-lg hover:drop-shadow-md hover:bg-red-500  p-5 border-2 border-black">Mostrar</button>
                        )}
                    </div>
                    
                    <div className="relative w-full h-auto  flex flex-row flex-wrap justify-around gap-5 pt-5">
                        {pont ||  (
                            <div className="absolute overflow-hidden top-8 bottom-0 w-ful h-72 flex items-center justify-center text-gray-400 text-[340px] leading-3 font-semibold">{inputValue}</div>
                        )}
                        {pont && 
                        <div className=" w-full h-auto flex flex-row flex-wrap justify-around gap-5 z-10">
                            {div.map(miv => (
                                <div className=" w-56 h-72 bg-orange-500 text-center font-bold text-xl rounded-3xl border-[7px]">
                                    <div className="w-full h-auto p-5">
                                        <input type="text" placeholder="Text..." className="w-full h-auto p-2 text-gray-600 text-3xl rounded-3xl text-center outline-none" />
                                    </div>
                                    <div className="relative w-full h-auto flex flex-row justify-center mt-4">
                                        <div className="absolute bottom-0 left-0 w-14 h-16 bg-gray-300 rounded-r-full -ml-2"></div>
                                        <div key={miv} className=" w-28 h-28 bg-gray-300 flex justify-center items-center text-gray-600 font-bold text-5xl rounded-full p-5"><p>{miv}</p></div>
                                        <div className="absolute top-0 right-[0] w-14 h-16  bg-gray-300 rounded-l-full -mr-2"></div>
                                    </div>
                                    
                                </div>
                            ))}
                        </div>
                            
                        }
                    </div>
                    
                </div>
                
                
            </body>
    
    )
}