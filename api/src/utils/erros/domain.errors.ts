export class NotFoundError extends Error {
  constructor(message = 'Resource not found') {
    super(message);
    this.name = 'NotFoundError';
  }
}

export class CreationFailedError extends Error {
  constructor(message = 'Creation failed') {
    super(message);
    this.name = 'CreationFailedError';
  }
}
