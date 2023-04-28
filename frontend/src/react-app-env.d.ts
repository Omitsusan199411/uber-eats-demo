/// <reference types="react-scripts" />

// # TODO
declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_FACEBOOK_OAUTH_APP_ID: string;
    readonly REACT_APP_GOOGLE_OAUTH_APP_ID: string;
  }
}
