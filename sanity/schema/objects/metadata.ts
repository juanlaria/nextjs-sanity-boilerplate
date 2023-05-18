import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'metadata',
  description:
    'Properties not defined for a specific page, will take the default values defined on Site configuration',
  title: 'Meta Data',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Meta Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'canonical',
      title: 'Canonical',
      type: 'url',
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'string',
    }),
    defineField({
      name: 'twitterHandle',
      title: 'Twitter Handle',
      type: 'string',
    }),
    defineField({
      name: 'robots',
      title: 'Indexing',
      type: 'boolean',
    }),
    defineField({
      title: 'Share asset - Open Graph',
      description:
        'The asset displayed when sharing the website URL in a Facebook post or other platforms such as Slack (can be overridden per page)',
      type: 'image',
      name: 'opgraphAsset',
      options: {
        accept: 'image/jpeg',
      },
    }),
    defineField({
      title: 'Share asset - Twitter',
      description:
        'The asset displayed when sharing the website URL in a tweet (can be overridden per page)',
      type: 'image',
      name: 'twitterAsset',
      options: {
        accept: 'image/jpeg',
      },
    }),
  ],
  initialValue: {
    robots: true,
  },
  preview: {
    select: {
      title: 'title',
    },
  },
})
