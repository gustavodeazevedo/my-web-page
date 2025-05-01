import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react({
        // Configurar o plugin react para incluir arquivos .js
        include: "**/*.{jsx,js}",
    })],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
        extensions: ['.js', '.jsx', '.json'],
    },
    // Configuração de servidor de desenvolvimento
    server: {
        port: 3000,
        open: true,
    },
});