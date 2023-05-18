import { SchemaTypeDefinition } from 'sanity'

import page from './documents/page'
import metadata from './objects/metadata'
import module from './objects/module'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    metadata,
    module,
    page
  ],
}
