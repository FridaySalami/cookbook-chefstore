<script lang="ts">
	import type { Snippet } from 'svelte'; // Import Snippet type
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher'; // Keep mode watcher if you want dark mode toggle later

	let { children }: { children: Snippet } = $props();
</script>

<ModeWatcher />

<div class="flex min-h-screen flex-col font-sans">
	<!-- Header -->
	<!-- Apply header background and text colors, remove border/shadow -->
	<header class="bg-header text-header-foreground fixed top-0 z-50 w-full py-4">
		<div class="container mx-auto flex max-w-7xl items-center justify-between px-4 md:px-6">
			<a
				href="/"
				class="font-serif text-2xl font-bold text-inherit transition-colors hover:text-inherit/80"
				>Chefstore Cookbook</a
			>
			<!-- Navigation Links -->
			<nav class="flex items-center space-x-4">
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
	<!-- Keep increased margin-top -->
	<main class="container mx-auto mt-20 flex-grow px-4 py-8 md:px-6 lg:py-12">
		{@render children()}
	</main>

	<!-- Footer -->
	<footer class="bg-muted/50 text-muted-foreground mt-auto border-t py-6 text-center text-sm">
		<div class="container mx-auto max-w-7xl px-4 md:px-6">
			© {new Date().getFullYear()} Chefstore Cookbook. All rights reserved.
		</div>
	</footer>
</div>
