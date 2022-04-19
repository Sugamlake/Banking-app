import axios from "axios";

const httpUrlApi = "http://localhost:1337";

// GET /accounts
export const getAllAccounts = () => {
    return axios
        .get(`${httpUrlApi}/accounts`)
        .then((response) => response.data);
};

// POST /accounts
export const addAccount = (newUser) => {
    return axios
        .post(`${httpUrlApi}/accounts`, newUser)
        .then((response) => {console.log(response)});
};

// PUT /accounts
export const editAccountById = (id, accountEdited) => {
    return axios
        .put(`${httpUrlApi}/accounts/${id}`, accountEdited)
        .then((response) => response.data);
};