interface AssetsBinding {
  fetch(input: Request | URL | string): Promise<Response>;
}

export interface Env {
  STATIC: AssetsBinding;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    return env.STATIC.fetch(request);
  },
};
