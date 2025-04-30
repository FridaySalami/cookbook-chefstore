<script lang="ts">
	import type { PageData } from './$types';
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import * as Button from '$lib/components/ui/button';
	import { Clock, Users, ChevronLeft, ChevronRight } from 'lucide-svelte';

	export let data: PageData; // Keep this - it's reactive

	// --- Make Categorized Tags Reactive ---
	$: difficultyTags = data.allTags.filter((tag) => tag.startsWith('difficulty-'));
	// Ensure dietaryKeywords are lowercase for consistent matching
	const dietaryKeywords = ['chicken', 'plant-based', 'vegan', 'vegetarian', 'thai', 'curry'];
	$: dietaryTags = data.allTags.filter((tag) => dietaryKeywords.includes(tag));
	$: otherTags = data.allTags.filter(
		(tag) => !tag.startsWith('difficulty-') && !dietaryKeywords.includes(tag)
	);
	// --- End Categorize Tags ---

	// --- Make ItemList Schema Reactive ---
	const siteBaseUrl = 'https://chefstorecookbook.netlify.app';
	$: itemListSchema = {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		// Use data.recipes and data.currentPage directly
		itemListElement: data.recipes.map((recipe, index) => ({
			'@type': 'ListItem',
			position: (data.currentPage - 1) * 12 + index + 1,
			url: `${siteBaseUrl}/recipes/${recipe.slug}`
		}))
	};
	// --- End ItemList Schema ---

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

	// Helper function to get difficulty from tags
	function getDifficultyFromTags(tags: string[] | undefined): string {
		if (!tags) return 'N/A';
		const difficultyTag = tags.find((tag) => tag.startsWith('difficulty-'));
		return difficultyTag ? difficultyTag.replace('difficulty-', '') : 'N/A'; // Return 'N/A' or a default if no tag found
	}

	// Helper to create pagination/filter URLs - Use data.selectedTag
	function getPageUrl(pageNumber: number): string {
		const params = new URLSearchParams();
		if (data.selectedTag) {
			// Use data.selectedTag
			params.set('tag', data.selectedTag);
		}
		params.set('page', pageNumber.toString());
		return `/recipes?${params.toString()}`;
	}

	// getTagUrl is fine as it receives the tag argument directly

	function getTagUrl(tag: string | null): string {
		// If the clicked tag is the currently selected tag, return the base recipes URL to clear the filter.
		if (tag && tag === data.selectedTag) {
			return '/recipes';
		}

		if (!tag) {
			return '/recipes';
		}
		const params = new URLSearchParams();
		params.set('tag', tag); // tag is already lowercase from reactive allTags
		params.set('page', '1');
		return `/recipes?${params.toString()}`;
	}

	// Helper function to format tags
	function formatTag(tag: string) {
		// Handle difficulty tags separately if needed, or apply general formatting
		if (tag.startsWith('difficulty-')) {
			// Example: Keep 'Easy', 'Medium', 'Hard' as is after removing prefix
			const difficulty = tag.replace('difficulty-', '');
			return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
		}
		// General title case formatting for other tags
		return tag
			.split('-')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	}
</script>

