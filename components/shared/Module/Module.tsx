// import SanityComponents from 'components/cms'
import modulesConfig from '~/modules.config'

import CSS from './Module.module.scss'

const Module = ({ block }) => {
  const { type, configuration, content } = block || {type: null, configuration: null, content: null}
  const { theme } = configuration || { theme: 'Light'}
  const currentModuleConfig = modulesConfig.modules.find(module => module.type === type?.toLowerCase()) || { isContained: true}
  const { isContained } = currentModuleConfig

  if (type === undefined) {
    return null
  }

  return (
    <section className={`
    ${CSS.module}
    ${theme ? CSS[theme?.toLowerCase()] : ''}
    ${!!isContained ? 'container' : ''}
    `}>
      <p>Module: {type}</p>
    </section>
  )
  // const Component = SanityComponents[_type]
  // if (Component)
  //   return (
  //     <Component
  //       {...content}
  //       settings={settings}
  //       moments={moments}
  //       slug={slug}
  //     />
  //   )
  // if (process.env.VERCEL_ENV === 'production') {
  //   return null
  // } else {
  //   return (
  //     <div className="missing-element">{`Missing component: ${_type}`}</div>
  //   )
  // }
}

export default Module
