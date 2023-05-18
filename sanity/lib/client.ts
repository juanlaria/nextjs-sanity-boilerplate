import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '~/sanity/env'
import {
  // homePageQuery,
  pagePaths,
  pagesBySlugQuery,
  settingsQuery,
} from '~/sanity/lib/queries/queries'
import type {
  PagePayload,
  SettingsPayload
} from '~/types'

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const sanityClient = (token?: string) => {
  return projectId
    ? createClient({ projectId, dataset, apiVersion, useCdn, token })
    : null
}

// export async function getHomePage({
//   token,
// }: {
//   token?: string
// }): Promise<HomePagePayload | undefined> {
//   return await sanityClient(token)?.fetch(homePageQuery)
// }

export async function getPageBySlug({
  slug,
  token,
}: {
  slug: string
  token?: string
}): Promise<PagePayload | undefined> {
  return await sanityClient(token)?.fetch(pagesBySlugQuery, { slug })
}

export async function getSettings({
  token,
}: {
  token?: string
}): Promise<SettingsPayload | undefined> {
  return await sanityClient(token)?.fetch(settingsQuery)
}

export async function getPagePaths(): Promise<string[]> {
  return await sanityClient()?.fetch(pagePaths)
}