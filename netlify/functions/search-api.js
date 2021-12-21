/* eslint-disable @typescript-eslint/no-var-requires */
const { URL } = require('url')
const fetch = require('node-fetch')

exports.handler = async(event, context) => {
  const query = event.queryStringParameters.query
  const isAllowedApi = new URL(`https://neutrinoapi.net/bad-word-filter?${new URLSearchParams({
    content: `${query}`,
  })}`)

  const searchApi = new URL(`https://api.unsplash.com/search/photos?&orientation=landscape&${new URLSearchParams({
    query: `${query}`,
  })}`)

  const isBad = await fetch(isAllowedApi, { headers: { 'api-key': process.env.APIKEY, 'user-id': process.env.USERID } })
    .then(response => response.json())
    .then(data => data['is-bad'])
  const isDisallowedQuery = isBad === true
  const isAllowedQuery = isDisallowedQuery === false

  if (isAllowedQuery === true) {
    return fetch(searchApi, { headers: { Authorization: process.env.TOKEN } })
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
  else {
    return {
      statusCode: 422,
      body: 'error',
    }
  }
}
