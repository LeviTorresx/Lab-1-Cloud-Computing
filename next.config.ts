import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Exportación estática: compatible con Vercel, AWS Amplify (deploy manual) y Azure Static Web Apps
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
