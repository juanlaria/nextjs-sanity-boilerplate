import { defineField, defineType } from 'sanity'

import modulesConfig from '~/modules.config'

import { fieldCreator, tabsGroups } from '../helpers'

const modulesTitles = modulesConfig?.modules.map(module => {
  return {
    title: module.title,
    value: module.type
  }
})

export default defineType({
  name: 'module',
  title: 'Module',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  groups: tabsGroups(modulesConfig),
  fields: [
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: modulesTitles,
        layout: 'dropdown',
      }
    }),
    ...modulesConfig?.fields.configuration.map(field => {
      return fieldCreator(field, 'configuration')
    }),
    ...modulesConfig?.fields.content.map(field => {
      return fieldCreator(field, 'content')
    })
  ],
  preview: {
    select: {
      title: 'title',
      type: 'type',
    },
    prepare({ title, type }) {
      let customSubtitle
      let customTitle = 'Empty title'
      const capitalizedType = type?.charAt(0).toUpperCase() + type?.slice(1)

      if (type) {
        customSubtitle = capitalizedType
      }

      if (title) {
        customTitle = title
      } else {
        if (type) {
          customTitle = `${capitalizedType} module`
        } else {
          customTitle = "Please select a module type"
        }
      }

      return {
        title: customTitle ,
        subtitle: customSubtitle,
      }
    },
  },
})
