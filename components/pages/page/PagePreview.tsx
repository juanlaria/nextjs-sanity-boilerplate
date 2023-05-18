import { usePreview } from '~/sanity/lib/preview'
import { pagesBySlugQuery } from '~/sanity/lib/queries/queries'
import type { PagePayload } from '~/types'

import { Page, PageProps } from './Page'

export default function PagePreview({
  token,
  page,
  settings,
}: {
  token: null | string
} & PageProps) {
  const pagePreview: PagePayload = usePreview(token, pagesBySlugQuery, {
    slug: page.slug,
  })

  return (
    <Page
      page={pagePreview}
      settings={settings}
      preview={true}
    />
  )
}