<script lang="ts">
	import { page } from '$app/stores';
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Clock, Users } from 'lucide-svelte';
	import type { Snippet } from 'svelte';

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

	// Helper to generate responsive image srcset and path
	function getResponsiveImageData(image: string, slug: string) {
		if (!image || !image.startsWith('/images/recipes/')) return null;
		const folder = image.substring(0, image.lastIndexOf('/'));
		const resizedFolder = `${folder}/resized`;
		const widths = [400, 800, 1200];
		const srcset = widths.map((w) => `${resizedFolder}/${slug}-${w}w.webp ${w}w`).join(', ');
		return {
			srcset,
			sizes: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px',
			fallback: image
		};
	}

	let responsiveImage = $derived.by(() => getResponsiveImageData(image, slug));

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
</svelte:head>

<article class="recipe-article mx-auto max-w-3xl">
	<!-- Hero image at the top -->
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
		<!-- Title follows the hero image -->
		<h1 class="mb-4 text-3xl leading-tight font-bold lg:text-4xl">{title}</h1>

		<!-- Description follows the title -->
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

		{#if tags && tags.length > 0}
			<div class="mt-4 flex flex-wrap gap-2">
				{#each tags.filter((tag: string) => !tag.startsWith('difficulty-')) as tag}
					<Badge variant="secondary" class="text-xs">{tag}</Badge>
				{/each}
			</div>
		{/if}
	</header>

	<div class="prose prose-amber recipe-content max-w-none">
		{#if content}
			{@render content()}
		{/if}
	</div>
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
</style>
