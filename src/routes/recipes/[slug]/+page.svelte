<script lang="ts">
	import type { PageData } from './$types'; // Import PageData
	import { page } from '$app/stores'; // Import page store for URL
	import { formatDuration } from '$lib/utils'; // Import the helper function
	import {
		Breadcrumb,
		BreadcrumbItem,
		BreadcrumbLink,
		BreadcrumbList,
		BreadcrumbPage,
		BreadcrumbSeparator
	} from '$lib/components/ui/breadcrumb';
	import * as Card from '$lib/components/ui/card'; // Import Card components
	import { Badge } from '$lib/components/ui/badge'; // Import Badge
	import { Clock, Users } from 'lucide-svelte'; // Import icons

	export let data: PageData; // Explicitly type data with PageData

	// Assuming recipe title is available like this, adjust if needed
	const recipeTitle = data.metadata?.title ?? 'Recipe';

	// Define a type for the HowToStep object used in instructions
	interface HowToStep {
		'@type': 'HowToStep';
		text: string;
	}

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
		recipeInstructions?: HowToStep[];
		recipeCuisine?: string; // <-- Add this (as string)
		[key: string]: any; // Allow string indexing
	};

	// Define your site's base URL
	const siteBaseUrl = 'https://chefstorecookbook.netlify.app';

	// Construct the JSON-LD schema object
	const schema: RecipeSchema = {
		'@context': 'https://schema.org',
		'@type': 'Recipe',
		name: data.metadata?.title,
		image: data.metadata?.image
			? [
					// Use the defined siteBaseUrl instead of $page.url.origin
					siteBaseUrl + (data.metadata.image.startsWith('/') ? '' : '/') + data.metadata.image
				]
			: undefined,
		author: {
			'@type': 'Organization',
			name: 'Chefstore Cookbook' // Or your site/author name
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
		// Use parsed ingredients and instructions from load function
		recipeIngredient:
			data.ingredients && data.ingredients.length > 0 ? data.ingredients : undefined,
		recipeInstructions:
			data.instructions && data.instructions.length > 0 ? data.instructions : undefined,
		// Add recipeCuisine, joining the array if it exists
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

	// Helper function to get difficulty (can reuse from recipes/+page.svelte or define here)
	function getDifficultyFromTags(tags: string[] | undefined): string {
		if (!tags) return 'N/A';
		const difficultyTag = tags.find((tag) => tag.startsWith('difficulty-'));
		return difficultyTag ? difficultyTag.replace('difficulty-', '') : 'N/A';
	}

	/** @type {import('svelte/action').Action<HTMLImageElement>} */
	function fallbackImage(node: HTMLImageElement) {
		const handleError = () => {
			node.src = '/placeholder.png'; // Use your placeholder image path
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
			// Escape '<' for HTML safety
			const safeJsonString = JSON.stringify(schema, null, 2).replace(/</g, '\\u003c');
			// Return the full script tag string
			return `<script type="application/ld+json">${safeJsonString}</script>`;
		})()}
	{/if}
</svelte:head>

<Breadcrumb class="mb-4">
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

<svelte:component this={data.component} />

<!-- Related Recipes Section -->
{#if data.relatedRecipes && data.relatedRecipes.length > 0}
	<section class="mt-16 border-t pt-12">
		<h2 class="mb-8 text-3xl font-bold tracking-tight">You might also like</h2>
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{#each data.relatedRecipes as recipe (recipe.slug)}
				<a href={`/recipes/${recipe.slug}`} class="group block">
					<article>
						<Card.Root
							class="flex h-full flex-col overflow-hidden transition-all group-hover:-translate-y-1 group-hover:shadow-lg"
						>
							<Card.Header class="relative p-0">
								<img
									src={recipe.image || '/placeholder.png'}
									alt={recipe.title}
									class="aspect-video w-full object-cover"
									use:fallbackImage
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
								<Card.Title class="mb-1 text-lg leading-tight font-semibold tracking-tight">
									{recipe.title}
								</Card.Title>
								{#if recipe.description}
									<Card.Description class="text-muted-foreground mb-3 line-clamp-3 text-sm">
										{recipe.description}
									</Card.Description>
								{/if}
								{#if recipe.tags && recipe.tags.length > 0}
									<div class="mt-2 flex flex-wrap gap-1">
										{#each recipe.tags as tag}
											<Badge variant="secondary">{tag}</Badge>
										{/each}
									</div>
								{/if}
							</Card.Content>
							<Card.Footer class="mt-auto flex items-center justify-between p-4 pt-0">
								<div class="text-muted-foreground flex items-center gap-1 text-xs">
									<Clock class="h-4 w-4" />
									<!-- Display totalTime if available, otherwise 'N/A' -->
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
					</article>
				</a>
			{/each}
		</div>
	</section>
{/if}
