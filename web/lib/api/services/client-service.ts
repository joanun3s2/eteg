import { apiFetch } from '../client';
import { Client, CreateClientDTO } from '../types/client';

const ENDPOINT = '/clients';
export async function getClients() {
  return apiFetch<Client[]>(ENDPOINT);
}

export async function createClient(data: CreateClientDTO) {
  return apiFetch<Client>(ENDPOINT, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}
