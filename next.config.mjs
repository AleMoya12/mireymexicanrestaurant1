/** @type {import('next').NextConfig} */

// Nombre del repositorio en GitHub (el sitio se publica en
// https://alemoya12.github.io/<repo>/), por eso necesitamos basePath.
const repo = "mireymexicanrestaurant1";
const isProd = process.env.NODE_ENV === "production";

// basePath: por defecto /<repo> (GitHub Pages). Se puede forzar vacío para
// hospedar en la raíz de un dominio (Netlify/Vercel) con:
//   NEXT_PUBLIC_BASE_PATH="" npm run build
const envBase = process.env.NEXT_PUBLIC_BASE_PATH;
const basePath = envBase !== undefined ? envBase : isProd ? `/${repo}` : "";

const nextConfig = {
  output: "export", // genera HTML estático en /out
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  images: { unoptimized: true },
  trailingSlash: true,
  // Disponible en el cliente para prefijar rutas de imágenes en <img>.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
