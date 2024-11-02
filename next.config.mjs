/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'image.tmdb.org',
                port: '',
                pathname: '/t/p/**', // Caminho padrão para as imagens do TMDB
              },
        ],
      },
};

export default nextConfig;
