<script lang="ts">
	import type { PageData } from './$types';
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import * as Button from '$lib/components/ui/button';
	import { Clock, Users } from 'lucide-svelte'; // Import icons

	export let data: PageData;
	const { recipes } = data;

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
	<title>All Recipes | Chefstore Recipe Hub</title>
	<meta
		name="description"
		content="Discover our collection of delicious recipes for every occasion."
	/>
</svelte:head>

<section class="bg-background text-foreground px-6 pt-28 pb-20 sm:px-10 md:px-16 lg:px-20">
	<div class="container mx-auto max-w-7xl">
		<!-- Page header -->
		<header class="mb-16 text-center">
			<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">All Recipes</h1>
			<p class="mx-auto mt-4 max-w-2xl text-xl text-[hsl(var(--muted-foreground))]">
				Browse our collection of chef-tested recipes for every meal and occasion.
			</p>

			<div class="mt-8 flex flex-wrap justify-center gap-2 sm:gap-4">
				<Button.Root variant="outline" size="sm">All</Button.Root>
				<Button.Root variant="outline" size="sm">Quick & Easy</Button.Root>
				<Button.Root variant="outline" size="sm">Vegetarian</Button.Root>
				<Button.Root variant="outline" size="sm">Desserts</Button.Root>
			</div>
		</header>

		<!-- Recipe grid -->
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{#each recipes as recipe}
				<a href={`/recipes/${recipe.slug}`} class="group block">
					<Card.Root
						class="overflow-hidden transition-all group-hover:-translate-y-1 group-hover:shadow-lg"
					>
						<Card.Header class="relative p-0">
							<img
								src={recipe.image || '/placeholder.png'}
								alt={recipe.title}
								class="aspect-video w-full object-cover"
								use:fallbackImage
							/>
							<Badge
								variant="secondary"
								class="absolute top-3 right-3 border border-white/20 bg-black/60 text-white backdrop-blur-sm"
							>
								{recipe.difficulty || 'Easy'}
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
						</Card.Content>
						<Card.Footer class="flex items-center justify-between p-4 pt-0">
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
				</a>
			{/each}
		</div>
	</div>
</section>
