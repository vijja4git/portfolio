// utils/sanityClient.ts
import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: 'c33jv3z9', // ✅ your real project ID
  dataset: 'production',
  apiVersion: '2023-01-01', // use today's date
  useCdn: true, // cache for performance
});