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
import { TextGenerateEffect } from './TextGenerateEffect';

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
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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

        <div id="message-modal" tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative p-4 w-full max-w-2xl max-h-full">
                <div className="relative bg-white rounded-lg shadow-sm">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="message-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5 space-y-4">
                        <TextGenerateEffect words={message} />
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Masonry