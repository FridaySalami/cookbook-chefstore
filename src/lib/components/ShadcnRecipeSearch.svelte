<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';

	// Use $props() for Svelte 5 runes mode
	const props = $props<{
		recipes?: Array<{ title: string; slug: string; tags?: string[] }>;
		placeholder?: string;
	}>();
	const recipes: Array<{ title: string; slug: string; tags?: string[] }> = props.recipes ?? [];
	const placeholder: string = props.placeholder ?? 'Search recipes...';

	let search = $state('');
	let showSuggestions = $state(false);
	let filtered = $derived(
		search.length > 0
			? recipes.filter((r) => {
					const lower = search.toLowerCase();
					return (
						r.title.toLowerCase().includes(lower) ||
						r.slug.toLowerCase().includes(lower) ||
						(r.tags && r.tags.some((tag) => tag.toLowerCase().includes(lower)))
					);
				})
			: []
	);
	const dispatch = createEventDispatcher();

	function selectRecipe(recipe: { title: string; slug: string }) {
		search = recipe.title;
		showSuggestions = false;
		dispatch('select', { recipe });
	}

	function onInput(e: Event) {
		const target = e.target as HTMLInputElement;
		search = target.value;
		showSuggestions = true;
	}

	function onBlur() {
		// Only close if not actively clicking a result
		setTimeout(() => {
			if (document.activeElement?.tagName !== 'BUTTON') {
				showSuggestions = false;
			}
		}, 200);
	}
</script>

<div class="relative mx-auto w-full">
	<form
		onsubmit={(e) => {
			e.preventDefault();
			if (filtered.length > 0) selectRecipe(filtered[0]);
		}}
	>
		<Input
			type="text"
			bind:value={search}
			{placeholder}
			oninput={onInput}
			onfocus={() => (showSuggestions = true)}
			onblur={onBlur}
			onkeydown={(e) => {
				if (e.key === 'Enter' && filtered.length > 0) {
					e.preventDefault();
					selectRecipe(filtered[0]);
				}
			}}
			autocomplete="off"
			class="mb-0"
		/>
	</form>
	{#if showSuggestions && filtered.length > 0}
		<ul
			class="absolute right-0 left-0 z-10 mt-1 max-h-60 overflow-auto rounded border bg-white shadow-lg [&>li]:p-0"
		>
			{#each filtered.slice(0, 8) as recipe}
				<li>
					<Button
						variant="ghost"
						class="h-auto w-full justify-start px-2 py-1.5 text-sm font-normal hover:bg-blue-100 hover:text-blue-800 focus-visible:ring-2 focus-visible:ring-blue-300"
						style="text-align:left;"
						onmousedown={() => selectRecipe(recipe)}
					>
						<span class="block w-full text-left" style="display:inline; pointer-events: none;">
							{@html recipe.title.replace(
								search ? new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i') : /$^/,
								(match) => `<strong>${match}</strong>`
							)}
						</span>
					</Button>
				</li>
			{/each}
		</ul>
	{/if}
</div>

<style>
:global(input[type="text"]), :global(input[type="search"]) {
  font-size: 16px !important;
}
</style>
