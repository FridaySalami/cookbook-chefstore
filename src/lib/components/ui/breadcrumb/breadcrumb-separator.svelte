<script lang="ts">
	import type { HTMLLiAttributes } from 'svelte/elements';
	import { ChevronRight } from 'lucide-svelte'; // Corrected import
	import { cn } from '$lib/utils.js';

	type $$Props = HTMLLiAttributes & {
		el?: HTMLLIElement;
	};

	export let el: $$Props['el'] = undefined;
	let className: $$Props['class'] = undefined;
	export { className as class };
</script>

<li
	role="presentation"
	aria-hidden="true"
	class={cn('[&>svg]:size-3.5', className)}
	bind:this={el}
	{...$$restProps}
>
	<slot>
		<ChevronRight class="h-3.5 w-3.5" tabindex={-1} />
		<!-- Corrected tabindex type -->
	</slot>
</li>
