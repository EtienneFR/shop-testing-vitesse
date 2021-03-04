const { URL } = require('url');
const fetch = require('node-fetch');

exports.handler = async(event, context) => {
  const api = new URL('https://api.unsplash.com/search/photos?&orientation=landscape&query=products');

  return fetch(api, { headers: { Authorization: process.env.TOKEN } })
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      products: JSON.stringify(data.results.map(product => ({
        description: product.alt_description,
        url: product.urls.raw,
      }))),
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }))
};