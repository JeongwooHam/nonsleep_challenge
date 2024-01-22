/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const stylexPlugin = require("@stylexjs/nextjs-plugin");

const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
};

module.exports = stylexPlugin({
  filename: "stylex-bundle.css",
  rootDir: __dirname,
  useCSSLayers: true,
})(nextConfig);
