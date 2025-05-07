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
        _: path.resolve(__dirname, './src/lib/layouts/RecipeLayout.svelte')
      }
    })
  ],
  kit: {
    adapter: adapter({
      edge: false,
      split: true,
      external: ['@shopify/shopify-api']
    }),
    paths: {
      base: ''
    },
    alias: {
      '$lib': path.resolve(__dirname, './src/lib')
    }
  }
};

export default config;
