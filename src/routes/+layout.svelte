<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import { Search } from 'lucide-svelte';
	import { goto } from '$app/navigation';

	import * as Popover from '$lib/components/ui/popover';
	import { Button } from '$lib/components/ui/button';
	import RecipeSearch from '$lib/components/RecipeSearch.svelte';
	import ShadcnRecipeSearch from '$lib/components/ShadcnRecipeSearch.svelte';

	let { children }: { children: Snippet } = $props();
	let allRecipes = $state<{ title: string; slug: string; tags?: string[] }[]>([]);
	let showSearch = $state(false);
	
	// Fetch recipes on mount
	$effect(() => {
		if (showSearch) {
			fetch('/api/recipes.json')
				.then(res => res.ok ? res.json() : [])
				.then(data => {
					allRecipes = data;
				});
		}
	});
	
	function handleRecipeSelect(event: CustomEvent<{recipe: {title: string, slug: string}}>) {
		goto(`/recipes/${event.detail.recipe.slug}`);
		showSearch = false;
	}
</script>

<svelte:head>
	<title>Chefstore Cookbook | Simple Recipes, Real Ingredients</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta property="og:locale" content="en_GB" />

	<!-- Favicon -->
	<link rel="icon" type="image/png" href="/favicon.png" sizes="64x64" />

	<!-- OpenGraph & Twitter Card Defaults -->
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Chefstore Cookbook" />
	<meta property="og:title" content="Chefstore Cookbook | Simple Recipes, Real Ingredients" />
	<meta
		property="og:description"
		content="Delicious, no-fuss recipes made with real ingredients. From weeknight wonders to weekend crowd-pleasers."
	/>
	<meta property="og:image" content="https://www.chefstorecookbook.com/default-og-image.png" />
	<meta property="og:url" content="https://www.chefstorecookbook.com/" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Chefstore Cookbook | Simple Recipes, Real Ingredients" />
	<meta
		name="twitter:description"
		content="Delicious, no-fuss recipes made with real ingredients. Cook like you mean it."
	/>

	<!-- Structured Data -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebSite",
			"name": "Chefstore Cookbook",
			"url": "https://www.chefstorecookbook.com/",
			"potentialAction": {
				"@type": "SearchAction",
				"target": "https://www.chefstorecookbook.com/search?q={search_term_string}",
				"query-input": "required name=search_term_string"
			}
		}
	</script>
</svelte:head>

<ModeWatcher />

<div class="flex min-h-screen flex-col font-sans">
	<a
		href="#main-content"
		class="focus:bg-background focus:text-foreground sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4"
	>
		Skip to main content
	</a>
	<!-- Header -->
	<header
		class="text-header-foreground fixed top-0 z-50 w-full border-b border-black bg-white py-4"
	>
		<div class="container mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6">
			<a
				href="/"
				class="font-serif text-2xl font-bold text-inherit transition-colors hover:text-inherit/80"
				>Chefstore Cookbook</a
			>
			<!-- Navigation Links -->
			<nav class="flex items-center space-x-4" aria-label="Primary Navigation">
				<a
					href="/recipes"
					class="rounded-full px-3 py-1 text-sm font-medium text-inherit transition-all duration-200 hover:bg-blue-100 hover:text-blue-800 focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:outline-none"
					style="transition-property: background-color, color, box-shadow;"
				>
					Recipes
				</a>
				<a
					href="https://www.thechefstoreuk.co.uk"
					target="_blank"
					rel="noopener noreferrer"
					class="rounded-full px-3 py-1 text-sm font-medium text-inherit transition-all duration-200 hover:bg-blue-100 hover:text-blue-800 focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:outline-none"
					style="transition-property: background-color, color, box-shadow;"
				>
					Shop
				</a>
				<a
					href="/about"
					class="rounded-full px-3 py-1 text-sm font-medium text-inherit transition-all duration-200 hover:bg-blue-100 hover:text-blue-800 focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:outline-none"
					style="transition-property: background-color, color, box-shadow;"
				>
					About Us
				</a>
				<Popover.Root bind:open={showSearch}>
					<Popover.Trigger asChild let:builder>
						<Button
							builders={[builder]}
							variant="ghost"
							size="icon"
							class="ml-2 rounded-full hover:bg-blue-100 hover:text-blue-800 focus-visible:ring-2 focus-visible:ring-blue-300"
							aria-label="Search"
						>
							<Search class="h-5 w-5" />
						</Button>
					</Popover.Trigger>
					<Popover.Content class="w-[350px] bg-white p-3" sideOffset={16} align="end">
						{#if allRecipes.length > 0}
							<div class="mb-0">
									<ShadcnRecipeSearch 
										recipes={allRecipes} 
										on:select={handleRecipeSelect} 
										placeholder="Search recipes..."
									/>
							</div>
						{:else}
							<p class="text-muted-foreground p-2 text-center text-sm">Loading recipes...</p>
						{/if}
					</Popover.Content>
				</Popover.Root>
			</nav>
		</div>
	</header>

	<!-- Main Content -->
	<main id="main-content" class="container mx-auto mt-16 flex-grow px-4 py-8 md:px-6 lg:py-12">
		{@render children()}
	</main>

	<!-- Footer -->
	<footer class="bg-muted/50 text-muted-foreground mt-auto border-t py-6 text-center text-sm">
		<div class="container mx-auto max-w-7xl px-4 md:px-6">
			© {new Date().getFullYear()} Chefstore Cookbook. All rights reserved.
		</div>
	</footer>
</div>
