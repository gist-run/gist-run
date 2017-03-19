export class RateLimit {
  public limit = 99999;
  public remaining = 99999;
  public reset: Date | null = null;

  public readHeaders(response: Response) {
    this.limit = parseInt(response.headers.get('X-RateLimit-Limit'), 10);
    this.remaining = parseInt(response.headers.get('X-RateLimit-Remaining'), 10);
    this.reset = new Date(parseInt(response.headers.get('X-RateLimit-Reset'), 10) * 1000);
  }
}
