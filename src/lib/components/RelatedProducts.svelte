<!-- src/lib/components/RelatedProducts.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import type { ShopifyProduct } from '$lib/auth/shopify/shopify';
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';

	let { productHandles = [] } = $props<{
		productHandles: Array<{ handle: string; featured?: boolean }>;
	}>();

	let products = $state<ShopifyProduct[]>([]);
	let loading = $state(true);
	let error = $state<string | null>(null);

	// Base URL for external product links
	const externalStoreUrl = 'https://www.thechefstoreuk.com/products/';

	onMount(async () => {
		if (productHandles.length === 0) {
			loading = false;
			return;
		}

		try {
			// Fetch each product individually
			const productPromises = productHandles.map(
				async ({ handle }: { handle: string; featured?: boolean }) => {
					const res = await fetch(`/api/products?handle=${handle}`);

					if (!res.ok) {
						throw new Error(`Failed to fetch product: ${handle}`);
					}

					return res.json();
				}
			);

			products = await Promise.all(productPromises);
			loading = false;
		} catch (err) {
			error = err instanceof Error ? err.message : 'An unknown error occurred';
			loading = false;
		}
	});

	// Handle image error
	function handleImageError(e: Event) {
		const target = e.target as HTMLImageElement;
		target.src = '/placeholder.png';
	}
</script>

{#if productHandles.length > 0}
	<div class="mb-8">
		<h2 class="mb-4 border-b pb-2 text-xl font-semibold">Shop These Ingredients</h2>

		{#if loading}
			<div class="flex items-center justify-center py-4">
				<div class="h-6 w-6 animate-spin rounded-full border-t-2 border-b-2 border-amber-600"></div>
			</div>
		{:else if error}
			<div class="mb-4 rounded border border-red-400 bg-red-100 px-4 py-2 text-red-700">
				<p>Error loading products: {error}</p>
			</div>
		{:else if products.length === 0}
			<p class="py-2 text-gray-500">No products found</p>
		{:else}
			<div class="grid grid-cols-1 gap-3 md:grid-cols-2">
				{#each products as product, i}
					{@const isFeatured = productHandles[i]?.featured}
					{@const productUrl = `${externalStoreUrl}${product.handle}`}

					<Card.Root
						class="overflow-hidden border transition-all hover:shadow-sm {isFeatured
							? 'border-amber-400'
							: ''}"
					>
						<a href={productUrl} class="group block" target="_blank" rel="noopener noreferrer">
							<div class="flex h-auto">
								<div class="flex w-24 items-center justify-center bg-white p-2">
									{#if product.images && product.images.length > 0}
										<img
											src={product.images[0].src}
											alt={product.title}
											class="h-auto max-h-16 w-auto object-contain"
											onerror={handleImageError}
											loading="lazy"
										/>
									{/if}
								</div>

								<div class="relative flex flex-1 flex-col justify-between p-3">
									{#if isFeatured}
										<Badge
											variant="outline"
											class="absolute top-2 right-2 h-5 w-fit bg-amber-50 py-0 text-[10px]"
										>
											Featured
										</Badge>
									{/if}

									<div>
										<h3
											class="line-clamp-2 pr-16 text-sm font-medium transition-colors group-hover:text-amber-600"
										>
											{product.title}
										</h3>
									</div>

									<div class="mt-1 flex items-center justify-between">
										{#if product.variants && product.variants.length > 0}
											<span class="block text-sm font-bold text-amber-600">
												£{parseFloat(product.variants[0].price).toFixed(2)}
											</span>
										{/if}
										<span class="text-muted-foreground text-xs">Buy →</span>
									</div>
								</div>
							</div>
						</a>
					</Card.Root>
				{/each}
			</div>
		{/if}
	</div>
{/if}
