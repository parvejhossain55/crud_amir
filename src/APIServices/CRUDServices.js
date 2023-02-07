// const axios = require('axios');
import axios from "axios";

//Create
export function Create(postBody) {
    let URL = "/api/v1/createProduct";

    return axios
        .post(URL, postBody)
        .then((res) => {
            // console.log(res);
            if (res.status === 201) {
                return true;
            } else {
                return false;
            }
        })
        .catch((err) => {
            console.log(err);
            return false;
        });
}

// Read
export function Read() {
    let URL = "/api/v1/readProduct";
    return axios
        .get(URL)
        .then((res) => {
            if (res.status === 200) {
                return res.data["data"];
            } else {
                return false;
            }
        })
        .catch((err) => {
            console.log(err);
            return false;
        });
}

// ReadById
export function ReadById(id) {
    let URL = "/api/v1/readProductByID/" + id;
    return axios
        .get(URL)
        .then((res) => {
            if (res.status === 200) {
                return res.data["data"];
            } else {
                return false;
            }
        })
        .catch((err) => {
            console.log(err);
            return false;
        });
}

// Update
export function Update(id, postBody) {
    let URL = "/api/v1/updateProduct/" + id;
    return axios
        .post(URL, postBody)
        .then((res) => {
            if (res.status === 200) {
                return true;
            } else {
                return false;
            }
        })
        .catch((err) => {
            console.log("Update Error API------------>", err);
            return false;
        });
}

// Delete
export function Delete(id) {
    let URL = "/api/v1/deleteProduct/" + id;
    return axios
        .get(URL)
        .then((res) => {
            if (res.status === 200) {
                return true;
            } else {
                return false;
            }
        })
        .catch((err) => {
            console.log("Delete Error API------------>", err);
            return false;
        });
}
