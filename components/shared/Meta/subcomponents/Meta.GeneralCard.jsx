import Head from 'next/head'

const GeneralCard = ({ canonical, title, siteTitle, description, image }) => {
  return (
    <Head>
      {canonical && <meta name="og:url" content={canonical} />}
      {title && <meta name="og:title" content={title} />}
      {description && <meta name="og:description" content={description} />}
      {image?.url && <meta property="og:image" content={image.url} />}
      <meta property="og:type" content="website" />
      {siteTitle && <meta property="og:site_name" content={siteTitle} />}
    </Head>
  )
}

export default GeneralCard
