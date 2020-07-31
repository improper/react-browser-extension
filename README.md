# Hot Reloading React Browser Extension

Good news! This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It has not been ejected and none of the original `create-react-app` files have been modified!

## About

This project exists to provide a React-based browser extension environment that, unlike others, can withstand the test of time. You'll see that this project consist of the original unmodified `create-react-app` files and that the React app has not been ejected. 

## How is this different from `create-react-app`?

### Additional files

Two core files have been added to make React browser-extension-ready:

1. `webpack.extend.js`: Extends Reacts WebPack config to override a few things.
1. `src/config/manifest.ts`: Manifest.json config supported by TypeScript
   - Supported by types in: `src/config/manifest.d.ts`

Optional files added for proof-of-concept:

1. `src/static/js/background-jon-1.js`
1. `src/static/js/background-jon-2.js`

> You will see these files referenced in `src/config/manfiest.ts` background script list.

### Dev Server

Normally `yarn start` files are served from memory. Because browser extensions expect to see files on the disk, `yarn start` writes the development files to disk within the `build` directory. By having both `yarn start` (hot reloading enabled) and `yarn build` write to the same directory, all that you need to do to switch between production/development testing is reload the extension in the browser's extension manager.

## How To Use

1. `yarn install` - Install packages
1. `yarn start` - Start dev environment
   - Hot Reloading works as expected in a React app
   - Files are also written to the `build` directory
   - `src/static/js/` files are copied to the `build` directory so that they can be referenced by the manifest.json.
     - These files do not yet use React's Babel compiler. They are copied as-is.
1. `yarn build` - Output production build to `build` directory

`yarn start` and `yarn build` output to the same location. Once the `build` directory is available, you'll need to open `chrome://extensions` (Chrome) or `about:addons` (Firefox) to load your extension. Once loaded, you'll only need to reload your extension when the manifest file changes.

> **Hint:** Developer/Debug mode will need to be enabled in Chrome & Firefox to load a module by directory.


