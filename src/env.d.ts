declare namespace NodeJS {
  export interface ProcessEnv {
    // string(development | test | production | staging), example: development
    NODE_ENV: "development" | "test" | "production" | "staging";

    // number, example: 50001
    PORT: string;

    // string, example: rest-api-starter
    API_NAME: string;

    // string, example: q1M7dW9XHBwtPxvKMzlmrw56Bn7MCg58Kjfb
    API_TOKEN: string;

    // string, example: registry.server.pw/rest-api-starter
    DOCKER_IMAGE: string;

    // string(en_US.UTF-8 | pt_BR.UTF-8 | ...), example: en_US.UTF-8
    LANG: string;

    // string(UTC | America/Sao_Paulo | ...), example: UTC
    TZ?: string;
  }
}
