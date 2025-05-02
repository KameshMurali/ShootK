import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ShootK/', // Replace this with your actual repository name
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
