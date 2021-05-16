import axios from "axios";

const ENDPOINT_PATH = "http://localhost:8080/user";

export default {
    register(name, password, country) {
        const user = { name, password, country };
        return axios.post(ENDPOINT_PATH + "/create-user", user);
    },
    login(name, password) {
        const user = { name, password }
        return axios.post("http://localhost:8080/user/login", user);
    }
};