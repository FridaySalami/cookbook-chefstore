<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { MoreHorizontal } from 'lucide-svelte'; // Corrected import
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLAttributes<HTMLSpanElement> & {
		el?: HTMLSpanElement;
	};

	export let el: $$Props['el'] = undefined;
	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<span
	bind:this={el}
	role="presentation"
	aria-hidden="true"
	class={cn('flex h-9 w-9 items-center justify-center', className)}
	{...$$restProps}
>
	<MoreHorizontal class="h-4 w-4 outline-none" tabindex={-1} />
	<!-- Use MoreHorizontal and fix tabindex type -->
	<span class="sr-only">More</span>
</span>
