<script lang="ts">
	import { createEventDispatcher } from 'svelte';
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
		setTimeout(() => (showSuggestions = false), 100); // Delay to allow click
	}
</script>

<div class="relative mx-auto mb-8 max-w-md">
	<form
		onsubmit={(e) => {
			e.preventDefault();
			if (filtered.length > 0) selectRecipe(filtered[0]);
		}}
	>
		<input
			type="text"
			class="w-full rounded border px-4 py-2 focus:ring focus:outline-none"
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
		/>
	</form>
	{#if showSuggestions && filtered.length > 0}
		<ul
			class="absolute right-0 left-0 z-10 mt-1 max-h-60 overflow-auto rounded border bg-white shadow-lg"
		>
			{#each filtered.slice(0, 8) as recipe}
				<li>
					<button
						type="button"
						class="w-full cursor-pointer px-4 py-2 text-left hover:bg-gray-100"
						onmousedown={() => selectRecipe(recipe)}
						tabindex="0"
					>
						{@html recipe.title.replace(
							search ? new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i') : /$^/,
							(match) => `<strong>${match}</strong>`
						)}
					</button>
				</li>
			{/each}
		</ul>
	{/if}
</div>
