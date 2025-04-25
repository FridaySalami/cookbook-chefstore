<script>
  // Metadata from the markdown frontmatter is automatically passed as props
  // Add proper typing for all variables
  export let title = '';
  export let description = '';
  export let image = '';
  export let prepTime = null;
  export let cookTime = null;
  export let totalTime = null;
  export let difficulty = '';
  
  // These are unused but still exported - typed as empty strings/arrays
  /** @type {string} */
  export let date = '';
  /** @type {string} */
  export let updated = '';
  /** @type {number|null} */
  export let servings = null;
  /** @type {string[]} */
  export let categories = [];
  /** @type {string[]} */
  export let tags = [];
</script>

<article class="max-w-3xl mx-auto px-6 md:px-8 py-8">
  <!-- Hero Image -->
  {#if image}
    <div class="relative h-[300px] md:h-[400px] overflow-hidden rounded-2xl mb-10">
      <img 
        src={image} 
        alt={title} 
        class="w-full h-full object-cover"
      />
    </div>
  {/if}
  
  <!-- Recipe Header -->
  <header class="mb-12">
    <h1 class="text-3xl md:text-4xl font-bold mb-4" style="letter-spacing: -0.01em;">
      {title}
    </h1>
    
    {#if description}
      <p class="text-gray-600 text-lg mb-6">
        {description}
      </p>
    {/if}
    
    <!-- Recipe Metadata -->
    <div class="flex flex-wrap gap-x-8 gap-y-3 text-sm text-gray-600 mt-5 border-t border-b border-gray-100 py-4">
      {#if prepTime}
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
          </svg>
          <span><strong>Prep:</strong> {prepTime} min</span>
        </div>
      {/if}
      
      {#if cookTime}
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
          </svg>
          <span><strong>Cook:</strong> {cookTime} min</span>
        </div>
      {/if}
      
      {#if totalTime}
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
          </svg>
          <span><strong>Total:</strong> {totalTime} min</span>
        </div>
      {/if}
      
      {#if difficulty}
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>
          <span><strong>Difficulty:</strong> {difficulty}</span>
        </div>
      {/if}
      
      {#if servings}
        <div class="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          <span><strong>Servings:</strong> {servings}</span>
        </div>
      {/if}
    </div>
  </header>
  
  <!-- Recipe Content -->
  <div class="prose prose-slate max-w-none prose-headings:mt-8 prose-headings:mb-4 prose-p:my-4 prose-ul:my-4 prose-ol:my-4">
    <slot />
  </div>
  
  <!-- Tags Section -->
  {#if tags && tags.length > 0}
    <div class="mt-12 pt-6 border-t border-gray-100 flex flex-wrap gap-2">
      {#each tags as tag}
        <span class="bg-gray-100 text-gray-800 text-xs px-3 py-1 rounded-full">{tag}</span>
      {/each}
    </div>
  {/if}
  
  <!-- Back to Recipes Link -->
  <div class="mt-12 pt-6 border-t border-gray-100 text-center">
    <a href="/recipes" class="inline-flex items-center text-primary hover:text-primary-dark transition-colors">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
      </svg>
      Back to All Recipes
    </a>
  </div>
</article>

<style>
  /* Additional customization for markdown headings */
  :global(.prose h2) {
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: 600;
    color: #111827;
  }
  
  :global(.prose h3) {
    margin-top: 2rem;
    margin-bottom: 0.75rem;
    font-size: 1.25rem;
    font-weight: 600;
    color: #111827;
  }
  
  :global(.prose ul),
  :global(.prose ol) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding-left: 1.25rem;
  }
  
  :global(.prose li) {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  
  :global(.prose p) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    line-height: 1.7;
  }
  
  /* Add some subtle spacing between sections in the content */
  :global(.prose > *:first-child) {
    margin-top: 0;
  }
  
  :global(.prose hr) {
    margin-top: 2rem;
    margin-bottom: 2rem;
    border-color: #f3f4f6;
  }
  
  /* Add improved padding for the prose content on mobile */
  @media (max-width: 640px) {
    :global(.prose) {
      padding-left: 4px;
      padding-right: 4px;
    }
    
    :global(.prose ul),
    :global(.prose ol) {
      padding-left: 1.5rem;
    }
  }
</style>