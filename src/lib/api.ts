const base = 'http://localhost:3000'

export async function apiFetch(path: string, options: RequestInit = {}) {
  const res = await fetch(base + path, {
    credentials: 'include',
    headers: {
      'content-type': 'application/json'
    },
    ...options
  })

  if (!res.ok) {
    throw new Error(await res.text())
  }

  return res.json()
}
