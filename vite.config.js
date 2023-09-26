import { defineConfig,loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
const env = loadEnv('development', process.cwd(), 'VITE')

export default defineConfig({
  plugins: [react()],
  server: {
    host: env.VITE_HOST,
    port: env.VITE_PORT_FRONTEND,
  }
})
