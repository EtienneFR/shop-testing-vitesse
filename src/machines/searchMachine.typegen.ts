// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  '@@xstate/typegen': true
  eventsCausingActions: {
    assignEmptySearchQuery: 'MODIFY_QUERY'
    assignSearchQuery: 'MODIFY_QUERY'
    assignImages: 'RECEIVED_IMAGES'
  }
  internalEvents: {
    'xstate.after(500)#search.debouncing': {
      type: 'xstate.after(500)#search.debouncing'
    }
    'xstate.init': { type: 'xstate.init' }
    'done.invoke.getImage': {
      type: 'done.invoke.getImage'
      data: unknown
      __tip: 'See the XState TS docs to learn how to strongly type this.'
    }
    'error.platform.getImage': {
      type: 'error.platform.getImage'
      data: unknown
    }
  }
  invokeSrcNameMap: {
    fetchImages: 'done.invoke.getImage'
  }
  missingImplementations: {
    actions: never
    services: 'fetchImages'
    guards: never
    delays: never
  }
  eventsCausingServices: {
    fetchImages: 'xstate.after(500)#search.debouncing'
  }
  eventsCausingGuards: {
    isSearchQueryEmpty: 'MODIFY_QUERY'
  }
  eventsCausingDelays: {}
  matchesStates:
  | 'waiting'
  | 'debouncing'
  | 'fetchingData'
  | 'fetchedData'
  | 'erroredData'
  tags: never
}
