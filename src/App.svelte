<script lang=ts>
  import { writable } from 'svelte/store';
	import Game from './lib/Game.svelte';
  import Grid from './lib/Grid.svelte';
  import Input from './lib/Input.svelte';
  import TopBar from './lib/TopBar.svelte';
  const tutorial = writable<boolean>(false)
</script>

<Game {tutorial}>
  <h1 class="text-5xl font-title pb-4">Griddle</h1>
  <TopBar />
  <Grid />
</Game>

{#if $tutorial}
   <!-- content here -->
{/if}