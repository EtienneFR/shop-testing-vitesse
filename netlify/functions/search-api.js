/* eslint-disable @typescript-eslint/no-var-requires */
const { URL } = require('url')
const fetch = require('node-fetch')

exports.handler = async(event, context) => {
  const query = event.queryStringParameters.query
  const api = new URL(`https://api.unsplash.com/search/photos?&orientation=landscape&${new URLSearchParams({
    query: `${query}`,
  })}`)

  return fetch(api, { headers: { Authorization: process.env.TOKEN } })
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: JSON.stringify(data.results.map(product => ({
        description: product.alt_description,
        small: product.urls.small,
        raw: product.urls.raw,
      }))),
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }))
}
