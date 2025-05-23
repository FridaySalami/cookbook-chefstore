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
	import { goto } from '$app/navigation';

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
		content="Delicious, no-fuss recipes made with real ingredients. From weeknight wonders to weekend crowd-pleasers."
	/>
</svelte:head>

<main class="flex-grow pt-4 pb-8 lg:pt-6 lg:pb-12">
	<!-- Featured Recipes Section: Ensure card styles use new variables -->
	{#if featuredRecipes && featuredRecipes.length > 0}
		<section class="mb-6">
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{#each featuredRecipes as recipe, index (recipe.slug)}
					<a href="/recipes/{recipe.slug}" class="group relative block overflow-hidden">
						<div class="relative overflow-hidden">
							<img
								src={recipe.image ?? '/placeholder.png'}
								alt={recipe.title}
								class="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
								use:fallbackImage
								loading={index < 3 ? 'eager' : 'lazy'}
								fetchpriority={index < 3 ? 'high' : 'auto'}
							/>
							<div
								class="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 to-transparent"
							>
								<div class="absolute bottom-0 w-full p-4">
									<h3
										class="mb-3 text-center font-sans text-base leading-tight font-medium tracking-wide text-white md:text-lg"
									>
										{recipe.title}
									</h3>
									<div class="text-center">
										<button
											class="min-h-[44px] w-full cursor-pointer rounded-full bg-white/95 px-6 py-2 text-base font-semibold text-amber-900 transition-colors duration-200 hover:bg-white focus:bg-white focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:outline-none"
											aria-label="View recipe for {recipe.title}"
										>
											View Recipe
										</button>
									</div>
								</div>
							</div>
						</div>
					</a>
				{/each}
			</div>
			<div class="mt-4 text-center">
				<Button
					href="/recipes"
					size="lg"
					class="min-h-[44px] w-auto cursor-pointer rounded-full border-2 border-amber-900/40 bg-white px-8 py-3 text-base font-semibold text-amber-900 shadow-lg transition-colors duration-200 hover:bg-white/90 focus:bg-white focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:outline-none"
				>
					Explore All Recipes
				</Button>
			</div>
		</section>
	{:else}
		<p class="text-muted-foreground text-center">No featured recipes available at the moment.</p>
	{/if}

	<!-- Hero Section: Adjusted text colors and button style -->
	<section class="mb-8 text-center">
		<h1
			class="text-foreground mb-4 font-serif text-4xl font-bold tracking-widest md:text-5xl lg:text-5xl"
		>
			Real meals for real tables
		</h1>
		<p class="text-muted-foreground mx-auto mb-8 max-w-3xl text-lg md:text-xl">
			Simple, satisfying recipes for your everyday life.
		</p>
		<p class="text-muted-foreground mx-auto mb-8 max-w-3xl text-sm md:text-base">
			Browse recipes and shop ingredients straight from the kitchen.
		</p>
	</section>

	<!-- You can add more sections here, like categories, latest recipes, etc. -->
</main>
