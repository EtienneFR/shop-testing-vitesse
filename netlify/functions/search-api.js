/* eslint-disable @typescript-eslint/no-var-requires */
import { URL } from 'url';
import fetch from 'node-fetch';
import urlcat from "urlcat";

const handler = async (event, context) => {
  const query = event.queryStringParameters.query
  const API_URL = 'https://neutrinoapi.net/'
  const requestUrl = urlcat(API_URL, 'bad-word-filter', { content: query })

  const isBad = await fetch(requestUrl, { headers: { 'api-key': process.env.APIKEY, 'user-id': process.env.USERID } })
    .then(response => response.json())
    .then(data => data['is-bad'])
  const isDisallowedQuery = isBad === true
  const isAllowedQuery = isDisallowedQuery === false

  if (isAllowedQuery === true) {
    const API_URL = 'https://api.unsplash.com/'
    const requestUrl = urlcat(API_URL, 'search/photos', { orientation: 'landscape', query })

    return fetch(requestUrl, { headers: { Authorization: process.env.TOKEN } })
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
};

export { handler };
