import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    async rewrites() {
      return [
        {
          source: '/:locale/articles/:slug.md',
          destination: '/api/articles/:locale/:slug',
        },
      ];
    },
};

export default withNextIntl(nextConfig);
