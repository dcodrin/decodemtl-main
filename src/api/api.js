import axios from 'axios';

export const subscribe = (email, interests) => {
    return new Promise((resolve, reject) => {
        axios.post('https://decode-main.herokuapp.com/api/newsletter', {email, interests})
            .then(({data: response}) => {
                if (response.status === 'success') {
                    resolve();
                } else {
                    reject();
                }
            })
            .catch(err => {
                reject(err);
            })
    })
};

export const contact = (userData) => {
    return new Promise((resolve, reject) => {
        axios.post('https://decode-main.herokuapp.com/api/contact', userData)
            .then(({data: response}) => {
                if (response.status === 'success') {
                    resolve();
                } else {
                    reject();
                }
            })
            .catch(err => {
                reject();
            });
    })
};

export const visit = (email, optin) => {
    return new Promise((resolve, reject) => {
        axios.post('https://decode-main.herokuapp.com/api/visit', {email, optin})
            .then(({data: response}) => {
                if (response.status === 'success') {
                    resolve();
                } else {
                    reject();
                }
            })
            .catch(err => {
                reject();
            })
    })
};