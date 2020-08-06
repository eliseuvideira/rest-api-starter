declare namespace Express {
  export interface Request {
    token: Record<string, any> | undefined;
  }
}
