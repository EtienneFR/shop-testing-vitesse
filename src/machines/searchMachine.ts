import { assign, createMachine } from 'xstate'

export const searchMachine = createMachine({
  context: {
    data: undefined,
    images: [],
  },
  id: 'search',
  initial: 'waiting',
  states: {
    waiting: {
      on: { MODIFY_QUERY: 'debouncing' },
    },
    debouncing: {
      after: {
        500: { target: 'fetchingData' },
      },
    },
    fetchingData: {
      invoke: {
        id: 'getImage',
        src: 'fetchImages',
        onDone: {
          target: 'fetchedData',
          actions: assign({ data: (_context, event) => event.data }),
        },
        onError: {
          target: 'erroredData',
          actions: assign({ error: (_context, event) => event.data }),
        },
      },
    },
    fetchedData: {
      on: { MODIFY_QUERY: 'debouncing' },
    },
    erroredData: {
      on: { MODIFY_QUERY: 'debouncing' },
    },
  },
})
