<script lang="ts">
	import { onMount } from 'svelte';
	import type { ShopifyProduct } from '$lib/auth/shopify/shopify';
	import { getApiUrl } from '$lib/utils/api';

	let products = $state<ShopifyProduct[]>([]);
	let loading = $state(true);
	let error = $state<string | null>(null);

	onMount(async () => {
		try {
			const apiUrl = getApiUrl('products');
			console.log(`Fetching products from: ${apiUrl}`);
			const res = await fetch(apiUrl);
			if (!res.ok) throw new Error('Failed to fetch products');
			products = await res.json();
			loading = false;
		} catch (err) {
			error = err instanceof Error ? err.message : 'An unknown error occurred';
			loading = false;
		}
	});
</script>

<div class="container mx-auto px-4 py-8">
	<h1 class="mb-8 text-3xl font-bold">Shop Products</h1>

	{#if loading}
		<div class="flex items-center justify-center py-16">
			<div class="h-12 w-12 animate-spin rounded-full border-t-2 border-b-2 border-amber-600"></div>
		</div>
	{:else if error}
		<div class="mb-4 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700">
			<p>Error: {error}</p>
		</div>
	{:else if products.length === 0}
		<p class="py-10 text-center text-gray-500">No products found</p>
	{:else}
		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{#each products as product}
				<div
					class="product-card overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg"
				>
					<a href="/shop/{product.handle}" class="block">
						{#if product.images && product.images.length > 0}
							<img
								src={product.images[0].src}
								alt={product.images[0].alt || product.title}
								class="h-64 w-full object-cover"
							/>
						{:else}
							<div class="flex h-64 w-full items-center justify-center bg-gray-200">
								<span class="text-gray-400">No image</span>
							</div>
						{/if}

						<div class="p-4">
							<span class="text-sm text-gray-500">{product.vendor}</span>
							<h2 class="mb-2 text-lg font-bold text-gray-800">{product.title}</h2>

							{#if product.variants && product.variants.length > 0}
								<div class="flex items-center justify-between">
									<p class="font-bold text-amber-600">
										£{parseFloat(product.variants[0].price).toFixed(2)}
									</p>

									{#if product.variants[0].compare_at_price}
										<p class="text-gray-500 line-through">
											£{parseFloat(product.variants[0].compare_at_price).toFixed(2)}
										</p>
									{/if}
								</div>
							{/if}
						</div>
					</a>
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
	.product-card {
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}
</style>
