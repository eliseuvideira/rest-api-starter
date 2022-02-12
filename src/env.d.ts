declare namespace NodeJS {
  export interface ProcessEnv {
    // Environment
    NODE_ENV: "development" | "test" | "production" | "staging";
    PORT: string;

    // Api
    API_NAME: string;
    API_TOKEN: string;

    // Docker
    DOCKER_IMAGE: string;

    // Localization
    LANG: string;
    TZ?: string;
  }
}
