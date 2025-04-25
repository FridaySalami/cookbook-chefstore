<script lang="ts">
    import '../app.css';
    import { onMount } from 'svelte';

    let { children } = $props();
    let isMenuOpen = $state(false);
    
    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }
</script>

<div class="flex flex-col min-h-screen">
    <!-- Header with improved padding and spacing -->
    <header class="w-full py-4 md:py-6 px-4 md:px-6 fixed top-0 left-0 right-0 z-40 bg-white shadow-md">
        <div class="container mx-auto flex justify-between items-center">
            <!-- Logo Section -->
            <div class="flex items-center">
                <a href="/" class="flex items-center">
                    <span class="text-primary text-xl md:text-2xl font-bold">ChefStore</span>
                </a>
                <p class="hidden md:block ml-4 text-sm text-gray-600">Great meals start with great ingredients.</p>
            </div>
            
            <!-- Desktop Navigation -->
            <nav class="hidden md:flex items-center gap-8">
                <a href="/" class="nav-link relative group">
                    Home
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="/recipes" class="nav-link relative group">
                    Recipes
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="/about" class="nav-link relative group">
                    About
                    <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="https://www.thechefstoreuk.com" target="_blank" rel="noopener noreferrer" 
                   class="bg-accent text-white px-5 py-2 rounded-lg hover:bg-accent/90 transition-colors shadow-sm hover:shadow ml-2">
                    Visit Store
                </a>
            </nav>
            
            <!-- Mobile Menu Button - Changed on:click to onclick -->
            <button 
                class="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors" 
                onclick={toggleMenu} 
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
            </button>
        </div>
        
        <!-- Mobile Navigation - Changed on:click to onclick in links -->
        <div class={`md:hidden fixed top-[60px] left-0 right-0 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
            <div class="container mx-auto px-4 py-5">
                <nav class="flex flex-col space-y-5">
                    <a href="/" class="nav-link text-lg py-2" onclick={toggleMenu}>Home</a>
                    <a href="/recipes" class="nav-link text-lg py-2" onclick={toggleMenu}>Recipes</a>
                    <a href="/about" class="nav-link text-lg py-2" onclick={toggleMenu}>About</a>
                    <div class="pt-2">
                        <a href="https://www.thechefstoreuk.com" target="_blank" rel="noopener noreferrer" 
                           class="block w-full bg-accent text-white px-4 py-3 rounded-lg hover:bg-accent/90 transition-colors text-center font-medium">
                            Visit Store
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    </header>
    
    <!-- Main Content Wrapper -->
    <div class="flex-grow flex flex-col pt-[70px] md:pt-[96px]">
        <!-- Main Content -->
        <main class="flex-grow w-full">
            {@render children()}
        </main>
    </div>
    
    <!-- Footer -->
    <footer class="bg-white text-gray-600 py-6 border-t border-gray-200 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        <div class="container mx-auto px-4 md:px-6">
            <div class="flex flex-col md:flex-row justify-between items-center">
                <div class="mb-4 md:mb-0">
                    <p class="text-sm">© {new Date().getFullYear()} Parkers Foodservice</p>
                    <p class="text-xs text-gray-400 mt-1">Quality ingredients, exceptional service</p>
                </div>
                
                <div class="flex flex-wrap gap-x-8 gap-y-3 justify-center">
                    <a href="/about" class="text-sm hover:text-primary transition-colors font-medium">About Us</a>
                    <a href="/contact" class="text-sm hover:text-primary transition-colors font-medium">Contact</a>
                    <a href="/privacy" class="text-sm hover:text-primary transition-colors font-medium">Privacy Policy</a>
                    <a href="https://www.thechefstoreuk.com/" target="_blank" rel="noopener" 
                       class="text-sm hover:text-primary transition-colors font-medium">Visit Our Store</a>
                </div>
            </div>
        </div>
    </footer>
</div>

<style>
    /* Use standard CSS instead of @apply */
    .nav-link {
        font-weight: 500;
        transition-property: color;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
        color: var(--color-text);
    }
    
    .nav-link:hover {
        color: var(--color-primary);
    }
    
    /* Use standard CSS instead of @apply */
    a:focus-visible {
        outline: none;
        --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
        --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--color-primary);
        box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
    }
</style>
