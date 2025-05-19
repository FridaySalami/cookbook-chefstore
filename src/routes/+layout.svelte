<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';

	let { children }: { children: Snippet } = $props();
</script>

<svelte:head>
	<title>Chefstore Cookbook | Simple Recipes, Real Ingredients</title>
	<meta name="description" content="Delicious recipes from the Chefstore team." />

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
	<header class="text-header-foreground fixed top-0 z-50 w-full bg-white py-4 shadow-md">
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
					class="text-sm font-medium text-inherit transition-colors hover:text-inherit/80"
					>Recipes</a
				>
				<a
					href="https://www.thechefstoreuk.co.uk"
					target="_blank"
					rel="noopener noreferrer"
					class="text-sm font-medium text-inherit transition-colors hover:text-inherit/80">Shop</a
				>
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
