export interface RedditResponse {
  kind: string;
  data: {
    modhash: string;
    dist: string;
    children: object;
    after: string;
    before: string | null;
  };
}

class RedditAPI {
  private static instance: RedditAPI;
  private url: string = "https://www.reddit.com/r/all/top/.json?t=all";

  private constructor() {}

  static getInstance(): RedditAPI {
    if (!RedditAPI.instance) {
      RedditAPI.instance = new RedditAPI();
    }

    return RedditAPI.instance;
  }

  private async httpRequest<T>(request: RequestInfo): Promise<T> {
    try {
      const response = await fetch(request);
      return await response.json();
    } catch (error) {
      return error;
    }
  }

  public async fetchPosts(limit: number = 10, after?: string) {
    const requestUrl = after
      ? `${this.url}&limit=${limit}&after=${after}`
      : `${this.url}&limit=${limit}`;
    return await this.httpRequest<RedditResponse>(`${requestUrl}`);
  }
}

export default RedditAPI;