<svelte:head>
	<!-- Use data.selectedTag -->
	<title
		>{data.selectedTag ? `Recipes tagged "${formatTag(data.selectedTag)}"` : 'All Recipes'} | Chefstore
		Recipe Hub</title
	>
	<meta
		name="description"
		content={data.selectedTag
			? `Browse recipes tagged with "${formatTag(data.selectedTag)}".`
			: 'Discover our collection of delicious recipes for every occasion.'}
	/>
	<!-- Use data.currentPage and data.totalPages -->
	{#if data.currentPage > 1}
		<link rel="prev" href={getPageUrl(data.currentPage - 1)} />
	{/if}
	{#if data.currentPage < data.totalPages}
		<link rel="next" href={getPageUrl(data.currentPage + 1)} />
	{/if}

	<!-- ItemList JSON-LD - Use data.recipes -->
	{#if data.recipes.length > 0}
		{@html (() => {
			// itemListSchema is now reactive ($:)
			const safeJsonString = JSON.stringify(itemListSchema, null, 2).replace(/</g, '\\u003c');
			return `<script type="application/ld+json">${safeJsonString}</script>`;
		})()}
	{/if}
</svelte:head>

<section class="bg-background text-foreground px-6 pt-10 pb-20 sm:px-10 md:px-16 lg:px-20">
	<div class="container mx-auto max-w-7xl">
		<header class="mb-16 text-center">
			<!-- Change H1 to be static -->
			<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">All Recipes</h1>
			<p class="mx-auto mt-4 max-w-2xl text-xl text-[hsl(var(--muted-foreground))]">
				Browse our collection of chef-tested recipes for every meal and occasion.
			</p>

			<!-- Categorized Tag Filters - Use data.selectedTag -->
			<div class="mt-8 flex flex-col items-center gap-4">
				<div class="mb-2">
					<Button.Root
						href={getTagUrl(null)}
						variant={data.selectedTag === null ? 'default' : 'outline'}
						size="sm"
						aria-current={data.selectedTag === null ? 'page' : undefined}
					>
						All Recipes
					</Button.Root>
				</div>
				{#if difficultyTags.length > 0}
					<div class="flex flex-wrap justify-center gap-2 sm:gap-3">
						{#each difficultyTags as tag}
							<Button.Root
								href={getTagUrl(tag)}
								variant={data.selectedTag === tag ? 'default' : 'outline'}
								size="sm"
								class="capitalize"
								aria-current={data.selectedTag === tag ? 'page' : undefined}
							>
								{formatTag(tag)}
							</Button.Root>
						{/each}
					</div>
				{/if}
				{#if dietaryTags.length > 0}
					<div class="flex flex-wrap justify-center gap-2 sm:gap-3">
						{#each dietaryTags as tag}
							<Button.Root
								href={getTagUrl(tag)}
								variant={data.selectedTag === tag ? 'default' : 'outline'}
								size="sm"
								aria-current={data.selectedTag === tag ? 'page' : undefined}
							>
								{formatTag(tag)}
							</Button.Root>
						{/each}
					</div>
				{/if}
				{#if otherTags.length > 0}
					<div class="flex flex-wrap justify-center gap-2 sm:gap-3">
						{#each otherTags as tag}
							<Button.Root
								href={getTagUrl(tag)}
								variant={data.selectedTag === tag ? 'default' : 'outline'}
								size="sm"
								aria-current={data.selectedTag === tag ? 'page' : undefined}
							>
								{formatTag(tag)}
							</Button.Root>
						{/each}
					</div>
				{/if}
			</div>
		</header>

		<!-- Add container for filter heading and count -->
		<div class="mb-6 text-center">
			<!-- Conditionally render the selected tag heading -->
			{#if data.selectedTag}
				<h2 class="mb-1 text-2xl font-semibold tracking-tight">
					Filtered by: <span class="capitalize">{formatTag(data.selectedTag)}</span>
				</h2>
			{/if}

			<!-- Recipe count -->
			{#if data.totalRecipes !== undefined}
				<p class="text-muted-foreground text-sm">
					Showing {data.recipes.length} of {data.totalRecipes} recipes.
				</p>
			{/if}
		</div>

		<!-- Recipe grid - Use data.recipes -->
		{#if data.recipes.length > 0}
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{#each data.recipes as recipe (recipe.slug)}
					<!-- Use data.recipes and add key -->
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
									<!-- Display Tags -->
									{#if recipe.tags && recipe.tags.length > 0}
										<div class="mt-2 flex flex-wrap gap-1">
											{#each recipe.tags as tag}
												<Badge variant="secondary">{formatTag(tag)}</Badge>
											{/each}
										</div>
									{/if}
								</Card.Content>
								<Card.Footer class="mt-auto flex items-center justify-between p-4 pt-0">
									<div class="text-muted-foreground flex items-center gap-1 text-xs">
										<Clock class="h-4 w-4" />
										<span>{recipe.totalTime || 'N/A'} min</span>
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
		{:else}
			<!-- Update empty state message slightly -->
			<p class="text-muted-foreground col-span-full text-center">
				No recipes found{data.selectedTag
					? ` matching the tag "${formatTag(data.selectedTag)}"`
					: ''}. Try removing the filter.
			</p>
		{/if}

		<!-- Pagination Controls - Use data.totalPages and data.currentPage -->
		{#if data.totalPages > 1}
			<nav aria-label="Recipe pagination" class="mt-12 flex items-center justify-center gap-4">
				{#if data.currentPage > 1}
					<Button.Root href={getPageUrl(data.currentPage - 1)} variant="outline" size="sm">
						<ChevronLeft class="mr-2 h-4 w-4" />
						Previous
					</Button.Root>
				{:else}
					<Button.Root variant="outline" size="sm" disabled>
						<ChevronLeft class="mr-2 h-4 w-4" />
						Previous
					</Button.Root>
				{/if}

				<span class="text-muted-foreground text-sm">
					Page {data.currentPage} of {data.totalPages}
				</span>

				{#if data.currentPage < data.totalPages}
					<Button.Root href={getPageUrl(data.currentPage + 1)} variant="outline" size="sm">
						Next
						<ChevronRight class="ml-2 h-4 w-4" />
					</Button.Root>
				{:else}
					<Button.Root variant="outline" size="sm" disabled>
						Next
						<ChevronRight class="ml-2 h-4 w-4" />
					</Button.Root>
				{/if}
			</nav>
		{/if}
	</div>
</section>
