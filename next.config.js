const withNextIntl = require('next-intl/plugin')(
  './src/i18n/request.ts'
)

/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV !== 'production';

// DEV: React Refresh/HMR için 'unsafe-eval' + websocket bağlanma izni
// PROD: Sıkı CSP ile güvenlik
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval'" : ""} https://plausible.io`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https: *.s3.amazonaws.com *.s3.*.amazonaws.com",
  "font-src 'self' data:",
  `connect-src 'self' https://plausible.io ${isDev ? "ws://localhost:* http://localhost:*" : ""}`,
  "frame-ancestors 'none'",
  "base-uri 'self'",
].join("; ");

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: ['localhost', 'bondshield.app'],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    serverComponentsExternalPackages: ['@sentry/nextjs'],
  },
  // Static export için headers, rewrites ve redirects kaldırıldı
}

module.exports = withNextIntl(nextConfig)