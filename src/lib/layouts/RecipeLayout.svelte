<script lang="ts">
	import { page } from '$app/stores';
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Clock, Users } from 'lucide-svelte';
	import type { Snippet } from 'svelte';
	import { onMount } from 'svelte'; // Import onMount
	import RelatedProducts from '$lib/components/RelatedProducts.svelte'; // Import RelatedProducts

	// Import necessary types
	type ProductHandle = {
		handle: string;
		featured?: boolean;
	};

	interface Props {
		title?: string;
		description?: string;
		image?: string;
		prepTime?: number | null;
		cookTime?: number | null;
		totalTime?: number | null;
		difficulty?: string;
		servings?: number | null;
		tags?: string[];
		date?: string | null;
		author?: string;
		relatedProducts?: ProductHandle[];
		content?: Snippet;
		slug?: string;
	}

	// Get all props in one object
	let props: Props = $props();

	// Use $derived for reactivity
	let title = $derived(props.title ?? '');
	let description = $derived(props.description ?? '');
	let image = $derived(props.image ?? '');
	let prepTime = $derived(props.prepTime ?? null);
	let cookTime = $derived(props.cookTime ?? null);
	let totalTime = $derived(props.totalTime ?? null);
	let difficulty = $derived(props.difficulty ?? '');
	let servings = $derived(props.servings ?? null);
	let tags = $derived(props.tags ?? []);
	let date = $derived(props.date ?? null);
	let author = $derived(props.author ?? 'Chefstore Cookbook');
	let relatedProducts = $derived(props.relatedProducts ?? []);
	let content = $derived(props.content);
	let slug = $derived(props.slug ?? '');

	let showRelatedProducts = $state(false); // State for dynamic loading

	// Fix image path if needed
	const siteBaseUrl = 'https://chefstorecookbook.netlify.app';
	const fullImageUrl = $derived(
		image
			? image.startsWith('http')
				? image
				: `${siteBaseUrl}${image.startsWith('/') ? '' : '/'}${image}`
			: `${siteBaseUrl}/default-og-image.png`
	);

	// Construct the canonical URL
	const canonicalUrl = $derived(`${siteBaseUrl}/recipes/${$page.params.slug}`);

	// Format time for display
	function formatTime(minutes: number | null): string {
		if (minutes === null) return 'N/A';
		return `${minutes} min`;
	}

	function getResponsiveImageData(image: string) {
		if (!image || !image.startsWith('/images/recipes/')) return null;

		const pathParts = image.split('/');
		const filename = pathParts.pop()?.replace('.webp', '') ?? '';
		const resizedFolder = `${pathParts.join('/')}/resized`;

		return {
			srcset: [400, 800, 1200]
				.map((w) => `${resizedFolder}/${filename}-${w}w.webp ${w}w`)
				.join(', '),
			sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px',
			fallback: `${resizedFolder}/${filename}-800w.webp`
		};
	}

	let responsiveImage = $derived.by(() => getResponsiveImageData(image));

	// Add fallbackImage action for image error handling
	/** @type {import('svelte/action').Action<HTMLImageElement>} */
	function fallbackImage(node: HTMLImageElement) {
		const handleError = () => {
			node.src = '/placeholder.png';
		};
		node.addEventListener('error', handleError);
		return {
			destroy() {
				node.removeEventListener('error', handleError);
			}
		};
	}

	onMount(() => {
		// Delay loading of related products to improve initial page load
		const timer = setTimeout(() => {
			showRelatedProducts = true;
		}, 100); // Small delay, can be adjusted

		return () => clearTimeout(timer); // Cleanup timer on component destroy
	});
</script>

