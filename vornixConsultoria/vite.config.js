import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react({

        include: "**/*.{jsx,js}",
    })],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
        extensions: ['.js', '.jsx', '.json'],
    },

    server: {
        port: 5173,
        open: true,
        allowedHosts: ['stale-seas-act.loca.lt', 'short-toes-melt.loca.lt', 'cruel-teams-remain.loca.lt', 'curly-peas-search.loca.lt'],
    },
});