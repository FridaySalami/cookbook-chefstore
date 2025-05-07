<script lang="ts">
	// Props for the product card
	export let productName: string;
	export let productImage: string;
	export let productPrice: string;
	export let productUrl: string;
	export let variant: 'default' | 'compact' = 'default';

	// Fallback image handler for broken images
	function handleImageError(event: Event) {
		const target = event.target as HTMLImageElement;
		target.src = '/placeholder.png'; // Default fallback image
	}
</script>

{#if variant === 'default'}
	<!-- Default product card with larger image and more details -->
	<a
		href={productUrl}
		target="_blank"
		rel="noopener noreferrer"
		class="group flex flex-col items-start overflow-hidden rounded-md border transition-all duration-200 hover:shadow-md sm:flex-row"
	>
		<div class="w-full max-w-[200px] p-4 sm:w-1/4">
			<img
				src={productImage}
				alt={productName}
				class="h-auto w-full rounded object-contain"
				on:error={handleImageError}
				loading="lazy"
			/>
		</div>
		<div class="flex flex-1 flex-col justify-between p-4">
			<div>
				<h3 class="group-hover:text-primary mb-2 text-lg font-semibold transition-colors">
					{productName}
				</h3>
				<p class="text-muted-foreground mb-4 text-sm">Available at Chef Store</p>
			</div>
			<div class="flex items-center justify-between">
				<span class="text-lg font-bold">{productPrice}</span>
				<span class="inline-flex rounded-md shadow-sm">
					<button
						class="bg-primary hover:bg-primary/90 focus:ring-primary inline-flex items-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-white focus:ring-2 focus:ring-offset-2 focus:outline-none"
					>
						View Product
					</button>
				</span>
			</div>
		</div>
	</a>
{:else}
	<!-- Compact product card for limited space -->
	<a
		href={productUrl}
		target="_blank"
		rel="noopener noreferrer"
		class="group flex items-center rounded-md border p-3 transition-all duration-200 hover:shadow-md"
	>
		<img
			src={productImage}
			alt={productName}
			class="mr-3 h-16 w-16 rounded object-contain"
			on:error={handleImageError}
			loading="lazy"
		/>
		<div class="flex-1">
			<h3 class="group-hover:text-primary text-sm font-medium transition-colors">{productName}</h3>
			<p class="text-muted-foreground text-xs">{productPrice}</p>
		</div>
	</a>
{/if}
