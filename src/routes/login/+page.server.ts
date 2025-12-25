import { fail } from '@sveltejs/kit'
import type { Actions } from './$types'
import { loginSchema } from '$lib/schemas/login'
import { apiFetch } from '$lib/api'

export const actions: Actions = {
  default: async ({ request }) => {
    const data = Object.fromEntries(await request.formData())
    const parsed = loginSchema.safeParse(data)

    if (!parsed.success) {
      return fail(400, {
        errors: parsed.error.flatten().fieldErrors
      })
    }

    try {
      await apiFetch('/auth/login', {
        method: 'POST',
        body: JSON.stringify(parsed.data)
      })

      return { message: 'Logged in' }
    } catch {
      return fail(400, { message: 'Invalid credentials' })
    }
  }
}
