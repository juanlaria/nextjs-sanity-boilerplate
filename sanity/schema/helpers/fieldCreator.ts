import { defineField } from "sanity"

import modulesConfig from '~/modules.config'


const fieldCreator = ({schema, type}, group) => {
	return defineField({
		...schema,
		group,
		hidden: ({parent}) => {
			if (parent?.type) {
				const currentModule = modulesConfig?.modules?.find(module => module?.type === parent?.type)
				const currentField = currentModule?.fields[group]?.find(field => field === type)
				// If the current field is not defined, it means that the module does not have that field
				return !currentField
			}

			return true
		}
	})
}

export default fieldCreator