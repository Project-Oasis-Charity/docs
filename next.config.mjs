import { createMDX } from 'fumadocs-mdx/next';
import { getGithubLastEdit } from 'fumadocs-core/server';
const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  
  async rewrites() {
    
    return [
      {
        source: '/docs/:path*.mdx',
        destination: '/llms.mdx/:path*',
      },
      
    ];
  },
  reactStrictMode: true,
};

export default withMDX(config);
