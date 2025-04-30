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

	// NOTE: Removed the jsonLdScript variable and its construction logic
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
