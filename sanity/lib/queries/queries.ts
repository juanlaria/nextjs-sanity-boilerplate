import { groq } from 'next-sanity'

import fragments from './fragments'

// export const homePageQuery = groq`
//   *[_type == "home"][0]{
//     _id,
//     footer,
//     overview,
//     showcaseProjects[]->{
//       _type,
//       coverImage,
//       overview,
//       "slug": slug.current,
//       tags,
//       title,
//     },
//     title,
//   }
// `

export const pagesBySlugQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    ${fragments.metadata()},
    content[]{
      ...,
    }
  }
`

export const pagePaths = groq`
  *[_type == "page" && slug.current != null].slug.current
`

export const settingsQuery = groq`
  *[_type == "settings"][0]{
	...
  }
`