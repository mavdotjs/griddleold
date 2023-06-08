<script>
    import { Shuffle, BadgeHelp } from 'lucide-svelte'
    import Input from './Input.svelte';
    import get from './store';
    import { shuffle } from './game';
    const game = get()
    function shuffleGame() {
        game.set({
            ...$game,
            grid: shuffle($game.grid)
        })
    }
</script>

<div class="flex w-full flex-row px-2 shadow-md bg-slate-200 bg-opacity-40 rounded-t-md">
    <button>
        <BadgeHelp size={36} strokeWidth={2.25} />
    </button>
    <span class="flex-grow text-center">
        <Input />
    </span>
    <button on:click={shuffleGame}>
        <Shuffle size={36} strokeWidth={2.25} />
    </button>
</div>