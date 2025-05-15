<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores'; // Import page store
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import * as Button from '$lib/components/ui/button';
	import { Clock, Users, ChevronLeft, ChevronRight } from 'lucide-svelte';
	import RecipeSearch from '$lib/components/RecipeSearch.svelte';
	import { goto } from '$app/navigation';

	export let data: PageData;

	const itemsPerPage = 12; // Define how many recipes per page

	// Derive selectedTag and currentPage from URL
	$: selectedTag = $page.url.searchParams.get('tag');
	$: currentPage = parseInt($page.url.searchParams.get('page') || '1');

	// Filter recipes based on selectedTag
	$: filteredRecipes = selectedTag
		? (data.recipes || []).filter((recipe) => recipe.tags?.includes(selectedTag!))
		: data.recipes || [];

	// Update totalRecipes and totalPages based on filtered recipes
	$: totalRecipes = filteredRecipes.length;
	$: totalPages = Math.ceil(totalRecipes / itemsPerPage);

	// Paginate the filtered recipes
	$: displayedRecipes = filteredRecipes.slice(
		(currentPage - 1) * itemsPerPage,
		currentPage * itemsPerPage
	);

	// Use data.tags instead of allTags
	$: difficultyTags = data.tags?.filter((tag) => tag.startsWith('difficulty-')) || [];
	const dietaryKeywords = ['chicken', 'plant-based', 'vegan', 'vegetarian', 'thai', 'curry'];
	$: dietaryTags = data.tags?.filter((tag) => dietaryKeywords.includes(tag)) || [];
	$: otherTags =
		data.tags?.filter((tag) => !tag.startsWith('difficulty-') && !dietaryKeywords.includes(tag)) ||
		[];

	// --- Make ItemList Schema Reactive ---
	const siteBaseUrl = 'https://chefstorecookbook.netlify.app';
	$: itemListSchema = {
		'@context': 'https://schema.org',
		'@type': 'ItemList',
		itemListElement: displayedRecipes.map((recipe, index) => ({
			'@type': 'ListItem',
			position: (currentPage - 1) * itemsPerPage + index + 1, // Use itemsPerPage
			url: `${siteBaseUrl}/recipes/${recipe.slug}`
		}))
	};

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
	function getDifficultyFromTags(tags: string[] | undefined): string | null {
		if (!tags) return null;
		const difficultyTag = tags.find((tag) => tag.startsWith('difficulty-'));
		if (!difficultyTag) return null;
		const value = difficultyTag.replace('difficulty-', '');
		return value.charAt(0).toUpperCase() + value.slice(1);
	}

	// Helper to create pagination/filter URLs
	function getPageUrl(pageNumber: number): string {
		const params = new URLSearchParams();
		if (selectedTag) {
			params.set('tag', selectedTag);
		}
		params.set('page', pageNumber.toString());
		return `/recipes?${params.toString()}`;
	}

	function getTagUrl(tag: string | null): string {
		if (tag && tag === selectedTag) {
			return '/recipes';
		}

		if (!tag) {
			return '/recipes';
		}
		const params = new URLSearchParams();
		params.set('tag', tag);
		params.set('page', '1');
		return `/recipes?${params.toString()}`;
	}

	// Helper function to format tags
	function formatTag(tag: string) {
		if (tag.startsWith('difficulty-')) {
			const difficulty = tag.replace('difficulty-', '');
			return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
		}
		return tag
			.split('-')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');
	}

	// Helper to get resized image path from a static folder structure
	function getResizedImagePath(slug: string, width: number) {
		// All images are in static/images/recipes/category-name/recipe-name/resized/
		// and named as [slug]-[width]w.webp
		return `/images/recipes/category-name/recipe-name/resized/${slug}-${width}w.webp`;
	}

	/**
	 * @typedef {Object} RecipeSearchRecipe
	 * @property {string} title
	 * @property {string} slug
	 */
</script>

