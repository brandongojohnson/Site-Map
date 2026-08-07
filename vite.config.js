import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Binds to 0.0.0.0 instead of just localhost, so the dev server is
    // reachable from other devices on the network via this machine's IP.
    host: true,
  },
})
