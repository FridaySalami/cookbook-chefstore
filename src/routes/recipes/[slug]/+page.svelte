<script lang="ts">
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

	export let data;

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
		[key: string]: any; // Allow string indexing
	};

	// Construct the JSON-LD schema object
	const schema: RecipeSchema = {
		'@context': 'https://schema.org',
		'@type': 'Recipe',
		name: data.metadata?.title,
		image: data.metadata?.image
			? [
					// Construct the full image URL - adjust base URL if needed
					$page.url.origin + (data.metadata.image.startsWith('/') ? '' : '/') + data.metadata.image
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
		keywords: data.metadata?.tags?.join(', ')
		// Placeholder: Ingredients and instructions ideally parsed from MD content
		// recipeIngredient: [],
		// recipeInstructions: []
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
</script>

<svelte:head>
	<title>{recipeTitle} | Chefstore Cookbook</title>
	{#if data.metadata?.description}
		<meta name="description" content={data.metadata.description} />
	{/if}
	<!-- Add JSON-LD Schema -->
	{#if Object.keys(schema).length > 2}
		<script type="application/ld+json">
		{JSON.stringify(schema, null, 2)}
		</script>
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
