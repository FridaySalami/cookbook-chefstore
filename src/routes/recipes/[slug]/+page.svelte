<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { formatDuration } from '$lib/utils';
	import {
		Breadcrumb,
		BreadcrumbItem,
		BreadcrumbLink,
		BreadcrumbList,
		BreadcrumbPage,
		BreadcrumbSeparator
	} from '$lib/components/ui/breadcrumb';
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { Clock, Users } from 'lucide-svelte';
	import RecipeLayout from '$lib/layouts/RecipeLayout.svelte';
	import { marked } from 'marked';
	import { onMount } from 'svelte';
	import RelatedProducts from '$lib/components/RelatedProducts.svelte';

	export let data: PageData;

	// Parse the raw markdown content
	// Use strings for the rendered HTML content
	let parsedContent = '';
	let whyYouLlLoveThis = '';
	let ingredients = '';
	let instructions = '';
	let tips = '';
	let goesGreatWith = '';

	// Process the markdown content to extract sections
	const processMdContent = async () => {
		// Clear previous content to ensure no stale data
		parsedContent = '';
		whyYouLlLoveThis = '';
		ingredients = '';
		instructions = '';
		tips = '';
		goesGreatWith = '';

		if (!data.rawContent) {
			// If there's no raw content, ensure everything is cleared and exit
			return;
		}

		try {
			// Parse the markdown content to HTML using marked
			parsedContent = await marked(data.rawContent);

			// Extract specific sections from the raw markdown
			const sections = data.rawContent.split(/^##\s+/m).filter(Boolean);

			// Process each section asynchronously
			for (const section of sections) {
				const sectionLines = section.trim().split('\n');
				const title = sectionLines[0].trim();

				// Get the content excluding the title
				const content = sectionLines.slice(1).join('\n').trim();

				// Process each section asynchronously with marked
				const renderedContent = await marked(content);

				// Assign the rendered content to the appropriate section
				if (title === "Why You'll Love This") {
					whyYouLlLoveThis = renderedContent;
				} else if (title === 'Ingredients') {
					ingredients = renderedContent;
				} else if (title === 'Instructions') {
					instructions = renderedContent;
				} else if (title === 'Tips') {
					tips = renderedContent;
				} else if (title === 'Goes Great With') {
					goesGreatWith = renderedContent;
				}
			}
		} catch (error) {
			console.error('Error parsing markdown:', error);
		}
	};

	// Process markdown on mount for initial load
	onMount(() => {
		processMdContent();
	});

	// Reactively call processMdContent when data.rawContent changes
	// This handles updates when navigating between recipes
	$: if (data?.rawContent) {
		processMdContent();
	} else {
		// Explicitly clear content if data or rawContent becomes unavailable after initial load
		parsedContent = '';
		whyYouLlLoveThis = '';
		ingredients = '';
		instructions = '';
		tips = '';
		goesGreatWith = '';
	}

	// Assuming recipe title is available like this, adjust if needed
	const recipeTitle = data.metadata?.title ?? 'Recipe';

	// Define a type for the schema object to allow string indexing
	type RecipeSchema = {
		'@context': string;
		'@type': string;
		name?: string;
		image?: string[];
		author?: { '@type': string; name: string };
		description?: string;
		datePublished?: string;
		prepTime?: string | null;
		cookTime?: string | null;
		totalTime?: string | null;
		recipeYield?: string;
		recipeCategory?: string;
		keywords?: string;
		recipeIngredient?: string[];
		recipeInstructions?: { '@type': 'HowToStep'; text: string }[];
		recipeCuisine?: string;
		[key: string]: any;
	};

	// Define your site's base URL
	const siteBaseUrl = 'https://chefstorecookbook.netlify.app';

	// Construct the JSON-LD schema object
	const schema: RecipeSchema = {
		'@context': 'https://schema.org',
		'@type': 'Recipe',
		name: data.metadata?.title,
		image: data.metadata?.image
			? [siteBaseUrl + (data.metadata.image.startsWith('/') ? '' : '/') + data.metadata.image]
			: undefined,
		author: {
			'@type': 'Organization',
			name: 'Chefstore Cookbook'
		},
		description: data.metadata?.description,
		datePublished: data.metadata?.date
			? new Date(data.metadata.date).toISOString().split('T')[0]
			: undefined,
		prepTime: formatDuration(data.metadata?.prepTime),
		cookTime: formatDuration(data.metadata?.cookTime),
		totalTime: formatDuration(data.metadata?.totalTime),
		recipeYield: data.metadata?.servings ? `${data.metadata.servings} servings` : undefined,
		recipeCategory: data.metadata?.categories?.join(', '),
		keywords: data.metadata?.tags?.join(', '),
		recipeIngredient:
			data.ingredients && data.ingredients.length > 0 ? data.ingredients : undefined,
		recipeInstructions:
			data.instructions && data.instructions.length > 0 ? data.instructions : undefined,
		recipeCuisine: data.metadata?.recipeCuisine?.join(', ')
	};

	// Remove undefined or null properties from schema for cleaner output
	Object.keys(schema).forEach((key) => {
		if (schema[key] === undefined || schema[key] === null) {
			delete schema[key];
		}
	});

	// Remove image array if it ended up empty or with an invalid URL
	if (schema.image && (!schema.image[0] || !data.metadata?.image)) {
		delete schema.image;
	}

	// Helper function to get difficulty from tags
	function getDifficultyFromTags(tags: string[] | undefined): string {
		if (!tags) return 'N/A';
		const difficultyTag = tags.find((tag) => tag.startsWith('difficulty-'));
		return difficultyTag ? difficultyTag.replace('difficulty-', '') : 'N/A';
	}

	// Helper functions to convert time values to numbers
	function convertToNumber(value: string | number | undefined): number | null | undefined {
		if (value === undefined) return undefined;
		if (value === null) return null;

		// If it's already a number, return it
		if (typeof value === 'number') return value;

		// Try to convert string to number
		const parsed = parseInt(value, 10);
		return isNaN(parsed) ? null : parsed;
	}

	// Process recipe metadata time values
	const prepTimeNum = convertToNumber(data.metadata.prepTime);
	const cookTimeNum = convertToNumber(data.metadata.cookTime);
	const totalTimeNum = convertToNumber(data.metadata.totalTime);
</script>

<svelte:head>
	<title>{recipeTitle} | Chefstore Cookbook</title>
	{#if data.metadata?.description}
		<meta name="description" content={data.metadata.description} />
	{/if}

	<!-- Canonical URL -->
	<link
		rel="canonical"
		href={`https://www.chefstorecookbook.netlify.app/recipes/${$page.params.slug}`}
	/>

	<!-- Construct and render JSON-LD directly inside @html -->
	{#if Object.keys(schema).length > 2}
		{@html (() => {
			const safeJsonString = JSON.stringify(schema, null, 2).replace(/</g, '\\u003c');
			return `<script type="application/ld+json">${safeJsonString}</script>`;
		})()}
	{/if}
</svelte:head>

<div class="container mx-auto px-4 py-6">
	<!-- Breadcrumb navigation -->
	<Breadcrumb class="mb-6">
		<BreadcrumbList>
			<BreadcrumbItem>
				<BreadcrumbLink href="/">Home</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbLink href="/recipes">Recipes</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbSeparator />
			<BreadcrumbItem>
				<BreadcrumbPage>{recipeTitle}</BreadcrumbPage>
			</BreadcrumbItem>
		</BreadcrumbList>
	</Breadcrumb>

	<!-- Use RecipeLayout for consistent recipe display -->
	<RecipeLayout
		title={data.metadata.title}
		description={data.metadata.description}
		image={data.metadata.image}
		prepTime={prepTimeNum}
		cookTime={cookTimeNum}
		totalTime={totalTimeNum}
		difficulty={data.metadata.difficulty}
		servings={data.metadata.servings}
		tags={data.metadata.tags}
		relatedProducts={data.relatedProducts}
	>
		{#snippet content()}
			<!-- Render the parsed markdown content by section -->
			{#if whyYouLlLoveThis}
				<div class="mb-8">
					<h2 class="border-border mb-4 border-b pb-2 text-xl font-semibold">
						Why You'll Love This
					</h2>
					{@html whyYouLlLoveThis}
				</div>
			{/if}

			{#if ingredients}
				<div class="mb-8">
					<h2 class="border-border mb-4 border-b pb-2 text-xl font-semibold">Ingredients</h2>
					{@html ingredients}
				</div>
			{/if}

			<!-- Shopify Related Products (from frontmatter) -->
			{#if data.relatedProducts && data.relatedProducts.length > 0}
				<div class="mb-8">
					<RelatedProducts productHandles={data.relatedProducts} />
				</div>
			{/if}

			{#if instructions}
				<div class="mb-8">
					<h2 class="border-border mb-4 border-b pb-2 text-xl font-semibold">Instructions</h2>
					{@html instructions}
				</div>
			{/if}

			{#if tips}
				<div class="mb-8">
					<h2 id="tips" class="border-border mb-4 border-b pb-2 text-xl font-semibold">Tips</h2>
					{@html tips}
				</div>
			{/if}

			{#if goesGreatWith}
				<div class="mb-8">
					<h2 id="goes-great-with" class="border-border mb-4 border-b pb-2 text-xl font-semibold">
						Goes Great With
					</h2>
					{@html goesGreatWith}
				</div>
			{/if}
		{/snippet}
	</RecipeLayout>

	<!-- Related Recipes Section - Outside the RecipeLayout -->
	{#if data.relatedRecipes && data.relatedRecipes.length > 0}
		<section class="mx-auto mt-12 max-w-2xl border-t pt-8">
			<h2 class="mb-6 text-2xl font-bold tracking-tight">You might also like</h2>
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2">
				{#each data.relatedRecipes as recipe (recipe.slug)}
					<a href={`/recipes/${recipe.slug}`} class="group block">
						<Card.Root
							class="flex h-full flex-col overflow-hidden transition-all group-hover:-translate-y-1 group-hover:shadow-lg"
						>
							<Card.Header class="relative p-0">
								<img
									src={recipe.image || '/placeholder.png'}
									alt={recipe.title}
									class="aspect-video w-full object-cover"
									loading="lazy"
								/>
								<Badge
									variant="secondary"
									class="absolute top-3 right-3 border border-white/20 bg-black/60 text-white capitalize backdrop-blur-sm"
								>
									{getDifficultyFromTags(recipe.tags)}
								</Badge>
							</Card.Header>
							<Card.Content class="flex-grow p-4">
								<Card.Title class="mb-1 text-base leading-tight font-semibold tracking-tight">
									{recipe.title}
								</Card.Title>
								{#if recipe.description}
									<Card.Description class="text-muted-foreground mb-3 line-clamp-2 text-sm">
										{recipe.description}
									</Card.Description>
								{/if}
							</Card.Content>
							<Card.Footer class="mt-auto flex items-center justify-between p-4 pt-0">
								<div class="text-muted-foreground flex items-center gap-1 text-xs">
									<Clock class="h-4 w-4" />
									<span>{recipe.totalTime ? `${recipe.totalTime} min` : 'N/A'}</span>
								</div>
								{#if recipe.servings}
									<div class="text-muted-foreground flex items-center gap-1 text-xs">
										<Users class="h-4 w-4" />
										<span>{recipe.servings} servings</span>
									</div>
								{/if}
							</Card.Footer>
						</Card.Root>
					</a>
				{/each}
			</div>
		</section>
	{/if}
</div>
