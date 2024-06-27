import axios from "axios";
import type { DateRequest } from "~/types";

const BASE_URL = "http://localhost:3001/email";

// https://movie-app-server-production-42c3.up.railway.app/


const send = (date: DateRequest) => {
    const request = axios.post(BASE_URL, date);
    return request.then(response => response.data);
}

export default { send };