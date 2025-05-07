import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-netlify';
import { fileURLToPath } from 'url';
import path from 'path';

// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md'],
      layout: {
        // Use the full absolute path instead of the alias
        _: path.resolve(__dirname, './src/lib/layouts/RecipeLayout.svelte')
      }
    })
  ],
  kit: {
    adapter: adapter(),
    paths: {
      base: ''
    },
    alias: {
      // Make sure the $lib alias is explicitly defined
      '$lib': path.resolve(__dirname, './src/lib')
    }
  }
};

export default config;
