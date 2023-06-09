<script lang=ts>
    import { Shuffle, BadgeHelp } from 'lucide-svelte'
    import Input from './Input.svelte';
    import get from './store';
    import { shuffle } from './game';
    const game = get()
    function shuffleGame() {
        game.update(game => {
            game.grid = shuffle(game.grid)
            return game
        })
    };
    function makeGuess(input: CustomEvent<number>) {
        console.log(input, $game.answer)
        if($game.guessesLeft > 0) {
            game.update(game => {
                game.guessesLeft = game.guessesLeft - 1;
                game.tolerance = 1/3 * game.guessesLeft || 0.1;
                if(game.guessesLeft === 0) game.modal = true;
                if(input.detail === game.answer) {
                    game.isCorrect = true;
                    game.modal = true;
                }
                return game;
            })
        } else {
            $game.modal = true;
        }
    }
</script>

<div class="flex w-full flex-row px-2 shadow-md bg-slate-200 bg-opacity-40 rounded-t-md">
    <button>
        <BadgeHelp size={36} strokeWidth={2.25} />
    </button>
    <span class="flex-grow text-center">
        <Input on:submit={makeGuess} />
    </span>
    <button on:click={shuffleGame}>
        <Shuffle size={36} strokeWidth={2.25} />
    </button>
</div>