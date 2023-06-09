import { type Writable, writable } from 'svelte/store';
import { setContext, getContext } from 'svelte';
import { createGame, type Game } from './game';

const contextKey = Symbol('game');
export const gameStore: Writable<Game> = writable(createGame())
export function reset() {
    gameStore.set(createGame())
}
export function create() {
    return setContext(contextKey, gameStore);
} 
export default function get(): Writable<Game> {
    return getContext(contextKey)
}