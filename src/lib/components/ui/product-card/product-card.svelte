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
		class="group flex flex-col overflow-hidden rounded-md border transition-all duration-200 hover:shadow-md"
	>
		<div class="relative aspect-video overflow-hidden">
			<img
				src={productImage}
				alt={productName}
				class="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
				loading="lazy"
				onerror={handleImageError}
			/>
		</div>
		<div class="flex flex-1 flex-col p-4">
			<h3 class="text-base font-semibold">{productName}</h3>
			<p class="text-muted-foreground mt-1 text-sm">{productPrice}</p>
			<div class="mt-auto pt-3">
				<span class="text-primary inline-flex items-center text-sm font-medium">
					View product
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="ml-1 h-4 w-4"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg
					>
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
		class="group flex items-center gap-3 rounded-md border p-3 transition-all duration-200 hover:shadow-md"
	>
		<div class="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
			<img
				src={productImage}
				alt={productName}
				class="h-full w-full object-cover"
				loading="lazy"
				onerror={handleImageError}
			/>
		</div>
		<div class="flex flex-1 flex-col">
			<h3 class="text-sm font-medium">{productName}</h3>
			<p class="text-muted-foreground text-xs">{productPrice}</p>
		</div>
	</a>
{/if}
