export class RateLimit {
  limit = 0;
  remaining = 0;
  reset = null;

  readHeaders(response) {
    this.limit = parseInt(response.headers.get('X-RateLimit-Limit'), 10),
    this.remaining = parseInt(response.headers.get('X-RateLimit-Remaining'), 10),
    this.reset = new Date(parseInt(response.headers.get('X-RateLimit-Reset'), 10) * 1000)
  }
}
