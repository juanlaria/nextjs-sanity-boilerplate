const modulesConfig = {
	modules: [
		{
			type: 'hero',
			title: 'Hero',
			description: 'A description for this module',
			isContained: false,
			fields: {
				configuration: ['alignment', 'theme'],
				content: ['title', 'description']
			}
		},
		{
			type: 'features',
			title: 'Features',
			description: 'A description for this module',
			isContained: true,
			fields: {
				configuration: ['alignment'],
				content: ['description']
			}
		},
		{
			type: 'contact',
			title: 'Contact',
			description: 'A description for this module',
			isContained: false,
			fields: {
				content: ['title']
			}
		}
	],
	fields: {
		configuration: [
			{
				type: 'alignment',
				schema: {
					name: 'alignment',
					title: 'Alignment',
					type: 'string',
					options: {
					list: ['Normal', 'Inverted'],
					layout: 'dropdown',
					},
					initialValue: 'Normal'
				}
			},
			{
				type: 'theme',
				schema: {
					name: 'theme',
					title: 'Theme',
					type: 'string',
					options: {
					  list: ['Dark', 'Light'],
					  layout: 'dropdown',
					},
					initialValue: 'Light'
				}
			}
		],
		content: [
			{
				type: 'title',
				schema: {
					name: 'title',
					type: 'string'
				},
				query: () => {
					return 'title'
				}
			},
			{
				type: 'description',
				schema: {
					name: 'description',
					type: 'text',
					rows: 2
				},
				query: () => {
					return 'description'
				}
			}
		]
	}
}

export default modulesConfig