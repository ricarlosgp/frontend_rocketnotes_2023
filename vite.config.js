//No vite.config é a configurações do próprio vite que a gente utilizou para criar o projeto https://vitejs.dev/config/

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
