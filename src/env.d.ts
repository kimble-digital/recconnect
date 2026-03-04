/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly CONTENTFUL_SPACE_ID: string;
  readonly CONTENTFUL_ACCESS_TOKEN: string;
  readonly CONTENTFUL_PREVIEW_TOKEN: string;
  readonly CONTENTFUL_MANAGEMENT_TOKEN: string;
  readonly PUBLIC_SITE_URL: string;
  readonly PUBLIC_GA_ID: string;
  readonly PUBLIC_GTM_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
