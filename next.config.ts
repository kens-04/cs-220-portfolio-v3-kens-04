import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 静的書き出し
  output: "export",
  // プロジェクトページの場合：ここを "/あなたのリポジトリ名" にする
  // 例: "/nextjs-github-pages"
  basePath: "/cs-220-portfolio-v3-kens-04",
  // 画像最適化をOFF（静的書き出しでは不可）
  images: { unoptimized: true },
};

export default nextConfig;
