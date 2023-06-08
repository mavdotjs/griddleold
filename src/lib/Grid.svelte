<script lang=ts>
    import get from "./store";
    const game = get();
</script>

<div class="grid board rounded-b-md border-8 border-gray-400">
    {#each $game.grid as item}
        <span class="p-1 sm:p-2 border border-gray-300 text-center !bg-opacity-80" class:above={item.value > $game.answer} class:below={item.value < $game.answer}>{item.value}</span>
    {/each}
</div>

<style lang=postcss>
    .above {
        @apply bg-emerald-400 text-black
    }
    .below {
        @apply bg-red-400 text-white
    }
</style>