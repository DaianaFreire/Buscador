import axios from "axios";

// 44079002/json/
// 26255155/json/
// 26030003/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
});

export default api;
