import { createModel } from 'xstate/lib/model'

export interface Image {
  description: string
  small: string
  raw: string
}

const searchModel = createModel({
  searchQuery: '',
  images: [] as Image[],
}, {
  events: {
    MODIFY_QUERY: (searchQuery: string) => ({ searchQuery }),

    RECEIVED_IMAGES: (images: Image[]) => ({ images }),
    ERRORED_FETCHING_IMAGES: () => ({}),
  },
})

export const searchMachine = searchModel.createMachine({
  id: 'search',

  initial: 'waiting',

  states: {
    waiting: {},

    debouncing: {
      after: {
        500: { target: 'fetchingData' },
      },
    },

    fetchingData: {
      invoke: {
        id: 'getImage',

        src: 'fetchImages',
      },

      on: {
        RECEIVED_IMAGES: {
          target: 'fetchedData',

          actions: searchModel.assign({
            images: (_context, event) => event.images,
          }),
        },

        ERRORED_FETCHING_IMAGES: {
          target: 'erroredData',
        },
      },
    },

    fetchedData: {},

    erroredData: {},
  },
  on: {
    MODIFY_QUERY: [
      {
        cond: (_context, event) => event.searchQuery === '',

        target: 'waiting',

        actions: searchModel.assign({
          searchQuery: '',
        }),
      },

      {
        target: 'debouncing',

        actions: searchModel.assign({
          searchQuery: (_context, event) => event.searchQuery,
        }),
      },
    ],
  },
})
