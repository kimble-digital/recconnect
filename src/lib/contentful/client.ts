import { createClient } from 'contentful';
import type { Entry, EntrySkeletonType } from 'contentful';

// Initialize Contentful client
const client = createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_ACCESS_TOKEN,
});

// Preview client for draft content
const previewClient = createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.CONTENTFUL_PREVIEW_TOKEN,
  host: 'preview.contentful.com',
});

export const getClient = (preview = false) => (preview ? previewClient : client);

// Generic fetch helper with error handling
export async function fetchEntries<T extends EntrySkeletonType>(
  contentType: string,
  query: Record<string, unknown> = {},
  preview = false
): Promise<Entry<T>[]> {
  try {
    const response = await getClient(preview).getEntries<T>({
      content_type: contentType,
      ...query,
    });
    return response.items;
  } catch (error) {
    console.error(`Error fetching ${contentType}:`, error);
    return [];
  }
}

export async function fetchEntry<T extends EntrySkeletonType>(
  contentType: string,
  slug: string,
  preview = false
): Promise<Entry<T> | null> {
  try {
    const response = await getClient(preview).getEntries<T>({
      content_type: contentType,
      'fields.slug': slug,
      limit: 1,
    });
    return response.items[0] || null;
  } catch (error) {
    console.error(`Error fetching ${contentType} with slug ${slug}:`, error);
    return null;
  }
}

// Content type-specific fetchers
export const getSuppliers = (query = {}) => fetchEntries('supplier', query);
export const getFeaturedSuppliers = () => fetchEntries('supplier', { 'fields.featured': true });
export const getSuppliersByCategory = (categorySlug: string) => 
  fetchEntries('supplier', { 'fields.categories.sys.contentType.sys.id': 'category', 'fields.categories.fields.slug': categorySlug });

export const getCategories = () => fetchEntries('category', { order: 'fields.name' });

export const getEvents = (upcoming = true) => 
  fetchEntries('event', { 
    order: upcoming ? 'fields.date' : '-fields.date',
    'fields.date[gte]': upcoming ? new Date().toISOString() : undefined,
  });

export const getEvent = (slug: string) => fetchEntry('event', slug);

export const getArticles = (query = {}) => 
  fetchEntries('article', { order: '-fields.publishDate', ...query });

export const getArticlesByType = (type: 'salt_report' | 'rec_matters') =>
  fetchEntries('article', { 'fields.type': type, order: '-fields.publishDate' });

export const getArticle = (slug: string) => fetchEntry('article', slug);

export const getMembershipTiers = () => 
  fetchEntries('membershipTier', { order: 'fields.price' });
