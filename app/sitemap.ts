import type { MetadataRoute } from 'next';
import { posts } from '@/content/posts';
import { SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

const PAGES = [
  '/',
  '/sales-training',
  '/virtual-training',
  '/workshops-and-seminars',
  '/who-we-serve',
  '/speaking',
  '/for-meeting-planers',
  '/products',
  '/about',
  '/reviews',
  '/media',
  '/blog',
  '/contact',
  '/privacy-policy',
  '/terms-and-condition',
  '/cookies',
  '/pre-form',
  '/room-and-audio-visual-requirements',
  '/photo',
  '/introduction',
  '/security',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...PAGES.map((path) => ({ url: `${SITE_URL}${path}` })),
    ...posts.map((post) => ({ url: `${SITE_URL}/post/${post.slug}` })),
  ];
}
