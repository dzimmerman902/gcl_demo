```jsx
const logoWhite = require('../../images/logo-white.png')
const logoTeal = require('../../images/logo-teal.png')
;<CompareBox>
  <CompareHtml>
    <div className='gcl-bgc-grey-1 gcl-mb-10'>
      <img className='gcl-logo' src={logoTeal} />
    </div>
    <div className='gcl-bgc-primary-1 gcl-mb-10'>
      <img className='gcl-logo' src={logoWhite} />
    </div>
    <div className='gcl-bgi-starry-sky gcl-mb-10'>
      <img className='gcl-logo' src={logoWhite} />
    </div>
    <div className='gcl-bgc-secondary-4'>
      <img className='gcl-logo' src={logoWhite} />
    </div>
  </CompareHtml>
  <CompareReact>
    <div className='gcl-bgc-grey-1 gcl-mb-10'>
      <GclLogo src={logoTeal} />
    </div>
    <div className='gcl-bgc-primary-1 gcl-mb-10'>
      <GclLogo src={logoWhite} />
    </div>
    <div className='gcl-bgi-starry-sky gcl-mb-10'>
      <GclLogo src={logoWhite} />
    </div>
    <div className='gcl-bgc-secondary-4 ngcl-mb-10'>
      <GclLogo src={logoWhite} />
    </div>
  </CompareReact>
</CompareBox>
```
