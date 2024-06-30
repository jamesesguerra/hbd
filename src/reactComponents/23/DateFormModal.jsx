import { useState } from "react";

import "../..//styles/styles.css";
import movies from "~/data/movies";
import malls from "~/data/malls";
import restaurants from "~/data/restaurants";
import emailService from "~/services/emailService";


const DateFormModal = ({ setShowReply }) => {
    const movieItems = movies.map(m => <option value={m} key={m}>{m}</option>);
    const mallItems = malls.map(m => <option value={m} key={m}>{m}</option>);
    const restaurantItems = restaurants.map(r => <option value={r} key={r}>{r}</option>);

    const [mall, setMall] = useState("-- pick a mall --");
    const [movie, setMovie] = useState("-- pick a movie --");
    const [restaurant, setRestaurant] = useState("-- pick a restaurant --");
    const [request, setRequest] = useState("");
    const [disableForm, setDisableForm] = useState(false);

    const handleSubmit = () => {
        setShowReply(true);
        const dateRequest = { mall, movie, restaurant };

        if (disableForm) {
            dateRequest.request = `I want you to decide, but here are my requests: ${request}`;
        } else {
            dateRequest.request = request;
        }

        emailService
            .send(dateRequest)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    const handleChange = (e) => {
        const targetId = e.target.id;

        if (targetId === "mall") {
            setMall(e.target.value);
        } else if (targetId === "movie") {
            setMovie(e.target.value);
        } else if (targetId === "restaurant") {
            setRestaurant(e.target.value);
        } else if (targetId === "request") {
            setRequest(e.target.value);
        }
    }

  return (
    <div id="crud-modal" tabIndex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        <div class="relative p-4 w-full max-w-md max-h-full">
            <div 
                class="relative rounded-lg shadow bg-teal-950"
            >
                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>

                <form class="p-4 md:p-5" onSubmit={handleSubmit}>
                    <div class="grid gap-4 mb-4 grid-cols-2">
                        <div class="col-span-2">
                            <label htmlFor="mall" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">mall</label>
                            <select
                                value={mall}
                                onChange={handleChange}
                                disabled={disableForm}
                                id="mall"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-500 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                <option value="-- pick a mall --" disabled>-- pick a mall --</option>
                                {mallItems}
                            </select>
                        </div>
                        <div class="col-span-2">
                            <label htmlFor="movie" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">movie</label>
                            <select
                                value={movie}
                                onChange={handleChange}
                                disabled={disableForm}
                                id="movie"
                                class="bg-gray-400 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-500 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option selected disabled>-- pick a movie --</option>
                                {movieItems}
                            </select>
                        </div>

                        <div class="col-span-2">
                            <label htmlFor="restaurant" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">restaurant</label>
                            <select
                                value={restaurant}
                                onChange={handleChange}
                                disabled={disableForm}
                                id="restaurant"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-400 dark:border-gray-500 dark:placeholder-gray-400 dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option selected disabled>-- pick a restaurant --</option>
                                {restaurantItems}
                            </select>
                        </div>

                        <div class="col-span-2">
                            <label htmlFor="request" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">requests</label>
                            <textarea
                                onChange={handleChange}
                                id="request"
                                rows="4"
                                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-400 dark:border-gray-500 dark:placeholder-gray-600  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="write any request here if you have any"></textarea>                    
                        </div>

                        <div class="flex items-center mb-4">
                            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={() => setDisableForm(!disableForm)} />
                            <label htmlFor="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">let me decide</label>
                        </div>
                    </div>
                    <button onClick={handleSubmit} data-modal-hide="crud-modal" type="button" class="text-white inline-flex items-center bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-blue-800">
                        Send
                    </button>
                </form>
            </div>
        </div>
    </div> 

  )
}

export default DateFormModal;