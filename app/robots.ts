import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://embercastle.hoteleden.in/sitemap.xml',
    host: 'https://embercastle.hoteleden.in',
  }
}
