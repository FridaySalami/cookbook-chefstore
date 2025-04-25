<script lang="ts">
  import type { PageData } from './$types';
  
  export let data: PageData;
  const { recipes } = data;
</script>

<svelte:head>
  <title>All Recipes | Chefstore Recipe Hub</title>
  <meta name="description" content="Discover our collection of delicious recipes for every occasion." />
</svelte:head>

<!-- Enhanced spacing with generous padding on all sides -->
<section class="pt-28 pb-20 px-6 sm:px-10 md:px-16 lg:px-20 bg-gray-50">
  <div class="max-w-7xl mx-auto">
    <h1 class="text-3xl font-bold mb-4 text-center md:text-4xl lg:text-5xl" style="letter-spacing: -0.01em;">
      All Recipes
    </h1>
    <p class="text-gray-600 mb-14 text-center max-w-2xl mx-auto text-lg">
      Browse our collection of chef-tested recipes for every meal and occasion.
    </p>
    
    <!-- Increased gap between cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {#each recipes as recipe}
        <a 
          href={`/recipes/${recipe.slug}`} 
          class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col"
        >
          <div class="h-60 overflow-hidden">
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
          </div>
          
          <!-- Extra padding inside cards -->
          <div class="p-8 sm:p-9 flex-grow flex flex-col">
            <h3 class="font-semibold text-xl mb-4 group-hover:text-blue-600 transition-colors">
              {recipe.title}
            </h3>
            
            {#if recipe.description}
              <p class="text-gray-600 text-sm mb-6 line-clamp-2 flex-grow">
                {recipe.description}
              </p>
            {/if}
            
            <!-- Redesigned metadata section with pill-style indicators -->
            <div class="flex items-center justify-between text-sm text-gray-500 border-t pt-5 mt-3">
              <!-- Time indicator with increased padding -->
              <div class="flex items-center bg-gray-50 px-5 py-2.5 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
                <span>{recipe.totalTime || 'N/A'} min</span>
              </div>
              
              <!-- Difficulty indicator with larger pills -->
              <div class="flex items-center bg-gray-50 px-5 py-2.5 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2.5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span>{recipe.difficulty || 'Easy'}</span>
              </div>
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>