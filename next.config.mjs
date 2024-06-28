/** @type {import('next').NextConfig} */

export const reactStrictMode = false;
export const webpack5 = true;
export function webpack(config) {
  config.resolve.fallback = { fs: false };

  return config;
}