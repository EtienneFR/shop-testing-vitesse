import { assign, createMachine } from 'xstate'

export interface Image {
  description: string
  small: string
  raw: string
}

export const searchMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5SzAQwE4GMAWBiAsgPIAiAkgGICaA+gIoCqAogEqUDaADALqKgAOAe1gBLAC7CBAO14gAHogAsAJgA0IAJ6IAHAEYAdAoCcxgOwA2HSYUBWI1oC+9tSgw4CJCjQYt2OnkhBBEXEpGXkEZTVNBEsTPUNrAGYOMy1DXQUdJQcnEBcsbD0IMAAjAQBXSUxhSShcWVhRVFEwPVQAMxb0AAprDg4ASlx8nCLSiqqaqE5-fiExCWkA8IVzPRMTRJtNhUTE6xNDMyjEJQ4lAyUE4yNDEy0tK0dnNAK9drBRHCniZtRcZiMADCjFIADVGMRqKR8ABBADijAAyjMZEEFqFltpDPolEozNYtBw9sZEkpEicYjotOt8dY+hwDnd6QpnnlXqMPl9sD8-rgWMxCICoeRGAAVIEACVIADl4dC4YiUdw0fMQktQOE0ri6USSYYyRSNKcdNY9JYjsotGYFFpElprI5cpIBMV4AERthVcFFmFEABaY7GhCBtmevQAd1QC1q3oxGrkiD2ZgMWl2Dp0NrtCjMRuiOg4Cni5lsDttttMYY5hWKZUq1VjAXR6r9CGTqfT1kztq2ucpZ30yktOn2SWsV1ZuXDXO+tV+TTjLaxCAsFyJOYdab2Zy0lNi8SuFg4DtzjwOVdchRn2Eg89Qi99y50lguz5MePSZyU1JMe+UejOZJ10sGwtCUScXkvPQwHQdABHQW8-gfTFNUQN9XxfK4wPOH9+1NPQzEOMx+gdYldB0J17CAA */
  id: 'search',
  tsTypes: {} as import('./searchMachine.typegen').Typegen0,

  schema: {
    context: {} as {
      searchQuery: string,
      images: Image[]
    },
    events: {} as
      | {
          type: "MODIFY_QUERY";
          searchQuery: string;
        }
      | { 
        type: "RECEIVED_IMAGES";
        images: Image[] 
        }
      | {
        type: "ERRORED_FETCHING_IMAGES"
        }
  },

  context: {
      searchQuery: '',
      images: []
  },

  on: {
    MODIFY_QUERY: [
      {
        guard: 'isSearchQueryEmpty',
        target: 'waiting',
        actions: 'assignEmptySearchQuery',
      },
      {
        target: 'debouncing',
        actions: 'assignSearchQuery',
      },
    ],
  },

  predictableActionArguments: true,

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

          actions: 'assignImages',
        },

        ERRORED_FETCHING_IMAGES: {
          target: 'erroredData',
        },
      },
    },
    fetchedData: {},
    erroredData: {},
  },
  guards: { isSearchQueryEmpty: (_context: any, event: { searchQuery: string }) => event.searchQuery === '' },
  actions: {
    assignEmptySearchQuery: assign({ searchQuery: '' }),
    assignSearchQuery: assign({ searchQuery: (_context, event: { searchQuery: string }) => event.searchQuery }),
    assignImages: assign({ images: (_context, event: { images: Image[] }) => event.images }),
  },
})
