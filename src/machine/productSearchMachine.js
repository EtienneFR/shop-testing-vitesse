import { Machine, assign } from 'xstate'

const url = 'https://api.unsplash.com/search/photos?query=home'

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
    },
  )
