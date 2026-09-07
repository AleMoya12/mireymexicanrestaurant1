/** @type {import('next').NextConfig} */

// Nombre del repositorio en GitHub (el sitio se publica en
// https://alemoya12.github.io/<repo>/), por eso necesitamos basePath.
const repo = "mireymexicanrestaurant1";
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? `/${repo}` : "";

const nextConfig = {
  output: "export", // genera HTML estático en /out para GitHub Pages
  basePath,
  assetPrefix: isProd ? `/${repo}/` : "",
  images: { unoptimized: true },
  trailingSlash: true,
  // Disponible en el cliente para prefijar rutas de imágenes en <img>.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
