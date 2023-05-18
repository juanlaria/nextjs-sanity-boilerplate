import { Image } from "sanity"

export interface MetadataPayload {
  title?: string
  description?: string
  canonical?: string
  keywords?: string
  twitterHandle?: string
  robots?: boolean
  opgraphAsset?: Image
  twitterAsset?: Image
}

// Page payloads

export interface PagePayload {
  title?: string
  slug?: string
  content?: Array<any>
  metadata?: MetadataPayload
}

export interface SettingsPayload {
  title?: string
  metadata?: MetadataPayload
}