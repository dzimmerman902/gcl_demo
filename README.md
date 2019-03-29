<h1 align="center" markdown="1"><img src="./src/images/logo-teal.png"> Component Library (gcl) Demo</h1>

**Components Library developed for Gaia inc.**

The Gaia Component Library (otherwise known as gcl) was developed to assist
developers with maintaining a certain design pattern while they can focus on
other needs within the company.

Components/designs are supplied via Zeplin and implemented inside of the gcl
repository. Those pieces are then added to the pattern-library guide being
developed as well.

## Usage

```bash
git clone git@github.com:dzimmerman902/gcl_demo.git
cd gcl_demo
npm i
```

### Development

Will open up development server on localhost:6061.

```bash
npm run styleguide
```

### Production

Package will be stored on private npm server. Typing in the command below will
automatically build using the prepublish script and the package will publish to
npm.

```bash
npm publish
```

### Testing

Basic testing is available via Jest & Enzyme.

```bash
npm run test:watch
```

## React Styleguidist

Components are built using the library
[react-styleguidist](https://github.com/styleguidist/react-styleguidist/blob/master/Readme.md).
It creates an easy to use environment to test code and view the pieces being
developed.

## Demo

### Styleguide

![](https://media.giphy.com/media/4Tvnz8ZVmSerU4M5bL/giphy.gif)

### Pattern Library

![](https://media.giphy.com/media/l1A5d3wDMzcCe3vktu/giphy.gif)
