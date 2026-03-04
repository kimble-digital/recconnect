// Contentful content type definitions
// These match the content models in Contentful

import type { Asset, Entry, EntrySkeletonType } from 'contentful';

// Helper type for Contentful rich text
export interface RichTextDocument {
  nodeType: 'document';
  data: Record<string, unknown>;
  content: Array<Record<string, unknown>>;
}

// Category
export interface CategoryFields {
  name: string;
  slug: string;
  description?: string;
  icon?: string;
}

export interface CategorySkeleton extends EntrySkeletonType {
  contentTypeId: 'category';
  fields: CategoryFields;
}

export type Category = Entry<CategorySkeleton>;

// Supplier (updated to match Contentful model)
export interface SupplierFields {
  name: string;
  slug: string;
  shortDescription?: string;
  description: string;
  logo?: Asset;
  website?: string;
  categories?: Entry<CategorySkeleton>[];
  benefit1?: string;
  benefit2?: string;
  targetAudience?: string;
  typicalUsers?: string;
  integrations?: string;
  memberOffer?: string;
  featured?: boolean;
  tier?: 'standard' | 'premium' | 'partner';
  contactName?: string;
  contactEmail?: string;
  contactPhone?: string;
}

export interface SupplierSkeleton extends EntrySkeletonType {
  contentTypeId: 'supplier';
  fields: SupplierFields;
}

export type Supplier = Entry<SupplierSkeleton>;

// Speaker
export interface SpeakerFields {
  name: string;
  slug: string;
  role: string;
  company: string;
  bio?: RichTextDocument;
  headshot?: Asset;
  linkedIn?: string;
}

export interface SpeakerSkeleton extends EntrySkeletonType {
  contentTypeId: 'speaker';
  fields: SpeakerFields;
}

export type Speaker = Entry<SpeakerSkeleton>;

// Event
export interface EventFields {
  title: string;
  slug: string;
  date: string;
  endDate?: string;
  location: string;
  address?: string;
  description: RichTextDocument;
  shortDescription: string;
  featuredImage?: Asset;
  speakers?: Entry<SpeakerSkeleton>[];
  eventbriteId?: string;
  eventbriteUrl?: string;
  eventType: 'workshop' | 'networking' | 'summit' | 'webinar';
  isCornerstone: boolean;
  ticketPrice?: number;
  memberPrice?: number;
}

export interface EventSkeleton extends EntrySkeletonType {
  contentTypeId: 'event';
  fields: EventFields;
}

export type Event = Entry<EventSkeleton>;

// Author
export interface AuthorFields {
  name: string;
  slug: string;
  role?: string;
  bio?: string;
  headshot?: Asset;
}

export interface AuthorSkeleton extends EntrySkeletonType {
  contentTypeId: 'author';
  fields: AuthorFields;
}

export type Author = Entry<AuthorSkeleton>;

// Article
export interface ArticleFields {
  title: string;
  slug: string;
  publishDate: string;
  author: Entry<AuthorSkeleton>;
  type: 'salt_report' | 'rec_matters';
  shortDescription: string;
  content: RichTextDocument;
  featuredImage?: Asset;
  tags?: string[];
}

export interface ArticleSkeleton extends EntrySkeletonType {
  contentTypeId: 'article';
  fields: ArticleFields;
}

export type Article = Entry<ArticleSkeleton>;

// Membership Tier
export interface MembershipTierFields {
  name: string;
  slug: string;
  price: number;
  description: string;
  features: string[];
  ctaText: string;
  ctaUrl: string;
  highlighted: boolean;
  tierType: 'member' | 'supplier';
}

export interface MembershipTierSkeleton extends EntrySkeletonType {
  contentTypeId: 'membershipTier';
  fields: MembershipTierFields;
}

export type MembershipTier = Entry<MembershipTierSkeleton>;

// Page (for static pages)
export interface PageFields {
  title: string;
  slug: string;
  content: RichTextDocument;
  metaDescription?: string;
  featuredImage?: Asset;
}

export interface PageSkeleton extends EntrySkeletonType {
  contentTypeId: 'page';
  fields: PageFields;
}

export type Page = Entry<PageSkeleton>;

// Site Settings (singleton)
export interface SiteSettingsFields {
  siteName: string;
  tagline: string;
  description: string;
  logo: Asset;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    whatsapp?: string;
  };
  contactEmail: string;
  contactPhone: string;
  whatsappNumber: string;
}

export interface SiteSettingsSkeleton extends EntrySkeletonType {
  contentTypeId: 'siteSettings';
  fields: SiteSettingsFields;
}

export type SiteSettings = Entry<SiteSettingsSkeleton>;
