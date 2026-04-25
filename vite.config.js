import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // ADD THIS LINE! Replace with your exact GitHub repo name:
  base: '/git remote set-url origin https://github.com/Suranjan27/Portfolio.git/', 
})