<svelte:head>
	<!-- Primary meta tags -->
	<title>{title} | Chefstore Cookbook</title>
	<meta name="description" content={description} />
	<meta name="author" content={author} />

	<!-- Open Graph meta tags -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={fullImageUrl} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:type" content="article" />
	<meta property="og:site_name" content="Chefstore Cookbook" />

	<!-- Twitter meta tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={fullImageUrl} />

	<!-- Article specific meta tags -->
	{#if date}
		<meta property="article:published_time" content={new Date(date).toISOString()} />
	{/if}
	{#if tags && tags.length > 0}
		<meta property="article:tag" content={tags.join(', ')} />
	{/if}

	<!-- Canonical URL -->
	<link rel="canonical" href={canonicalUrl} />

	{#if responsiveImage}
		<link
			rel="preload"
			as="image"
			href={responsiveImage.fallback}
			imagesrcset={responsiveImage.srcset}
			imagesizes={responsiveImage.sizes}
			type="image/webp"
		/>
	{:else if image}
		<link rel="preload" as="image" href={image} type="image/webp" />
	{/if}
</svelte:head>

<article class="recipe-article mx-auto max-w-3xl">
	{#if image}
		<div class="mb-6 overflow-hidden rounded-lg">
			{#if responsiveImage}
				<picture>
					<source srcset={responsiveImage.srcset} sizes={responsiveImage.sizes} type="image/webp" />
					<img
						src={responsiveImage.fallback}
						alt={title}
						class="aspect-video w-full object-cover"
						use:fallbackImage
						width="800"
						height="450"
					/>
				</picture>
			{:else}
				<img
					src={image || '/placeholder.png'}
					srcset={image && image.startsWith('/images/recipes/')
						? `/images/recipes/${slug}/resized/${slug}-400w.webp 400w, /images/recipes/${slug}/resized/${slug}-800w.webp 800w, /images/recipes/${slug}/resized/${slug}-1200w.webp 1200w`
						: undefined}
					sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
					alt={title}
					class="aspect-video w-full object-cover"
					use:fallbackImage
					width="800"
					height="450"
				/>
			{/if}
		</div>
	{/if}

	<header class="mb-8">
		<h1 class="mb-4 text-3xl leading-tight font-bold lg:text-4xl">{title}</h1>

		{#if description}
			<p class="text-muted-foreground mb-6 text-lg">{description}</p>
		{/if}

		<div class="flex flex-wrap items-center gap-x-6 gap-y-2">
			{#if prepTime !== null || cookTime !== null || totalTime !== null}
				<div class="flex items-center gap-2">
					<Clock class="h-5 w-5 text-amber-600" />
					<div class="text-sm">
						{#if totalTime !== null}
							<strong>Total:</strong> {formatTime(totalTime)}
						{:else}
							{#if prepTime !== null}<span><strong>Prep:</strong> {formatTime(prepTime)}</span>{/if}
							{#if prepTime !== null && cookTime !== null}<span class="mx-1">•</span>{/if}
							{#if cookTime !== null}<span><strong>Cook:</strong> {formatTime(cookTime)}</span>{/if}
						{/if}
					</div>
				</div>
			{/if}

			{#if servings !== null}
				<div class="flex items-center gap-2">
					<Users class="h-5 w-5 text-amber-600" />
					<div class="text-sm">
						<strong>Serves:</strong>
						{servings}
					</div>
				</div>
			{/if}

			{#if difficulty}
				<Badge variant="outline" class="text-sm capitalize">{difficulty}</Badge>
			{/if}
		</div>
	</header>

	<div class="prose prose-amber recipe-content max-w-none">
		{#if content}
			{@render content()}
		{/if}
	</div>

	{#if tags && tags.length > 0}
		<div class="mt-8 flex flex-wrap gap-2 border-t pt-6">
			{#each tags.filter((tag: string) => !tag.startsWith('difficulty-')) as tag}
				<Badge variant="secondary" class="text-xs">{tag}</Badge>
			{/each}
		</div>
	{/if}

	{#if showRelatedProducts && relatedProducts && relatedProducts.length > 0}
		<section class="mt-12 border-t pt-8">
			<RelatedProducts productHandles={relatedProducts} />
		</section>
	{/if}
</article>

<style>
	/* Enhanced styling for recipe content */
	:global(.recipe-content h2) {
		font-size: 1.75rem !important;
		margin-top: 2rem !important;
		margin-bottom: 1rem !important;
		font-weight: 600 !important;
		color: #000000 !important;
	}

	:global(.text-amber-600) {
		color: #b45309 !important; /* Tailwind amber-700, contrast ratio ~6.5:1 */
	}

	:global(.recipe-content ul) {
		list-style-type: disc !important;
		padding-left: 1.5rem !important;
		margin: 1rem 0 !important;
	}

	:global(.recipe-content li) {
		margin-bottom: 0.5rem !important;
	}

	:global(.recipe-content p) {
		margin-bottom: 1rem !important;
		line-height: 1.6 !important;
	}

	:global(.recipe-content div[class*='mb-8'] h2) {
		border-bottom: 1px solid #e5e7eb;
		padding-bottom: 0.5rem;
	}

	/* Improve readability of ingredients */
	:global(.recipe-content .ingredients ul) {
		padding-left: 1.75rem !important;
	}

	:global(.recipe-content .ingredients li::marker) {
		color: #000000 !important;
	}

	/* Critical CSS for hero image and layout */
	.recipe-article {
		max-width: 48rem;
		margin-left: auto;
		margin-right: auto;
		padding: 1rem;
		background: #fffdf8;
	}

	.mb-6 {
		margin-bottom: 1.5rem;
	}

	.overflow-hidden {
		overflow: hidden;
	}

	.rounded-lg {
		border-radius: 0.75rem;
	}

	.aspect-video {
		aspect-ratio: 16 / 9;
	}

	.w-full {
		width: 100%;
	}

	.object-cover {
		object-fit: cover;
	}

	.mb-8 {
		margin-bottom: 2rem;
	}

	.text-3xl {
		font-size: 1.875rem;
		line-height: 2.25rem;
	}

	.font-bold {
		font-weight: 700;
	}

	.lg\:text-4xl {
		font-size: 2.25rem;
		line-height: 2.5rem;
	}

	.text-lg {
		font-size: 1.125rem;
		line-height: 1.75rem;
	}

	.text-muted-foreground {
		color: #6b7280;
	}

	.flex {
		display: flex;
	}

	.flex-wrap {
		flex-wrap: wrap;
	}

	.items-center {
		align-items: center;
	}

	.gap-x-6 {
		column-gap: 1.5rem;
	}

	.gap-y-2 {
		row-gap: 0.5rem;
	}

	.text-sm {
		font-size: 0.875rem;
		line-height: 1.25rem;
	}

	/* Removed duplicate .rounded-lg as it was already defined above */
</style>
