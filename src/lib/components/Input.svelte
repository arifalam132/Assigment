<script lang="ts">
  export let label = ''
  export let name = ''
  export let type = 'text'
  export let error: string | undefined
</script>

<div>
  <label>{label}</label>
  <input name={name} type={type} />
  {#if error}
    <div style="color:red">{error}</div>
  {/if}
</div>
