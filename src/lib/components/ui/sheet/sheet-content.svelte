<script lang="ts">
    import { Dialog as SheetPrimitive, type DialogContentProps } from 'bits-ui';
    import { X } from 'lucide-svelte'; // Correct import
    import { fly, type TransitionConfig } from 'svelte/transition';
    import {
        SheetOverlay,
        SheetPortal,
        type Side,
        sheetTransitions,
        sheetVariants
    } from './index.js';
    import { cn } from '$lib/utils.js';
    import type { Snippet } from 'svelte';

    type $$Props = DialogContentProps & {
        side?: Side;
        class?: string;
        children?: Snippet;
        inTransition?: (node: Element, params?: any) => TransitionConfig;
        inTransitionConfig?: any;
        outTransition?: (node: Element, params?: any) => TransitionConfig;
        outTransitionConfig?: any;
    };

    let {
        class: className,
        side = 'right',
        children,
        inTransition = fly,
        inTransitionConfig = sheetTransitions[side ?? 'right'].in,
        outTransition = fly,
        outTransitionConfig = sheetTransitions[side ?? 'right'].out,
        ...restProps
    }: $$Props = $props();
</script>

<SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
        {inTransition}
        {inTransitionConfig}
        {outTransition}
        {outTransitionConfig}
        class={cn(sheetVariants({ side }), className)}
        {...restProps}
    >
        {#if children}
            {@render children()}
        {/if}
        <SheetPrimitive.Close
            class="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none"
        >
            <X class="h-4 w-4" ></X>
            <span class="sr-only">Close</span>
        </SheetPrimitive.Close>
    </SheetPrimitive.Content>
</SheetPortal>
