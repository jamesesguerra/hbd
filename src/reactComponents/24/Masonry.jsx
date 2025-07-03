import { useState, useEffect } from "react";
import messages from "~/data/2025/messages";
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
import kyogre2 from "../../assets/kyogre2.png";
import minccino from "../../assets/minccino.png";
import { TextGenerateEffect } from "./TextGenerateEffect";
import { sendSOS } from "./SOSService";

const pokemonDictionary = {
  cubone: cubone,
  gengar: gengar,
  oshawott: oshawott,
  psyduck: psyduck,
  flareon: flareon,
  maushold: maushold,
  mew: mew,
  munchlax: munchlax,
  piplup: piplup,
  jiggly: jiggly,
  kyogre: kyogre,
  kyogre2: kyogre2,
  minccino: minccino,
};

const Masonry = () => {
  const [message, setMessage] = useState("");
  const [location, setLocation] = useState(null);
  const [battery, setBattery] = useState("Unknown");
  const [ip, setIp] = useState("Unknown");

  useEffect(() => {
    navigator.getBattery?.().then((batt) => {
      setBattery(`${Math.round(batt.level * 100)}%`);
    });

    fetch("https://api.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => setIp(data.ip))
      .catch(() => setIp("Unavailable"));

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      },
      (err) => {
        console.error("Geolocation error:", err);
      }
    );
  }, []);

  const setMessageAndEmergency = (index, message) => {
    if (index === 2) {
      const message = {
        message: `SOS Button Clicked: https://www.google.com/maps?q=${location.latitude},${location.longitude},  ${battery}, ${ip}`,
        location: location
          ? `Lat: ${location.latitude}, Lng: ${location.longitude}`
          : "Location not available",
        time: new Date().toLocaleString(),
      };

      sendSOS(message);
    }

    setMessage(message.message);
  };

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div className="grid gap-4">
        {messages.slice(0, 3).map((message, index) => (
          <div
            key={index}
            className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
            onClick={() => setMessage(message.message)}
            data-modal-target="message-modal"
            data-modal-toggle="message-modal"
          >
            <img
              className="block h-full w-full rounded-lg object-cover"
              src={pokemonDictionary[message.pokemon]?.src}
              alt="Card"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 px-4 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="font-chewy">{message.emotion}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-4">
        {messages.slice(3, 6).map((message, index) => (
          <div
            key={index}
            className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
            onClick={() => setMessage(message.message)}
            data-modal-target="message-modal"
            data-modal-toggle="message-modal"
          >
            <img
              className="block h-full w-full rounded-lg object-cover"
              src={pokemonDictionary[message.pokemon]?.src}
              alt="Card"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 px-4 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="font-chewy">{message.emotion}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-4">
        {messages.slice(6, 9).map((message, index) => (
          <div
            key={index}
            className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
            onClick={() => setMessage(message.message)}
            data-modal-target="message-modal"
            data-modal-toggle="message-modal"
          >
            <img
              className="block h-full w-full rounded-lg object-cover"
              src={pokemonDictionary[message.pokemon]?.src}
              alt="Card"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 px-4 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="font-chewy">{message.emotion}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-4">
        {messages.slice(9, 12).map((message, index) => (
          <div
            key={index}
            className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
            onClick={() => setMessageAndEmergency(index, message)}
            data-modal-target="message-modal"
            data-modal-toggle="message-modal"
          >
            <img
              className="block h-full w-full rounded-lg object-cover"
              src={pokemonDictionary[message.pokemon]?.src}
              alt="Card"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 px-4 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="font-chewy">{message.emotion}</span>
            </div>
          </div>
        ))}
      </div>

      <div
        id="message-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0"
      >
        <div className="relative max-h-full w-full max-w-2xl p-4">
          <div className="relative rounded-lg bg-white shadow-sm">
            <div className="flex items-center justify-between rounded-t border-b border-gray-200 p-4 md:p-5">
              <button
                type="button"
                className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-gray-400 text-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="message-modal"
              >
                <svg
                  className="h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="space-y-4 p-4 md:p-5">
              <TextGenerateEffect words={message} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Masonry;
