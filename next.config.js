/** @type {import('next').NextConfig} */
const nextConfig = {

    /*Creando clausula para usar 
    la nueva forma de crear rutas*/
    experimental: {
        appDir: true
    },
    reactStrictMode: true,
}

module.exports = nextConfig
