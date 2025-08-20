import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ESLint/TS のエラーで本番ビルドを止めない
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
};

export default nextConfig;