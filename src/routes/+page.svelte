<script lang="ts">
	import type { PageData } from './$types';
	import {
		Card,
		CardContent,
		CardHeader,
		CardTitle,
		CardDescription
	} from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import { Clock, UtensilsCrossed } from 'lucide-svelte';

	let { data }: { data: PageData } = $props();

	const featuredRecipes = data.featuredRecipes;

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
	<title>Chefstore Cookbook - Home</title>
	<meta
		name="description"
		content="Welcome to the Chefstore Cookbook. Discover delicious recipes for every occasion."
	/>
</svelte:head>

<main class="flex-grow py-8 lg:py-12">
	<!-- Hero Section: Adjusted text colors and button style -->
	<section class="mb-16 text-center">
		<h1
			class="text-foreground mb-4 font-serif text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl"
		>
			Welcome to Chefstore Cookbook
		</h1>
		<p class="text-muted-foreground mx-auto mb-8 max-w-3xl text-lg md:text-xl">
			Discover delicious, family-friendly recipes for every occasion. Simple, tasty, and made with
			love, inspired by chefs.
		</p>
		<Button
			href="/recipes"
			size="lg"
			class="bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring rounded-full px-8 py-3 text-base font-semibold shadow-md transition-colors focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
		>
			Explore All Recipes
		</Button>
	</section>

	<!-- Featured Recipes Section: Ensure card styles use new variables -->
	{#if featuredRecipes && featuredRecipes.length > 0}
		<section class="mb-12">
			<h2 class="text-foreground mb-8 text-center font-serif text-3xl font-semibold md:text-4xl">
				Featured Recipes!
			</h2>
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each featuredRecipes as recipe (recipe.slug)}
					<Card
						class="group bg-card text-card-foreground flex flex-col overflow-hidden rounded-lg border shadow-sm transition-shadow hover:shadow-lg"
					>
						<a href="/recipes/{recipe.slug}" class="flex h-full flex-col">
							<div class="overflow-hidden">
								<img
									src={recipe.image ?? '/placeholder.png'}
									alt={recipe.title}
									class="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-105"
									use:fallbackImage
								/>
							</div>
							<div class="flex flex-grow flex-col p-4 md:p-5">
								<CardHeader class="p-0 pb-2">
									<CardTitle
										class="group-hover:text-primary font-serif text-lg leading-tight font-semibold md:text-xl"
									>
										{recipe.title}
									</CardTitle>
									{#if recipe.description}
										<CardDescription
											class="text-muted-foreground mt-1 line-clamp-3 h-[4.5em] text-sm"
										>
											{recipe.description}
										</CardDescription>
									{/if}
								</CardHeader>
								<CardContent class="mt-auto p-0 pt-3">
									<div
										class="text-muted-foreground flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t pt-3 text-xs"
									>
										{#if recipe.totalTime}
											<span class="flex items-center gap-1">
												<Clock class="h-3.5 w-3.5" />
												{recipe.totalTime} min
											</span>
										{/if}
										{#if recipe.difficulty}
											<span class="flex items-center gap-1">
												<UtensilsCrossed class="h-3.5 w-3.5" />
												{recipe.difficulty}
											</span>
										{/if}
									</div>
								</CardContent>
							</div>
						</a>
					</Card>
				{/each}
			</div>
		</section>
	{:else}
		<p class="text-muted-foreground text-center">No featured recipes available at the moment.</p>
	{/if}

	<!-- You can add more sections here, like categories, latest recipes, etc. -->
</main>
