import Head from 'next/head'

const TwitterCard = ({ image, title, description, handle }) => {
  return (
    <Head>
      <meta name="twitter:card" content="summary" />
      {image?.url && <meta name="twitter:image" content={image.url} />}
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {handle && <meta name="twitter:site" content={handle} />}
      {handle && <meta name="twitter:creator" content={handle} />}
    </Head>
  )
}

export default TwitterCard
