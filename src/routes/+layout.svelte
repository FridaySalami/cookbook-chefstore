<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import { Search, Menu } from 'lucide-svelte';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	import * as Popover from '$lib/components/ui/popover';
	import { Button } from '$lib/components/ui/button';
	import RecipeSearch from '$lib/components/RecipeSearch.svelte';
	import ShadcnRecipeSearch from '$lib/components/ShadcnRecipeSearch.svelte';

	let allRecipes = $state<{ title: string; slug: string; tags?: string[] }[]>([]);
	let showSearch = $state(false);
	let showMobileMenu = $state(false);
	let isMobile = $state(false);
	let { children } = $props();

	// Fetch recipes on mount
	$effect(() => {
		if (showSearch) {
			fetch('/api/recipes.json')
				.then(async (res) => (res.ok ? await res.json() : []))
				.then((data) => {
					allRecipes = data;
				});
		}
	});

	onMount(() => {
		function handleResize() {
			isMobile = window.innerWidth < 768;
		}
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});

	function handleRecipeSelect(event: CustomEvent<{ recipe: { title: string; slug: string } }>) {
		goto(`/recipes/${event.detail.recipe.slug}`);
		showSearch = false;
	}
</script>

<svelte:head>
	<title>Chefstore Cookbook | Simple Recipes, Real Ingredients</title>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta property="og:locale" content="en_GB" />
	<meta name="robots" content="index, follow" />

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

	<!-- Site Name for Google -->
	<meta name="site_name" content="Chefstore Cookbook" />

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

	<!-- Structured Data for Site Name -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "WebSite",
			"name": "Chefstore Cookbook",
			"url": "https://www.chefstorecookbook.com/"
		}
	</script>

	<!-- Plausible Analytics -->
	<script
		defer
		data-domain="chefstorecookbook.com"
		src="https://plausible.io/js/script.js"
	></script>
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
				class="font-serif text-2xl font-bold tracking-widest text-inherit transition-colors hover:text-inherit/80"
			>
				Chefstore Cookbook
			</a>
			{#if !isMobile}
				<!-- Desktop Navigation Links -->
				<nav class="hidden items-center space-x-4 md:flex" aria-label="Primary Navigation">
					<a
						href="/recipes"
						class="rounded-full px-3 py-1 text-sm font-medium text-inherit transition-all duration-200 hover:bg-blue-100 hover:text-blue-800 focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:outline-none"
					>
						Recipes
					</a>
					<a
						href="https://www.thechefstoreuk.co.uk"
						target="_blank"
						rel="noopener noreferrer"
						class="rounded-full px-3 py-1 text-sm font-medium text-inherit transition-all duration-200 hover:bg-blue-100 hover:text-blue-800 focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:outline-none"
					>
						Shop
					</a>
					<a
						href="/about"
						class="rounded-full px-3 py-1 text-sm font-medium text-inherit transition-all duration-200 hover:bg-blue-100 hover:text-blue-800 focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:outline-none"
					>
						About Us
					</a>
					<div class="relative">
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
							<Popover.Content class="w-[350px] bg-white p-3" sideOffset={8} align="start">
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
					</div>
				</nav>
			{:else}
				<!-- Mobile Hamburger & Search -->
				<div class="flex items-center space-x-2 md:hidden">
					<Button
						variant="ghost"
						size="icon"
						aria-label="Open menu"
						onclick={() => (showMobileMenu = !showMobileMenu)}
					>
						<Menu class="h-6 w-6" />
					</Button>
					<div class="relative">
						<Popover.Root bind:open={showSearch}>
							<Popover.Trigger asChild let:builder>
								<Button
									builders={[builder]}
									variant="ghost"
									size="icon"
									class="rounded-full hover:bg-blue-100 hover:text-blue-800 focus-visible:ring-2 focus-visible:ring-blue-300"
									aria-label="Search"
								>
									<Search class="h-5 w-5" />
								</Button>
							</Popover.Trigger>
							<Popover.Content class="w-[350px] bg-white p-3" sideOffset={8} align="start">
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
					</div>
				</div>
			{/if}
		</div>
		<!-- Mobile Dropdown -->
		{#if showMobileMenu}
			<!-- Overlay to close menu on outside click, now accessible -->
			<div
				class="fixed inset-0 z-30 md:hidden"
				role="button"
				tabindex="0"
				aria-label="Close mobile menu"
				onclick={() => (showMobileMenu = false)}
				onkeydown={(e) => {
					if (e.key === 'Enter' || e.key === ' ') {
						showMobileMenu = false;
					}
				}}
				style="background: transparent;"
			></div>
			<div
				class="animate-fade-in absolute top-full left-0 z-40 w-full border-b bg-white shadow-lg md:hidden"
			>
				<nav class="flex flex-col py-2" aria-label="Mobile Navigation">
					<!-- Recipes link -->
					<a
						href="/recipes"
						class="px-6 py-3 text-base font-medium text-inherit hover:bg-blue-100 hover:text-blue-800"
						onclick={() => (showMobileMenu = false)}
					>
						Recipes
					</a>
					<!-- Shop link -->
					<a
						href="https://www.thechefstoreuk.co.uk"
						target="_blank"
						rel="noopener noreferrer"
						class="px-6 py-3 text-base font-medium text-inherit hover:bg-blue-100 hover:text-blue-800"
						onclick={() => (showMobileMenu = false)}
					>
						Shop
					</a>
					<!-- About Us link -->
					<a
						href="/about"
						class="px-6 py-3 text-base font-medium text-inherit hover:bg-blue-100 hover:text-blue-800"
						onclick={() => (showMobileMenu = false)}
					>
						About Us
					</a>
				</nav>
			</div>
		{/if}
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
