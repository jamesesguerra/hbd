import { useState } from 'react';
import messages from '~/data/2025/messages';
import cubone from "../../assets/pokepic.png";
import gengar from "../../assets/gengar.png";
import psyduck from "../../assets/psyduck.png";
import flareon from "../../assets/flareon.png";
import maushold from "../../assets/maushold.png";
import mew from "../../assets/mew.png";
import munchlax from "../../assets/munchlax.png";
import piplup from "../../assets/piplup.png";
import oshawott from "../../assets/oshawott.png";
import jiggly from "../../assets/jiggly.png";
import kyogre from "../../assets/kyogre.png";
import squirtle from "../../assets/squirtle.png";
import kyogre2 from "../../assets/kyogre2.png";

const pokemonDictionary = {
    "cubone": cubone,
    "gengar": gengar,
    "oshawott": oshawott,
    "psyduck": psyduck,
    "flareon": flareon,
    "maushold": maushold,
    "mew": mew,
    "munchlax": munchlax,
    "piplup": piplup,
    "jiggly": jiggly,
    "kyogre": kyogre,
    "squirtle": squirtle,
    "kyogre2": kyogre2
}

const Masonry = () => {
    const [message, setMessage]= useState('');

  return (
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
       <div className="grid gap-4">
            {messages.slice(0, 3).map((message, index) => (
                <div
                    key={index}
                    className="relative shadow-lg cursor-pointer overflow-hidden rounded-lg group hover:scale-105 transition-transform"
                    onClick={() => setMessage(message.message)}
                    data-modal-target="message-modal"
                    data-modal-toggle="message-modal"
                >
                    <img
                        className="w-full h-full object-cover block rounded-lg"
                        src={pokemonDictionary[message.pokemon]?.src}
                        alt="Card"
                    />

                    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="font-chewy">{message.emotion}</span>
                    </div>
                </div>
            ))}
        </div>

        <div className="grid gap-4">
            {messages.slice(3, 6).map((message, index) => (
                <div
                    key={index}
                    className="relative shadow-lg cursor-pointer overflow-hidden rounded-lg group hover:scale-105 transition-transform"
                    onClick={() => setMessage(message.message)}
                    data-modal-target="message-modal"
                    data-modal-toggle="message-modal"
                >
                    <img
                        className="w-full h-full object-cover block rounded-lg"
                        src={pokemonDictionary[message.pokemon]?.src}
                        alt="Card"
                    />

                    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="font-chewy">{message.emotion}</span>
                    </div>
                </div>
            ))}
        </div>

        <div className="grid gap-4">
            {messages.slice(6, 9).map((message, index) => (
                <div
                    key={index}
                    className="relative shadow-lg cursor-pointer overflow-hidden rounded-lg group hover:scale-105 transition-transform"
                    onClick={() => setMessage(message.message)}
                    data-modal-target="message-modal"
                    data-modal-toggle="message-modal"
                >
                    <img
                        className="w-full h-full object-cover block rounded-lg"
                        src={pokemonDictionary[message.pokemon]?.src}
                        alt="Card"
                    />

                    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="font-chewy">{message.emotion}</span>
                    </div>
                </div>
            ))}
        </div>
        
        <div className="grid gap-4">
            {messages.slice(9, 12).map((message, index) => (
                <div
                    key={index}
                    className="relative shadow-lg cursor-pointer overflow-hidden rounded-lg group hover:scale-105 transition-transform"
                    onClick={() => setMessage(message.message)}
                    data-modal-target="message-modal"
                    data-modal-toggle="message-modal"
                >
                    <img
                        className="w-full h-full object-cover block rounded-lg"
                        src={pokemonDictionary[message.pokemon]?.src}
                        alt="Card"
                    />

                    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="font-chewy">{message.emotion}</span>
                    </div>
                </div>
            ))}
        </div>

        <div id="message-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full max-w-2xl max-h-full">
                <div class="relative bg-white rounded-lg shadow-sm">
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="message-modal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div class="p-4 md:p-5 space-y-4">
                        { message }
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Masonry