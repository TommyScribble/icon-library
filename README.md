# React Icon Library
--- This project still currently being developed ---  
This is library of icons that can be used as react components. Just import it in to your project via Yarn or NPM.

## Table of Contents

- [Installation](#installation)
- [Icons](#icons)
- [Contributing](#contributing)

## Installation

Install via Yarn 
```sh
yarn add react-icon-library
```
or NPM
```sh
npm install react-icon-library
```
Import into the component that you want to add an icon too
```javascript
import Icon from 'react-icon-library';
```
Then add the component and pass it the iconName prop
```javascript
<Icon iconName={iconName} />
```

## Icons

There are three of every icon. 4px stroke. 1.5px stroke and 1px stroke. So pick the stroke that matches your project.  

The current list of icons include:
- AnalyticsGraphBar
- AnalyticsGraphBar1
- AnalyticsGraphBar2
- BabyTrolley
- BabyTrolley1
- BabyTrolley2
- Burger
- Burger1
- Burger2
- CaretDown
- CaretDown1
- CaretDown2
- CaretLeft
- CaretLeft1
- CaretLeft2
- CaretRight
- CaretRight1
- CaretRight2
- CaretUp
- CaretUp1
- CaretUp2

## Contributing  

Download the repo to your machine
```shell
git clone git@github.com:TommyScribble/icon-library.git
```

In the project directory, you can run:
```shell
yarn start
```

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
```shell
yarn test
```
Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
```shell
yarn run build
```
Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
```shell
yarn run eject
```
**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
