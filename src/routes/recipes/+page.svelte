<script lang="ts">
  import type { PageData } from './$types';
  
  export let data: PageData;
  const { recipes } = data;
</script>

<svelte:head>
  <title>All Recipes | Chefstore Recipe Hub</title>
  <meta name="description" content="Discover our collection of delicious recipes for every occasion." />
</svelte:head>

<section class="py-8 px-4">
  <div class="container mx-auto">
    <h1 class="text-3xl font-bold mb-2 text-center" style="letter-spacing: -0.01em;">All Recipes</h1>
    <p class="text-gray-600 mb-10 text-center max-w-2xl mx-auto">
      Browse our collection of chef-tested recipes for every meal and occasion.
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each recipes as recipe}
        <a href={`/recipes/${recipe.slug}`} class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
          <div class="h-52 overflow-hidden">
            <img src={recipe.image} alt={recipe.title} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div class="p-5">
            <h3 class="font-semibold text-lg mb-2">{recipe.title}</h3>
            {#if recipe.description}
              <p class="text-gray-600 text-sm mb-4">{recipe.description}</p>
            {/if}
            <div class="flex items-center justify-between text-sm text-gray-500">
              <span class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
                {recipe.totalTime || 'N/A'} min
              </span>
              <span class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                {recipe.difficulty || 'Easy'}
              </span>
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>