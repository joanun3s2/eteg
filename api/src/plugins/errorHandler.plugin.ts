import {
  CreationFailedError,
  NotFoundError,
} from '@/utils/erros/domain.errors';
import { FastifyReply, FastifyRequest } from 'fastify';

export function errorHandler(
  error: unknown,
  _request: FastifyRequest,
  reply: FastifyReply,
) {
  if (error instanceof NotFoundError) {
    return reply.code(404).send({ message: error.message });
  }

  if (error instanceof CreationFailedError) {
    return reply.code(500).send({ message: error.message });
  }

  reply.code(500).send({ message: 'Internal server error' });
}
