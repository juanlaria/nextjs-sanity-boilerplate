import { MetadataPayload } from 'types'

import Favicon from './subcomponents/Meta.Favicon.jsx'
import GeneralCard from './subcomponents/Meta.GeneralCard.jsx'
import Metadata from './subcomponents/Meta.Metadata.jsx'
import TwitterCard from './subcomponents/Meta.TwitterCard.jsx'

const Meta = ({
  companyName,
  title: titleProp,
  customTabTitle,
  metadata,
  defaultMetadata,
}: {
  companyName?: string
  title?: string
  customTabTitle?: string
  metadata?: MetadataPayload
  defaultMetadata?: MetadataPayload
}) => {
  if (!metadata && !defaultMetadata) {
    if (titleProp) {
      return <title>{titleProp}</title>
    }
    return null
  }

  const title = customTabTitle || metadata?.title || defaultMetadata?.title
  const tabTitle =
    title && companyName ? `${title} - ${companyName}` : title || companyName
  const description = metadata?.description || defaultMetadata?.description
  const canonical = metadata?.canonical || defaultMetadata?.canonical
  const keywords = metadata?.keywords || defaultMetadata?.keywords
  const robots = metadata?.robots || defaultMetadata?.robots
  const opgraphAsset = metadata?.opgraphAsset || defaultMetadata?.opgraphAsset
  const twitterHandle =
    metadata?.twitterHandle || defaultMetadata?.twitterHandle
  const twitterAsset = metadata?.twitterAsset || defaultMetadata?.twitterAsset

  return (
    <>
      <Metadata
        title={tabTitle}
        canonical={canonical}
        description={description}
        keywords={keywords}
        robots={robots}
      />
      <GeneralCard
        siteTitle={companyName}
        title={title || tabTitle}
        description={description}
        image={opgraphAsset?.asset}
        canonical={canonical}
      />
      <TwitterCard
        title={title || tabTitle}
        description={description}
        image={twitterAsset?.asset}
        handle={twitterHandle}
      />
      <Favicon />
    </>
  )
}

export default Meta
