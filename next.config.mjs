/** @type {import('next').NextConfig} */
const nextConfig = {
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader',
        type: 'javascript/auto' // This is important for Webpack 5
      }
    ]
  }
};

export default nextConfig;
