const path = require('path')
const getComponentPathLine = require('./utils/getComponentPathLine')

module.exports = {
  components: ['src/components/**/*.jsx'],
  require: [
    path.join(__dirname, 'src/scss/index.scss'),
    path.join(__dirname, 'utils/styleguide.setup.js'),
    path.join(__dirname, 'utils/prism/prism.css'),
    path.join(__dirname, 'utils/prism/prism.js'),
  ],
  ignore: [
    path.join(__dirname, 'src/components/AplSidebar/AplSidebarItem.jsx'),
    path.join(__dirname, 'src/components/AplSidebar/AplSidebarSubItem.jsx'),
    path.join(__dirname, 'src/components/AplTabs/AplTabsContent.jsx'),
    path.join(__dirname, 'src/components/AplTabs/AplTabsItem.jsx'),
    path.join(__dirname, 'src/components/AplTabs/AplTabsList.jsx'),
    path.join(__dirname, 'src/components/AplTabs/AplTabsPane.jsx'),
  ],
  ribbon: {
    url: 'https://gaia.com',
    text: 'Development',
  },
  serverPort: 6061,
  styleguideComponents: {
    Logo: path.join(__dirname, 'utils/components/Logo')
  },
  styles: {
    StyleGuide: {
      logo: {
        backgroundColor: '#01b4b4',
        height: '120px',
        padding: '0',
      },
      sidebar: {
        backgroundColor: '#01b4b4',
      },
    },
  },
  theme: {
    color: {
      link: 'white',
      linkHover: 'none',
    },
  },
  title: 'Gaia Component Library',
  getComponentPathLine
}
