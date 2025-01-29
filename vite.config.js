import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // build: {
  //   rollupOptions: {
  //     external: ['react-icons/md', 'react-icons/lu', 'react-icons/sl'],  // Avoid externalizing this package if needed
  //   }
  // }
  optimizeDeps: { include: ['react-icons'] }
})
