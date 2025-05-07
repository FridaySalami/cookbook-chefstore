<!-- src/lib/components/RelatedProducts.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { dev } from '$app/environment';
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

	// Generate placeholder products with readable titles
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

	async function fetchProducts() {
		if (productHandles.length === 0) {
			loading = false;
			return;
		}

		loading = true;
		usePlaceholderData = false;
		error = null;

		try {
			// Attempt to fetch from API in both dev and production
			const productPromises = productHandles.map(
				async ({ handle }: { handle: string; featured?: boolean }) => {
					try {
						const apiUrl = getApiUrl(`products?handle=${handle}`);
						console.log(`[RelatedProducts] Fetching product from: ${apiUrl}`);
						const res = await fetch(apiUrl, { signal: AbortSignal.timeout(5000) });

						if (!res.ok) {
							const errorText = await res.text();
							console.error(
								`[RelatedProducts] Failed to fetch product: ${handle}, Status: ${res.status}, Response: ${errorText}`
							);
							throw new Error(`Failed to fetch product: ${handle}, Status: ${res.status}`);
						}

						const product = await res.json();
						if (product && product.title && !product.error) {
							// Check for product.error from our API
							return product;
						}
						if (product && product.error) {
							console.error(`[RelatedProducts] API error for ${handle}: ${product.error}`);
							throw new Error(`API error for ${handle}: ${product.error}`);
						}
						console.warn(`[RelatedProducts] Invalid or empty product data for ${handle}:`, product);
						throw new Error(`Invalid product data for ${handle}`);
					} catch (err) {
						console.error(`[RelatedProducts] Error fetching individual product ${handle}:`, err);
						return null; // Return null if a specific product fetch fails
					}
				}
			);

			const results = await Promise.all(productPromises);

			const fetchedProducts = results.filter((p) => p !== null) as ShopifyProduct[];

			if (fetchedProducts.length > 0) {
				console.log('[RelatedProducts] Successfully fetched products from API:', fetchedProducts);
				usePlaceholderData = false;
				products = fetchedProducts;
			} else {
				console.warn(
					'[RelatedProducts] All product fetches failed or returned no valid data. Using placeholder data.'
				);
				usePlaceholderData = true;
				products = generatePlaceholderProducts();
			}

			loading = false;
		} catch (err) {
			// Catch errors from Promise.all or other general errors
			console.error('[RelatedProducts] General error loading products:', err);
			usePlaceholderData = true; // Fallback to placeholder data on any general error
			products = generatePlaceholderProducts();
			loading = false;
		}
	}

	// Watch for changes to productHandles and refetch products when they change
	$effect(() => {
		// Create a dependency on productHandles to trigger when it changes
		const currentHandles = JSON.stringify(productHandles);

		// We need to call fetchProducts whenever productHandles changes
		fetchProducts();

		// Log for debugging
		if (productHandles.length > 0) {
			console.log(
				`[RelatedProducts] Handles changed, fetching products for: ${productHandles.map((p: { handle: string; featured?: boolean }) => p.handle).join(', ')}`
			);
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

									<div class="mb-2 flex-1">
										<h3
											class="line-clamp-3 pr-8 text-sm font-medium transition-colors group-hover:text-amber-600"
										>
											{product.title}
										</h3>
									</div>

									<div class="flex items-center justify-between">
										<span class="block text-sm font-bold text-amber-600">
											{#if !usePlaceholderData && product.variants && product.variants.length > 0 && product.variants[0].price !== '0.00'}
												£{parseFloat(product.variants[0].price).toFixed(2)}
											{:else}
												View Price
											{/if}
										</span>
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
