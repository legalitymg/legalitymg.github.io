import type { NextConfig } from "next";

const exportForGitHubPages =
  process.env.EXPORT_GITHUB_PAGES === "true";

const nextConfig: NextConfig = exportForGitHubPages
  ? {
      output: "export",
      trailingSlash: true,
      images: { unoptimized: true },
    }
  : {};

export default nextConfig;
