<script lang=ts>
    import get from "./store";
    const game = get();
    function getTolerant(number: number, tolerance: number) {
        const diff = Math.abs(number - $game.answer);
        const percent = (diff / 100)
        return percent >= tolerance;
    }
</script>

<div class="grid board w-screen md:w-fit rounded-b-md border-8 border-gray-400">
    {#each $game.grid as item}
        <span class="p-1 sm:p-2 border border-gray-300 text-center !bg-opacity-80 transition-opacity duration-300" class:above={item.value > $game.answer} class:below={item.value < $game.answer} class:ghosted={getTolerant(item.value, $game.tolerance)}>{item.value}</span>
    {/each}
</div>

<style lang=postcss>
    .above {
        @apply bg-emerald-400 text-black
    }
    .below {
        @apply bg-red-400 text-white
    }
    .ghosted {
        @apply opacity-20
    }
</style>