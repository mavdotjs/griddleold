<script lang=ts>
    import { ThumbsUp } from "lucide-svelte";
    import { createEventDispatcher } from "svelte";
    import { writable } from "svelte/store";
    const event = createEventDispatcher();
    const input = writable('');
</script>

<form on:submit|preventDefault={() => event('submit', $input)} class="mt-2 mb-2 flex flex-row items-center justify-center">
    <input disabled={$$props.disabled} type="number" bind:value={$input} class="bg-transparent disabled:cursor-not-allowed disabled:bg-slate-400" placeholder="Your Guess">
    <button disabled={$$props.disabled} class="form-input inline-block bg-slate-100 disabled:cursor-not-allowed disabled:bg-slate-400 bg-opacity-25 hover:bg-opacity-40 transition-opacity">
        <ThumbsUp />
    </button>
</form>