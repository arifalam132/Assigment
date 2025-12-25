<script lang="ts">
  import Input from '$lib/components/Input.svelte'
  import Button from '$lib/components/Button.svelte'
  export let form
</script>

<h2>Login</h2>

<form method="POST">
  <Input label="Email" name="email" error={form?.errors?.email} />
  <Input
    label="Password"
    name="password"
    type="password"
    error={form?.errors?.password}
  />
  <Button text="Login" />
</form>

{#if form?.message}
  <p>{form.message}</p>
{/if}
