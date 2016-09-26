import axios from 'axios';

export const subscribe = (email, interests) => {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:3100/newsletter', {email, interests})
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
        axios.post('http://localhost:3100/contact', userData)
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

export const visit = (email) => {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:3100/visit', {email})
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