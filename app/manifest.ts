import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'OVUNS.TECH',
        short_name: 'OVUNS',
        description: 'Engineering the Future of Intelligent Software - AI-native software engineering platforms powered by Engineering-SSOT, Agentic Software Engineering, and Engineering Intelligence.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#183153',
        icons: [
            {
                src: '/logo.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/logo.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    };
}