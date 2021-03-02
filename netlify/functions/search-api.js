const { URL } = require('url');
const fetch = require('node-fetch');

exports.handler = async() => {
  const api = new URL('https://api.unsplash.com/search/photos?&orientation=landscape&query=products');

  return fetch(api, { headers: { Authorization: process.env.TOKEN } })
    .then(res => res.json())
    .then((json) => {
      console.log(json);
    })
};