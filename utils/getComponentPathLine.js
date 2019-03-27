
const camelCase = require('lodash/camelCase')
const path = require('path')
const upperFirst = require('lodash/upperFirst')

function getComponentPathLine(componentPath) {
  const dirname = path.dirname(componentPath, '.js')
  const name = dirname.split('/').slice(-1)[0]
  const componentName = upperFirst(camelCase(name))

  return `import { ${componentName} } from '@gaia/gcl'`
}

module.exports = getComponentPathLine