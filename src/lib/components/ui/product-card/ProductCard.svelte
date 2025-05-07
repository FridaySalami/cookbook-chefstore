<script lang="ts">
	// Update imports to use relative paths instead of aliases
	import * as Card from '../../ui/card';
	import { Badge } from '../../ui/badge';

	export let productName: string;
	export let productImage: string;
	export let productPrice: string;
	export let productUrl: string;
	export let variant: 'default' | 'compact' = 'default';

	// Fallback image handling
	function handleImageError(event: Event) {
		const img = event.target as HTMLImageElement;
		img.src = '/placeholder.png';
	}
</script>

<div class="my-4 {variant === 'compact' ? 'max-w-[300px]' : 'w-full'}">
	<Card.Root class="overflow-hidden">
		<a href={productUrl} target="_blank" rel="noopener noreferrer" class="group block">
			<div class="flex {variant === 'compact' ? 'flex-col' : 'flex-row'}">
				<div class="{variant === 'compact' ? 'w-full' : 'w-1/3'} overflow-hidden">
					<img
						src={productImage}
						alt={productName}
						class="h-auto w-full object-cover transition-transform group-hover:scale-105"
						on:error={handleImageError}
					/>
				</div>

				<div class="{variant === 'compact' ? 'w-full' : 'w-2/3'} p-4">
					<Badge variant="secondary" class="mb-2">Available at Chefstore</Badge>

					<h3 class="mb-2 text-lg font-medium text-gray-900 dark:text-gray-100">
						{productName}
					</h3>

					<div class="mb-3 text-xl font-bold text-amber-600">
						{productPrice}
					</div>

					<div class="text-muted-foreground text-sm">Buy now from Chefstore</div>
				</div>
			</div>
		</a>
	</Card.Root>
</div>
