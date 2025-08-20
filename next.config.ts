import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },   // ESLintエラーで本番ビルドを止めない
  typescript: { ignoreBuildErrors: true } // TSエラーで本番ビルドを止めない
};

export default nextConfig;