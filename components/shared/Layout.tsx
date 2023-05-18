
import { PreviewBanner } from '~/components/preview/PreviewBanner'
import { Meta } from '~/components/shared'
import { MetadataPayload,SettingsPayload } from '~/types'

const fallbackSettings: SettingsPayload = {
  metadata: {}
}

export interface LayoutProps {
  children: React.ReactNode
  settings: SettingsPayload | undefined
  metadata: MetadataPayload | undefined
  preview?: boolean
}

export default function Layout({
  children,
  settings = fallbackSettings,
  metadata,
  preview,
}: LayoutProps) {
  return (
    <>
      {preview && <PreviewBanner />}
        <Meta
          companyName={settings?.title}
          metadata={metadata}
          defaultMetadata={settings?.metadata}
        />
      <>{children}</>
    </>
  )
}