import { Base } from './base';

export type Client = Base & {
  fullname: string;
  email: string;
  cpf: string;
  favoriteColor?: string;
  observations?: string;
};

export type CreateClientDTO = Omit<
  Client,
  'id' | 'createdAt' | 'updatedAt' | 'deletedAt'
>;
