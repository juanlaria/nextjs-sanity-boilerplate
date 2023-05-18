const fields = `
title,
description,
canonical,
keywords,
twitterHandle,
robots,
opgraphAsset{
	...,
	asset->
},
twitterAsset{
	...,
	asset->
},
`

const metadata = (name = 'metadata') => `${name} {
	${fields}
}`

export { metadata as default, fields as metadataFields }
