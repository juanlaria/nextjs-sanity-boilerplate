import Head from 'next/head'

const Metadata = ({ title, canonical, description, keywords, robots }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {title && <title>{title}</title>}
      {canonical && <link rel="canonical" href={canonical} />}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      {robots && (
        <meta
          name="robots"
          content={
            process.env.DEPLOY_ENV === 'production'
              ? robots
              : 'noindex,nofollow'
          }
        />
      )}
    </Head>
  )
}

export default Metadata