<svelte:head>
	<title
		>{selectedTag ? `Recipes tagged "${formatTag(selectedTag)}"` : 'All Recipes'} | Chefstore Recipe
		Hub</title
	>
	<meta
		name="description"
		content={selectedTag
			? `Browse recipes tagged with "${formatTag(selectedTag)}".`
			: 'Discover our collection of delicious recipes for every occasion.'}
	/>
	{#if currentPage > 1}
		<link rel="prev" href={getPageUrl(currentPage - 1)} />
	{/if}
	{#if currentPage < totalPages && totalPages > 1}
		<link rel="next" href={getPageUrl(currentPage + 1)} />
	{/if}

	{#if displayedRecipes.length > 0}
		{@html (() => {
			const safeJsonString = JSON.stringify(itemListSchema, null, 2).replace(/</g, '\\u003c');
			return `<script type="application/ld+json">${safeJsonString}</script>`;
		})()}
	{/if}
</svelte:head>

<section class="bg-background text-foreground px-6 pt-10 pb-20 sm:px-10 md:px-16 lg:px-20">
	<div class="container mx-auto max-w-7xl">
		<header class="mb-16 text-center">
			<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">All Recipes</h1>
			<p class="mx-auto mt-4 max-w-2xl pb-6 text-xl text-[hsl(var(--muted-foreground))]">
				Browse our collection of chef-tested recipes for every meal and occasion.
			</p>

			<!-- Recipe Search Bar -->
			<RecipeSearch
				recipes={data.recipes ? data.recipes.map((r) => ({ title: r.title, slug: r.slug })) : []}
				on:select={(e) => {
					if (e.detail.tag) {
						const params = new URLSearchParams();
						params.set('tag', e.detail.tag);
						params.set('page', '1');
						goto(`/recipes?${params.toString()}`);
					} else if (e.detail.recipe) {
						goto(`/recipes/${e.detail.recipe.slug}`);
					}
				}}
				placeholder="Search recipes..."
			/>

			<!-- Categorized Tag Filters -->
			<details class="mb-6 w-full text-center sm:hidden">
				<summary class="cursor-pointer py-2 font-medium">Filter Tags</summary>
				<nav aria-label="Recipe tags" class="mt-4 flex flex-col items-center gap-4">
					<div class="mb-2">
						<Button.Root
							on:click={(e) => {
								e.preventDefault();
								goto(getTagUrl(null), { keepFocus: true, noScroll: true });
							}}
							href={getTagUrl(null)}
							variant={selectedTag === null ? 'default' : 'outline'}
							size="sm"
							class={selectedTag === null ? 'selected' : ''}
							aria-current={selectedTag === null ? 'page' : undefined}
						>
							All Recipes
						</Button.Root>
					</div>
					{#if difficultyTags.length > 0}
						<div class="flex flex-wrap justify-center gap-2 sm:gap-3">
							{#each difficultyTags as tag}
								<Button.Root
									on:click={(e) => {
										e.preventDefault();
										goto(getTagUrl(tag), { keepFocus: true, noScroll: true });
									}}
									href={getTagUrl(tag)}
									variant={selectedTag === tag ? 'default' : 'outline'}
									size="sm"
									class={`capitalize${selectedTag === tag ? ' selected' : ''}`}
									aria-current={selectedTag === tag ? 'page' : undefined}
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
									on:click={(e) => {
										e.preventDefault();
										goto(getTagUrl(tag), { keepFocus: true, noScroll: true });
									}}
									href={getTagUrl(tag)}
									variant={selectedTag === tag ? 'default' : 'outline'}
									size="sm"
									class={`capitalize${selectedTag === tag ? ' selected' : ''}`}
									aria-current={selectedTag === tag ? 'page' : undefined}
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
									on:click={(e) => {
										e.preventDefault();
										goto(getTagUrl(tag), { keepFocus: true, noScroll: true });
									}}
									href={getTagUrl(tag)}
									variant={selectedTag === tag ? 'default' : 'outline'}
									size="sm"
									class={`capitalize${selectedTag === tag ? ' selected' : ''}`}
									aria-current={selectedTag === tag ? 'page' : undefined}
								>
									{formatTag(tag)}
								</Button.Root>
							{/each}
						</div>
					{/if}
				</nav>
			</details>

			<!-- Desktop tag filters -->
			<nav aria-label="Recipe tags" class="mt-8 hidden flex-col items-center gap-4 sm:flex">
				<div class="mb-2">
					<Button.Root
						on:click={(e) => {
							e.preventDefault();
							goto(getTagUrl(null), { keepFocus: true, noScroll: true });
						}}
						href={getTagUrl(null)}
						variant={selectedTag === null ? 'default' : 'outline'}
						size="sm"
						class={selectedTag === null ? 'selected' : ''}
						aria-current={selectedTag === null ? 'page' : undefined}
					>
						All Recipes
					</Button.Root>
				</div>
				{#if difficultyTags.length > 0}
					<div class="flex flex-wrap justify-center gap-2 sm:gap-3">
						{#each difficultyTags as tag}
							<Button.Root
								on:click={(e) => {
									e.preventDefault();
									goto(getTagUrl(tag), { keepFocus: true, noScroll: true });
								}}
								href={getTagUrl(tag)}
								variant={selectedTag === tag ? 'default' : 'outline'}
								size="sm"
								class={`capitalize${selectedTag === tag ? ' selected' : ''}`}
								aria-current={selectedTag === tag ? 'page' : undefined}
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
								on:click={(e) => {
									e.preventDefault();
									goto(getTagUrl(tag), { keepFocus: true, noScroll: true });
								}}
								href={getTagUrl(tag)}
								variant={selectedTag === tag ? 'default' : 'outline'}
								size="sm"
								class={`capitalize${selectedTag === tag ? ' selected' : ''}`}
								aria-current={selectedTag === tag ? 'page' : undefined}
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
								on:click={(e) => {
									e.preventDefault();
									goto(getTagUrl(tag), { keepFocus: true, noScroll: true });
								}}
								href={getTagUrl(tag)}
								variant={selectedTag === tag ? 'default' : 'outline'}
								size="sm"
								class={`capitalize${selectedTag === tag ? ' selected' : ''}`}
								aria-current={selectedTag === tag ? 'page' : undefined}
							>
								{formatTag(tag)}
							</Button.Root>
						{/each}
					</div>
				{/if}
			</nav>
		</header>

		<!-- Add container for filter heading and count -->
		<div class="mb-6 text-center">
			<!-- Conditionally render the selected tag heading -->
			{#if selectedTag}
				<h2 class="mb-1 text-2xl font-semibold tracking-tight">
					Filtered by: <span class="capitalize">{formatTag(selectedTag)}</span>
				</h2>
			{/if}

			<!-- Recipe count -->
			<p class="text-muted-foreground text-sm">
				Showing {displayedRecipes.length} of {totalRecipes} recipes.
			</p>
		</div>

		<!-- Pagination Controls - Show only if totalPages > 1 -->
		{#if totalPages > 1}
			<nav aria-label="Recipe pagination" class="mb-8 flex items-center justify-center gap-4">
				{#if currentPage > 1}
					<Button.Root href={getPageUrl(currentPage - 1)} variant="outline" size="sm">
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
					Page {currentPage} of {totalPages}
				</span>

				{#if currentPage < totalPages}
					<Button.Root href={getPageUrl(currentPage + 1)} variant="outline" size="sm">
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

		<!-- Recipe grid -->
		{#if displayedRecipes.length > 0}
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{#each displayedRecipes as recipe (recipe.slug)}
					<a
						href={`/recipes/${recipe.slug}`}
						class="group block"
						onmouseenter={() => {
							const img = new window.Image();
							img.src = getResizedImagePath(recipe.slug, 800);
						}}
					>
						<article>
							<Card.Root
								class="flex h-full flex-col overflow-hidden transition-all group-hover:-translate-y-1 group-hover:shadow-lg"
							>
								<Card.Header class="relative p-0">
									{#if recipe.slug}
										<div
											class="bg-muted relative aspect-video w-full animate-pulse"
											style="z-index:1; position:absolute;"
										></div>
										<picture style="position:relative; z-index:2;">
											<source
												srcset={`
													${getResizedImagePath(recipe.slug, 400)} 400w,
													${getResizedImagePath(recipe.slug, 800)} 800w,
													${getResizedImagePath(recipe.slug, 1200)} 1200w
												`}
												sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
												type="image/webp"
											/>
											<img
												src={getResizedImagePath(recipe.slug, 800)}
												alt={recipe.title}
												class="aspect-video w-full object-cover"
												use:fallbackImage
												loading="lazy"
												width="400"
												height="225"
												style="position:relative; z-index:2;"
											/>
										</picture>
									{:else}
										<div
											class="bg-muted relative aspect-video w-full animate-pulse"
											style="z-index:1; position:absolute;"
										></div>
										<img
											src={recipe.image || '/placeholder.png'}
											alt={recipe.title}
											class="aspect-video w-full object-cover"
											use:fallbackImage
											loading="lazy"
											width="400"
											height="225"
											style="position:relative; z-index:2;"
										/>
									{/if}
									{#if getDifficultyFromTags(recipe.tags)}
										<Badge
											variant="secondary"
											class="bg-muted/95 absolute top-3 right-3 rounded-lg border border-white/60 px-3 py-1 text-xs font-bold tracking-wide text-white shadow-lg backdrop-blur-sm"
											style="z-index:30; letter-spacing:0.04em;"
										>
											{getDifficultyFromTags(recipe.tags)}
										</Badge>
									{/if}
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
											{#each recipe.tags.slice(0, 3) as tag}
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
			<p class="text-muted-foreground col-span-full text-center">
				No recipes found{selectedTag ? ` matching the tag "${formatTag(selectedTag)}"` : ''}. Try
				removing the filter.
			</p>
		{/if}

		<!-- Pagination Controls - Show only if totalPages > 1 -->
		{#if totalPages > 1}
			<nav aria-label="Recipe pagination" class="mt-12 flex items-center justify-center gap-4">
				{#if currentPage > 1}
					<Button.Root href={getPageUrl(currentPage - 1)} variant="outline" size="sm">
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
					Page {currentPage} of {totalPages}
				</span>

				{#if currentPage < totalPages}
					<Button.Root href={getPageUrl(currentPage + 1)} variant="outline" size="sm">
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
