<!-- src/lib/components/RelatedProducts.svelte -->
<script lang="ts">
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

	$effect(() => {
		// Reset state each time productHandles changes
		products = [];
		loading = true;
		error = null;
		usePlaceholderData = false;

		// Capture the current value of productHandles for use in the async function
		// This ensures the effect uses the handles that triggered this specific run.
		const currentProductHandles = productHandles;

		if (currentProductHandles.length === 0) {
			loading = false;
			return;
		}

		const fetchData = async () => {
			try {
				const productPromises = currentProductHandles.map(
					async ({ handle }: { handle: string; featured?: boolean }) => {
						try {
							const response = await fetch(getApiUrl(`/api/shopify/product/${handle}`));
							if (!response.ok) {
								if (dev) {
									console.warn(
										`Shopify API error for related product ${handle}: ${response.status} ${response.statusText}`
									);
								}
								return null; // Failed to fetch this specific product
							}
							return await response.json();
						} catch (fetchError) {
							if (dev) {
								console.error(`Failed to fetch related product ${handle}:`, fetchError);
							}
							return null; // Network or other error for this specific product
						}
					}
				);

				const results = await Promise.all(productPromises);
				const fetchedProducts = results.filter((p) => p !== null) as ShopifyProduct[];

				if (fetchedProducts.length > 0) {
					products = fetchedProducts;
				} else {
					// No products were successfully fetched
					if (dev) {
						products = generatePlaceholderProducts();
						usePlaceholderData = true;
						console.warn(
							'Related products API request returned no products or all failed. Using placeholder data.'
						);
					} else {
						// In production, if no products, the products array will remain empty.
						// You might want to set an error or a specific message here.
						console.warn('Related products API request returned no products or all failed.');
					}
				}
			} catch (e: any) {
				// This catch handles errors from Promise.all or other synchronous parts within fetchData
				error = e.message || 'Failed to fetch related products';
				console.error('Error processing related products:', e);
				if (dev) {
					products = generatePlaceholderProducts();
					usePlaceholderData = true;
					console.warn('Using placeholder data for related products due to an overall error.');
				}
			} finally {
				loading = false;
			}
		};

		fetchData();
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
