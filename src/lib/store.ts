import { type Writable, writable } from 'svelte/store';
import { setContext, getContext } from 'svelte';
import { createGame, type Game } from './game';

const contextKey = Symbol('game');
const gameStore: Writable<Game> = writable(createGame())
export function create() {
    setContext(contextKey, gameStore);
} 
export default function get(): Writable<Game> {
    return getContext(contextKey)
}