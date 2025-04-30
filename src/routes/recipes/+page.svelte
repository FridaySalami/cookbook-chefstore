<script lang="ts">
	import type { PageData } from './$types';
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import * as Button from '$lib/components/ui/button';
	import { Clock, Users } from 'lucide-svelte'; // Import icons
	import { derived } from 'svelte/store';
	import { writable } from 'svelte/store';

	export let data: PageData;
	const { recipes, allTags } = data; // Destructure allTags

	// State for the selected tag filter
	let selectedTag = writable<string | null>(null);

	// --- Categorize Tags for Filtering ---
	const difficultyTags = allTags.filter((tag) => tag.startsWith('difficulty-'));
	// Define keywords for dietary tags - expand this list as needed
	const dietaryKeywords = ['Chicken', 'plant-based', 'vegan', 'vegetarian', 'Thai', 'Curry'];
	const dietaryTags = allTags.filter((tag) => dietaryKeywords.includes(tag));
	const otherTags = allTags.filter(
		(tag) => !tag.startsWith('difficulty-') && !dietaryKeywords.includes(tag)
	);
	// --- End Categorize Tags ---

	// Derived store for filtered recipes
	const filteredRecipes = derived([selectedTag, writable(recipes)], ([$selectedTag, $recipes]) => {
		if (!$selectedTag) {
			return $recipes; // No tag selected, show all
		}
		return $recipes.filter((recipe) => recipe.tags?.includes($selectedTag));
	});

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
</script>

<svelte:head>
	<title>All Recipes | Chefstore Recipe Hub</title>
	<meta
		name="description"
		content="Discover our collection of delicious recipes for every occasion."
	/>
</svelte:head>

<section class="bg-background text-foreground px-6 pt-10 pb-20 sm:px-10 md:px-16 lg:px-20">
	<div class="container mx-auto max-w-7xl">
		<!-- Page header -->
		<header class="mb-16 text-center">
			<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">All Recipes</h1>
			<p class="mx-auto mt-4 max-w-2xl text-xl text-[hsl(var(--muted-foreground))]">
				Browse our collection of chef-tested recipes for every meal and occasion.
			</p>

			<!-- Categorized Tag Filters -->
			<div class="mt-8 flex flex-col items-center gap-4">
				<!-- All Button -->
				<div class="mb-2">
					<Button.Root
						variant={$selectedTag === null ? 'default' : 'outline'}
						size="sm"
						on:click={() => selectedTag.set(null)}
					>
						All Recipes
					</Button.Root>
				</div>

				<!-- Difficulty Tags -->
				{#if difficultyTags.length > 0}
					<div class="flex flex-wrap justify-center gap-2 sm:gap-3">
						{#each difficultyTags as tag}
							<Button.Root
								variant={$selectedTag === tag ? 'default' : 'outline'}
								size="sm"
								on:click={() => selectedTag.set(tag)}
								class="capitalize"
							>
								{tag.replace('difficulty-', '')}
							</Button.Root>
						{/each}
					</div>
				{/if}

				<!-- Dietary Tags -->
				{#if dietaryTags.length > 0}
					<div class="flex flex-wrap justify-center gap-2 sm:gap-3">
						{#each dietaryTags as tag}
							<Button.Root
								variant={$selectedTag === tag ? 'default' : 'outline'}
								size="sm"
								on:click={() => selectedTag.set(tag)}
							>
								{tag}
							</Button.Root>
						{/each}
					</div>
				{/if}

				<!-- Other Tags -->
				{#if otherTags.length > 0}
					<div class="flex flex-wrap justify-center gap-2 sm:gap-3">
						{#each otherTags as tag}
							<Button.Root
								variant={$selectedTag === tag ? 'default' : 'outline'}
								size="sm"
								on:click={() => selectedTag.set(tag)}
							>
								{tag}
							</Button.Root>
						{/each}
					</div>
				{/if}
			</div>
		</header>

		<!-- Recipe grid -->
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{#each $filteredRecipes as recipe (recipe.slug)}
				<!-- Use filteredRecipes and add key -->
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
											<Badge variant="secondary">{tag}</Badge>
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
			{:else}
				<p class="col-span-full text-center text-muted-foreground">
					No recipes found matching the selected tag.
				</p>
			{/each}
		</div>
	</div>
</section>
