import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    build: {
        // This tells Vite to continue even with TS errors
        rollupOptions: {
            onwarn(warning, warn) {
                // Suppress all warnings
                return;
            }
        }
    }
})