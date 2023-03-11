/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  /* Configuración de otros plugins y módulos */
  async rewrites() {
    return [
      {
        source: '/history',
        destination: '/pages/history/index.js'
      },
      {
        source: '/applications',
        destination: '/pages/applications/index.js'
      },
      {
        source: '/challenges',
        destination: '/pages/challenges/index.js'
      }
    ];
  }
};

