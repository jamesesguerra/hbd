import { useState } from "react";

import "../..//styles/styles.css";
import avatar from "../../assets/avatar.jpg";
import DateFormModal from "./DateFormModal";
import { fireConfetti } from "~/helpers/confetti-service";


const DateChatBubble = () => {
    const currentDateTime = new Date();
    const timeString = currentDateTime.toLocaleTimeString();

    const [showReply, setShowReply] = useState(false);

  return (
    <div class="mb-10">
         <h2 class="text-3xl font-bold mb-3">our spoiled date</h2>
         <p class="mb-10">i alw wana plan our dates myself but i wanted to ask u pa ren here to be extra and also so that i can ask u what wanna do for your bday in a creative way i guess😀</p>

        <div class="flex items-start gap-2.5">
            <img class="w-12 h-12 rounded-full object-cover" src={avatar.src} alt="My avatar" />
            <div
                class="flex flex-col w-full max-w-[480px] leading-1.5 p-4 border-gray-20 rounded-e-xl rounded-es-x bg-teal-950"
            >
                <div class="flex items-center space-x-2 rtl:space-x-reverse">
                    <span
                        class="text-sm font-semibold text-gray-900 dark:text-white"
                        onClick={fireConfetti} data-modal-target="clue-3" data-modal-toggle="clue-3"
                    >
                        bear
                    </span>
                    <span class="text-sm font-normal text-gray-500 dark:text-gray-400">{timeString}</span>
                </div>
                <p class="text-sm font-normal py-2.5 text-gray-900 dark:text-white">hi baby, can i take u out on ur bday? jus click d 3 dots on d ryt w ur ans😀</p>
                <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
            </div>
            {!showReply && (
                <>
                    <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" data-dropdown-placement="bottom-start" class="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-teal-950 dark:hover:bg-teal-900 dark:focus:ring-gray-600" type="button">
                        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                            <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/>
                        </svg>
                    </button>
                    <div id="dropdownDots" class="z-10 hidden divide-y divide-gray-100 rounded-lg shadow w-40 bg-teal-950 dark:divide-gray-600">
                        <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconButton">
                            <li>
                                <a
                                    data-modal-target="crud-modal"
                                    data-modal-toggle="crud-modal"
                                    class="block px-4 py-2 hover:bg-gray-100 hover:cursor-pointer dark:hover:bg-emerald-900 dark:hover:text-white">Yes</a>
                            </li>
                            <li>
                                <a
                                    data-modal-target="crud-modal"
                                    data-modal-toggle="crud-modal"
                                    onMouseEnter={(e) => e.target.textContent = "Yes"}
                                    onMouseLeave={(e) => e.target.textContent = "No"}
                                    class="block px-4 py-2 hover:bg-gray-100 hover:cursor-pointer dark:hover:bg-emerald-900 dark:hover:text-white">No</a>
                            </li>
                        </ul>
                    </div>
                </>
            )}
        </div>
        
        <DateFormModal setShowReply={setShowReply} />

        {showReply && (
            <div class="flex items-start gap-2.5 mt-1 ml-14">
                <div class="flex flex-col w-full max-w-[400px] leading-1.5 p-4 border-gray-200 rounded-e-xl rounded-es-xl bg-teal-950">
                    <div class="flex items-center space-x-2 rtl:space-x-reverse">
                        <span class="text-sm font-semibold text-gray-900 dark:text-white">bear</span>
                        <span class="text-sm font-normal text-gray-500 dark:text-gray-400">{timeString}</span>
                    </div>
                    <p class="text-sm font-normal py-2.5 text-gray-900 dark:text-white">yay, see u baby, i love u</p>
                    <span class="text-sm font-normal text-gray-500 dark:text-gray-400">Delivered</span>
                </div>
            </div>
        )}
    </div>
  )
}

export default DateChatBubble;