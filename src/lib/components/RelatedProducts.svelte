<!-- src/lib/components/RelatedProducts.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import type { ShopifyProduct } from '$lib/auth/shopify/shopify';
	import * as Card from '$lib/components/ui/card';
	import { Badge } from '$lib/components/ui/badge';
	import { getApiUrl } from '$lib/utils/api';

	let { productHandles = [] } = $props<{
		productHandles: Array<{ handle: string; featured?: boolean }>;
	}>();

	let products = $state<ShopifyProduct[]>([]);
	let loading = $state(true);
	let error = $state<string | null>(null);
	let usePlaceholderData = $state(false);

	// Base URL for external product links
	const externalStoreUrl = 'https://www.thechefstoreuk.com/products/';

	// Generate placeholder products when API fails
	function generatePlaceholderProducts() {
		return productHandles.map(({ handle, featured }: { handle: string; featured?: boolean }) => {
			// Convert handle to a more readable title
			const title = handle
				.split('-')
				.map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
				.join(' ');

			return {
				id: handle,
				title,
				description: '',
				handle,
				vendor: 'Parkers Food Service',
				product_type: '',
				variants: [{ id: '1', title: 'Default', price: '0.00' }],
				images: [{ src: '/placeholder.png', alt: null }],
				options: []
			};
		});
	}

	onMount(async () => {
		if (productHandles.length === 0) {
			loading = false;
			return;
		}

		try {
			// Fetch each product individually
			const productPromises = productHandles.map(
				async ({ handle }: { handle: string; featured?: boolean }) => {
					try {
						// Use the utility function to get the correct API URL
						const apiUrl = getApiUrl(`products?handle=${handle}`);
						console.log(`Fetching product from: ${apiUrl}`);
						const res = await fetch(apiUrl, {
							// Short timeout to prevent long waits
							signal: AbortSignal.timeout(5000)
						});

						if (!res.ok) {
							throw new Error(`Failed to fetch product: ${handle}`);
						}

						return res.json();
					} catch (err) {
						console.error(`Error fetching ${handle}:`, err);
						// Return null to indicate this product failed to load
						return null;
					}
				}
			);

			const results = await Promise.all(productPromises);

			// If all results are null, use placeholder data
			if (results.every((result) => result === null)) {
				usePlaceholderData = true;
				products = generatePlaceholderProducts();
			} else {
				// Filter out failed requests and include successful ones
				products = results.filter((p) => p !== null);
			}

			loading = false;
		} catch (err) {
			console.error('Failed to load products:', err);
			usePlaceholderData = true;
			products = generatePlaceholderProducts();
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
										{#if product.variants && product.variants.length > 0 && !usePlaceholderData}
											<span class="block text-sm font-bold text-amber-600">
												£{parseFloat(product.variants[0].price).toFixed(2)}
											</span>
										{:else}
											<span class="block text-sm font-bold text-amber-600"> View Price </span>
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
