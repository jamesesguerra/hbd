import axios from "axios";
import type { DateRequest } from "~/types";

const BASE_URL = "https://movie-app-server-production-42c3.up.railway.app/email";

const send = (date: DateRequest) => {
    const request = axios.post(BASE_URL, date);
    return request.then(response => response.data);
}

export default { send };