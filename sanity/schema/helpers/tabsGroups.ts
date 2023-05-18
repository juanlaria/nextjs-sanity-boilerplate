const tabsGroups = (modulesConfig) => {
	const groups = Object.keys(modulesConfig?.fields) // Go through all fields groups.
	.filter(allFieldsGroup => {
		return !!modulesConfig?.fields[allFieldsGroup]?.length // Check and filter if they have fields inside.
	})
	.map(fieldsGroupName => { // Return an object for every fields group that has fields.
		return {
			name: fieldsGroupName,
			title: fieldsGroupName.charAt(0).toUpperCase() + fieldsGroupName.slice(1), // Capitalize. Not a great solution but works for now
			hidden: ({value}) => {
			const currentModuleFieldsGroups = modulesConfig?.modules.find(module => module.type === value.type)?.fields // Get the current module's list of fields groups
			// if there isn't a module selected yet, don't show the group
			if (!currentModuleFieldsGroups) {
				return true
			} else {
				return !Object.keys(currentModuleFieldsGroups)?.find(moduleFieldsGroupName => moduleFieldsGroupName === fieldsGroupName) // Hide the group if not needed for the current module
			}
			}
		}
	})

	return groups
}

export default tabsGroups