const BASE_URL = 'https://rickandmortyapi.com/api';

export async function searchCharactersByName(name, filters = {}) {
  const params = new URLSearchParams();
  if (name) params.append('name', name);
  if (filters.status) params.append('status', filters.status);
  if (filters.gender) params.append('gender', filters.gender);
  if (filters.species) params.append('species', filters.species);

  const response = await fetch(`${BASE_URL}/character/?${params.toString()}`);
  if (!response.ok) throw new Error('Character not found');
  const data = await response.json();
  return data.results;
}
