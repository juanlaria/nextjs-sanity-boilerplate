import {Layout, Module} from '~/components/shared'
import type { PagePayload, SettingsPayload } from '~/types'

export interface PageProps {
  page: PagePayload | undefined
  settings: SettingsPayload | undefined
  preview?: boolean
}

export function Page({ page, settings, preview }: PageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const { title, content } = page || {}

  return (
    <Layout settings={settings} metadata={page.metadata} preview={preview}>
      {title}
      {content?.map((block) => <Module key={block._key} block={block} />)}
    </Layout>
  )
}