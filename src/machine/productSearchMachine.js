import { Machine, assign } from 'xstate'

const invokeFetchData = (query) => {
  const url = `https://api.unsplash.com/search/photos?query=${query}`

  return fetch(url).then(response => response.json())
}

export const createProductSearchMachine = () =>
  Machine(
    {
      id: 'product-search',
      initial: 'loading',
      context: {
        description: null,
        source: null,
      },
      states: {
        loading: {
          invoke: {
            id: 'fetch-product-data',
            src: 'getResults',
            onDone: {
              target: 'loaded',
              actions: assign({
                description: (context, event) => event.results.alt_description.value,
                source: (context, event) => event.results.urls.raw.value,
              }),
            },
            onError: {
              target: 'failure',
            },
          },
        },
        loaded: {
          type: 'final',
        },
        failure: {
          on: {
            RETRY: 'loading',
          },
        },
      },
      services: {
        getDataProduct: (context, event) =>
          invokeFetchData(context.query),
      },
    },
  )
