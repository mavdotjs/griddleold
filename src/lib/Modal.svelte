<script lang=ts>
    import { reset, gameStore } from "./store";
</script>
{#if $gameStore.modal}
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div on:click={reset} on:keydown={reset} class="absolute flex flex-col top-0 z-40 items-center justify-center h-full w-full backdrop-blur-md">
    <div on:click|stopPropagation={() => {}} class="p-5 flex flex-col rounded-md bg-slate-800 text-white absolute shadow-md shadow-slate-500">
        <h1 class="text-5xl font-title pb-4">Griddle</h1>
        <span class="font-bold text-center" class:text-red-200={!$gameStore.isCorrect} class:text-emerald-200={$gameStore.isCorrect}>You {$gameStore.isCorrect?'won!':'lost.'}</span>
        <button class="bg-blue-500 rounded-md mt-8 p-2" on:click={reset}>
            Play Again
        </button>
    </div>
</div>
{/if}