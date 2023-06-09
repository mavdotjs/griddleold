<script lang=ts>
    import { ThumbsUp } from "lucide-svelte";
    import { createEventDispatcher } from "svelte";
    import { derived, writable } from "svelte/store";
    import { gameStore } from "./store";
    const event = createEventDispatcher();
    const input = writable('');
    const disabled = derived(gameStore, (game) => {
        return game.modal
    })
    disabled.subscribe(disablad => {
        if(disablad) {
            input.set('')
        }
    })
</script>

<form on:submit|preventDefault={() => event('submit', $input)} class="mt-2 mb-2 flex flex-row items-center justify-center">
    <input disabled={$disabled} type="number" bind:value={$input} class="bg-transparent disabled:cursor-not-allowed disabled:bg-slate-400" placeholder="Your Guess">
    <button disabled={$disabled} class="form-input inline-block bg-slate-100 disabled:cursor-not-allowed disabled:bg-slate-400 bg-opacity-25 hover:bg-opacity-40 transition-opacity">
        <ThumbsUp />
    </button>
</form>