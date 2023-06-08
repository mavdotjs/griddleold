<script lang=ts>
    import type { Writable } from 'svelte/store';
    import { create } from './store';
    export let tutorial: Writable<boolean>;
    create();
</script>

<div class:hidden={$tutorial} class="gap-y-2 flex items-center justify-center bg-gradient-to-br from-orange-300 to-red-400 h-full">
    <div class="flex flex-col items-center">
        <slot />
    </div>
</div>