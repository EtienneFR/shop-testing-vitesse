const { URL } = require('url');
const fetch = require('node-fetch');
const { promises } = require('fs');

exports.handler = async() => {
  const api = new URL('https://api.unsplash.com/search/photos?&orientation=landscape&query=products');

  const status = (response) => {
    if (response.status >= 200 && response.status < 300)
      return Promise.resolve(response)

    return Promise.reject(new Error(response.statusText))
  }

  const json = response => response.json()

  fetch(api, { headers: { Authorization: process.env.TOKEN } })
    .then(status)
    .then(json)
    .then((data) => {
      console.log('Request succeeded with JSON response', data)
    })
    .catch((error) => {
      console.log('Request failed', error)
    })
};