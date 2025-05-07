<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { browser } from '$app/environment'; // Import browser check
	import type { Snippet } from 'svelte'; // Import Snippet type
	import { Badge } from '$lib/components/ui/badge';
	import { Separator } from '$lib/components/ui/separator';
	import { Clock, ChefHat, Users, ArrowLeft, ArrowUp } from 'lucide-svelte'; // Import icons
	import { ProductCard } from '$lib/components/ui/product-card'; // Import ProductCard

	// Metadata from the markdown frontmatter
	let {
		children, // Add children prop for rendering slot content
		title = '',
		description = '',
		image = '', // Will use placeholder if empty
		prepTime = null,
		cookTime = null,
		totalTime = null,
		difficulty = '',
		servings = null,
		tags = [],
		products = [], // Added products prop for Shopify integration
		relatedProducts = [] // Add relatedProducts prop
	}: {
		children: Snippet; // Type children as Snippet
		title?: string;
		description?: string;
		image?: string;
		prepTime?: number | null;
		cookTime?: number | null;
		totalTime?: number | null;
		difficulty?: string;
		servings?: number | null;
		tags?: string[];
		products?: Array<{ name: string; image: string; price: string; url: string }>;
		relatedProducts?: Array<{ handle: string; featured?: boolean }>;
		// Add other frontmatter props if needed, e.g., date
	} = $props();

	/** @type {import('svelte/action').Action<HTMLImageElement>} */
	function fallbackImage(node: HTMLImageElement) {
		const handleError = () => {
			// Check if the src is already the placeholder to prevent infinite loops
			if (node.src !== '/placeholder.png') {
				node.src = '/placeholder.png';
			}
		};

		// Rely primarily on the error event
		node.addEventListener('error', handleError);

		// Optional: Check if src is truly empty/null on initial mount,
		// but avoid checking naturalWidth immediately.
		if (!node.src) {
			handleError();
		}

		return {
			destroy() {
				node.removeEventListener('error', handleError);
			}
		};
	}

	// Helper function to format tags
	function formatTag(tag: string) {
		return tag
			.split('-')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	}

	// State for Back to Top button visibility
	let showBackToTop = $state(false); // Use $state for reactivity
	let scrollY = 0;

	function handleScroll() {
		if (!browser) return; // Guard: Only run on client
		scrollY = window.scrollY;
		showBackToTop = scrollY > 300; // Show button after scrolling 300px
	}

	function scrollToTop() {
		if (!browser) return; // Guard: Only run on client
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	onMount(() => {
		// onMount only runs in the browser, no need for browser check here
		window.addEventListener('scroll', handleScroll);
		// Initial check in case the page loads scrolled down
		handleScroll();
	});

	onDestroy(() => {
		// onDestroy only runs in the browser, no need for browser check here
		// Check if running in browser before removing listener, just to be safe
		if (browser) {
			window.removeEventListener('scroll', handleScroll);
		}
	});
</script>

<svelte:head>
	<title>{title} | Chefstore Cookbook</title>
	<meta name="description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	{#if image}
		<meta property="og:image" content={image} />
	{/if}
</svelte:head>

<article class="relative mx-auto max-w-3xl px-4 py-8 md:px-6 lg:px-8">
	<!-- Hero Image -->
	<div class="relative mb-8 h-[300px] overflow-hidden rounded-lg shadow-md md:h-[400px]">
		<img
			use:fallbackImage
			src={image}
			alt={title}
			class="h-full w-full object-cover"
			loading="eager"
			fetchpriority="high"
		/>
	</div>

	<!-- Recipe Header -->
	<header class="mb-8">
		<h1 class="text-foreground mb-3 text-3xl font-bold tracking-tight md:text-4xl">{title}</h1>

		{#if description}
			<p class="text-muted-foreground mb-6 text-lg">{description}</p>
		{/if}

		<!-- Recipe Metadata -->
		<div
			class="text-muted-foreground flex flex-wrap items-center gap-x-6 gap-y-3 border-y py-4 text-sm"
		>
			{#if totalTime}
				<div class="flex items-center gap-1.5">
					<Clock class="h-4 w-4" />
					<span><strong>Total:</strong> {totalTime} min</span>
				</div>
			{/if}
			{#if prepTime && !totalTime}
				<div class="flex items-center gap-1.5">
					<Clock class="h-4 w-4" />
					<span><strong>Prep:</strong> {prepTime} min</span>
				</div>
			{/if}
			{#if cookTime && !totalTime}
				<div class="flex items-center gap-1.5">
					<Clock class="h-4 w-4" />
					<span><strong>Cook:</strong> {cookTime} min</span>
				</div>
			{/if}
			{#if difficulty}
				<div class="flex items-center gap-1.5">
					<ChefHat class="h-4 w-4" />
					<span><strong>Difficulty:</strong> {difficulty}</span>
				</div>
			{/if}
			{#if servings}
				<div class="flex items-center gap-1.5">
					<Users class="h-4 w-4" />
					<span><strong>Servings:</strong> {servings}</span>
				</div>
			{/if}
		</div>
	</header>

	<!-- Recipe Content -->
	<div
		class="prose prose-slate dark:prose-invert prose-headings:mb-4 prose-headings:mt-8 prose-p:my-4 prose-ul:my-4 prose-ol:my-4 max-w-none"
	>
		{@render children()}
		<!-- Use @render tag -->
	</div>

	<!-- Tags Section -->
	{#if tags && tags.length > 0}
		<Separator class="my-8" />
		<div class="flex flex-wrap items-center gap-2">
			<span class="text-muted-foreground text-sm font-medium">Tags:</span>
			{#each tags as tag}
				<Badge variant="secondary">{formatTag(tag)}</Badge>
			{/each}
		</div>
	{/if}

	<!-- Back to Recipes Link -->
	<Separator class="my-8" />
	<div class="text-center">
		<a
			href="/recipes"
			class="text-primary inline-flex items-center gap-2 text-sm transition-colors hover:underline"
		>
			<ArrowLeft class="h-4 w-4" />
			Back to All Recipes
		</a>
	</div>

	<!-- Back to Top Button -->
	<!-- Use onclick attribute instead of on:click -->
	{#if showBackToTop}
		<button
			onclick={scrollToTop}
			aria-label="Scroll back to top"
			class="bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-ring fixed right-6 bottom-6 z-50 rounded-full p-3 shadow-lg transition-opacity focus:ring-2 focus:ring-offset-2 focus:outline-none md:right-8 md:bottom-8"
		>
			<ArrowUp class="h-5 w-5" />
		</button>
	{/if}
</article>

<style>
	/* Keep existing global prose styles if needed, or adjust */
	:global(.prose h2) {
		margin-top: 2.5rem;
		margin-bottom: 1rem;
		font-size: 1.5rem;
		font-weight: 600;
		/* Use theme colors */
		color: hsl(var(--foreground));
		border-bottom: 1px solid hsl(var(--border));
		padding-bottom: 0.5rem;
	}

	:global(.prose h3) {
		margin-top: 2rem;
		margin-bottom: 0.75rem;
		font-size: 1.25rem;
		font-weight: 600;
		color: hsl(var(--foreground));
	}

	:global(.prose ul),
	:global(.prose ol) {
		margin-top: 1rem;
		margin-bottom: 1rem;
		padding-left: 1.25rem;
	}

	:global(.prose li) {
		margin-top: 0.5rem;
		margin-bottom: 0.5rem;
	}

	:global(.prose p) {
		margin-top: 1rem;
		margin-bottom: 1rem;
		line-height: 1.7;
	}

	:global(.prose > *:first-child) {
		margin-top: 0;
	}

	:global(.prose hr) {
		margin-top: 2rem;
		margin-bottom: 2rem;
		border-color: hsl(var(--border));
	}

	@media (max-width: 640px) {
		:global(.prose) {
			padding-left: 4px;
			padding-right: 4px;
		}

		:global(.prose ul),
		:global(.prose ol) {
			padding-left: 1.5rem;
		}
	}

	:global(.prose h2) {
		margin-top: 2.5rem;
		margin-bottom: 1rem;
		font-size: 1.5rem;
		font-weight: 600;
		border-bottom: 1px solid hsl(var(--border));
		padding-bottom: 0.5rem;
	}

	:global(.prose h2 + ul) {
		margin-top: 1rem;
		margin-bottom: 2rem;
		padding-left: 1.25rem;
		list-style-type: disc;
	}
</style>
