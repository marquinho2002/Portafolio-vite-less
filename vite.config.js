import { defineConfig } from 'vite';
import purgecss from 'vite-plugin-purgecss';

export default defineConfig({
    base: '/Portafolio-vite-less/', // Para GitHub Pages
    plugins: [
        purgecss({
            content: ['./**/*.html', './**/*.js'], 
            safelist: [
                'responsive',
                'nav-responsive',
                'javascript',
                'htmlcss',
                'photoshop',
                'comunicacion',
                'trabajo',
                'creatividad',
            ]
        })
    ],
    css: {
        preprocessorOptions: {
            less: {
                math: 'always',
                relativeUrls: true,
                javascriptEnabled: true
            }
        }
    }
});