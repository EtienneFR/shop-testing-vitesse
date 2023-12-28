
  // This file was automatically generated. Edits will be overwritten

  export interface Typegen0 {
        '@@xstate/typegen': true;
        internalEvents: {
          "done.invoke.getImage": { type: "done.invoke.getImage"; data: unknown; __tip: "See the XState TS docs to learn how to strongly type this." };
"error.platform.getImage": { type: "error.platform.getImage"; data: unknown };
"xstate.after(500)#search.debouncing": { type: "xstate.after(500)#search.debouncing" };
"xstate.init": { type: "xstate.init" };
        };
        invokeSrcNameMap: {
          "fetchImages": "done.invoke.getImage";
        };
        missingImplementations: {
          actions: "assignEmptySearchQuery" | "assignImages" | "assignSearchQuery";
          delays: never;
          guards: never;
          services: "fetchImages";
        };
        eventsCausingActions: {
          "assignEmptySearchQuery": "MODIFY_QUERY";
"assignImages": "RECEIVED_IMAGES";
"assignSearchQuery": "MODIFY_QUERY";
        };
        eventsCausingDelays: {
          
        };
        eventsCausingGuards: {
          
        };
        eventsCausingServices: {
          "fetchImages": "xstate.after(500)#search.debouncing";
        };
        matchesStates: "debouncing" | "erroredData" | "fetchedData" | "fetchingData" | "waiting";
        tags: never;
      }
  