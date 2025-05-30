// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  outDir: './dist', // Directorio de salida explícito
  output: 'static', // Modo de salida estática (necesario para Vercel)
  vite: {
    plugins: [tailwindcss()]
  }
});