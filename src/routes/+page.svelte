<script lang="ts">
  import type { PageData } from './$types';
  
  // Properly type the data prop
  export let data: PageData;
  
  // Set a default empty array if featuredRecipes is undefined
  const featuredRecipes = data.featuredRecipes || [];
</script>

<!-- Hero Section - More Modern & Clean -->
<section class="relative">
    <div class="relative h-[450px] md:h-[550px] overflow-hidden">
        <img 
            src="https://images.unsplash.com/photo-1556910103-8b5cdb11ad8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
            alt="Fresh ingredients" 
            class="w-full h-full object-cover brightness-[0.7] transition-all"
        />
        
        <!-- Hero Content - Sleeker Design -->
        <div class="absolute inset-0 flex flex-col items-center justify-center text-white p-6" style="text-shadow: 0 2px 4px rgba(0,0,0,0.5);">
            <h1 class="text-4xl md:text-6xl font-bold text-center mb-3 max-w-4xl" style="color: white; letter-spacing: -0.02em;">
                Delicious Recipes for Every Occasion
            </h1>
            <p class="text-lg md:text-xl text-center max-w-2xl mb-8 opacity-90" style="color: white; font-weight: 300;">
                From professional chefs to home cooks, find the perfect recipe for your next meal.
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
                <a href="/recipes" class="bg-[#C8102E] hover:bg-[#9A0C24] text-white px-7 py-3 rounded-full font-medium text-base transition-all shadow-md hover:shadow-lg">
                    Browse Recipes
                </a>
                <a href="/about" class="bg-white/90 backdrop-blur-sm hover:bg-white text-[#C8102E] px-7 py-3 rounded-full font-medium text-base transition-all shadow-md hover:shadow-lg">
                    Learn More
                </a>
            </div>
        </div>
    </div>
</section>

<!-- Featured Recipes Section - Apple-like Cards -->
<section class="py-14 px-4">
  <div class="container mx-auto">
    <h2 class="text-2xl font-bold mb-2 text-center" style="letter-spacing: -0.01em;">Featured Recipes</h2>
    <p class="text-gray-600 mb-8 text-center max-w-xl mx-auto text-sm">
      Try these staff-picked recipes that are perfect for the season.
    </p>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      {#each featuredRecipes as recipe}
        <a href={`/recipes/${recipe.slug}`} class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group">
          <div class="h-52 overflow-hidden">
            <img src={recipe.image} alt={recipe.title} class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div class="p-5">
            <h3 class="font-semibold text-lg mb-2">{recipe.title}</h3>
            <div class="flex items-center justify-between text-sm text-gray-500">
              <span class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
                {recipe.totalTime} min
              </span>
              <span class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                {recipe.difficulty}
              </span>
            </div>
          </div>
        </a>
      {/each}
    </div>
  </div>
</section>

<!-- Why Choose Us - Modern Cards -->
<section class="py-14 px-4 bg-gray-50">
    <div class="container mx-auto">
        <h2 class="text-2xl font-bold mb-2 text-center" style="letter-spacing: -0.01em;">Why Choose Our Recipes</h2>
        <p class="text-gray-600 mb-10 text-center max-w-xl mx-auto text-sm">
            Our recipes are crafted with care to ensure your success in the kitchen.
        </p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white p-7 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                </div>
                <h3 class="text-lg font-semibold mb-2">Chef-Tested Recipes</h3>
                <p class="text-gray-600 text-sm">All recipes are developed and tested by professional chefs for reliable results every time.</p>
            </div>
            
            <div class="bg-white p-7 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </div>
                <h3 class="text-lg font-semibold mb-2">Clear Instructions</h3>
                <p class="text-gray-600 text-sm">Step-by-step directions make cooking easy, whether you're a beginner or experienced chef.</p>
            </div>
            
            <div class="bg-white p-7 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                </div>
                <h3 class="text-lg font-semibold mb-2">Quality Ingredients</h3>
                <p class="text-gray-600 text-sm">Find the freshest ingredients at your local Chefstore for perfect results every time.</p>
            </div>
        </div>
    </div>
</section>

<!-- Newsletter - Sleek Apple-like Design -->
<section class="py-14 px-4 bg-gradient-to-br from-[#C8102E] to-[#9A0C24] text-white">
    <div class="container mx-auto max-w-3xl text-center">
        <h2 class="text-2xl font-bold mb-3" style="letter-spacing: -0.01em;">Get New Recipes Weekly</h2>
        <p class="mb-7 text-white/90 max-w-xl mx-auto text-sm">
            Sign up for our newsletter to receive new recipes, cooking tips, and exclusive offers directly to your inbox.
        </p>
        
        <form class="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
            <input 
                type="email" 
                placeholder="Your email address" 
                class="flex-grow px-4 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent/50 text-sm"
                required
            />
            <button type="submit" class="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-full font-medium transition-colors whitespace-nowrap text-sm shadow-sm">
                Subscribe
            </button>
        </form>
        <p class="text-xs mt-4 text-white/70">
            We respect your privacy. Unsubscribe at any time.
        </p>
    </div>
</section>
