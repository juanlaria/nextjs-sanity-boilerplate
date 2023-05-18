import { definePreview } from 'next-sanity/preview'

import { dataset, projectId } from '~/sanity/env'
import page from '~/sanity/schema/documents/page'

function onPublicAccessOnly() {
  throw new Error(`Unable to load preview as you're not logged in`)
}

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = [
  // home.name,
  page.name,
]

export const usePreview = definePreview({
  projectId,
  dataset,
  onPublicAccessOnly,
})
