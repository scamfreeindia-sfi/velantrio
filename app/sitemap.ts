import { MetadataRoute } from 'next'
 
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://velantrio.com',
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // We can add anchors here if needed, but for now, the root is most important
  ]
}
