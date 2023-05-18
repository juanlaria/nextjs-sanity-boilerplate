import { DocumentIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
  type: 'document',
  name: 'page',
  title: 'Page',
  icon: DocumentIcon,
  groups: [
    {
      name: 'content',
      title: 'Content',
    },
    {
      name: 'metadata',
      title: 'SEO & Metadata',
    },
  ],
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
	    description: 'This will only be used on the CMS and will not be visible on the website.',
    }),
    defineField({
      type: 'slug',
      name: 'slug',
      title: 'Slug',
      description: 'This will be used to generate the URL for this page.',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content Modules',
      type: 'array',
      group: 'content',
      of: [
        defineArrayMember({
          name: 'module',
          title: 'Module',
          type: 'module',
        }),
      ],
    }),
    defineField({
      name: 'metadata',
      title: 'Metadata',
      type: 'metadata',
      group: 'metadata',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'Page',
        title,
      }
    },
  },
})