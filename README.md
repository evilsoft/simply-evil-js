# simplyEvil

***simplyEvil*** is a starter project template using a simple npm script based build system.
There are times when setting up a build system like [gulp](http://gulpjs.com/)
or [grunt](http://gruntjs.com/) is a bit heavy. That is where
***simplyEvil*** comes in. It gives you all the goodies you need to get started, and is pretty light.

## Getting started
After pulling down this repo, the git history for the build system resides in the project. To remove the history and start fresh, a `zap` script is included. When you run `zap`, it will remove the git history, set up a new history and commit the initial build system to your new repo. You will need to set up your remote branch yourself. To run this, just run the following inside of your new project directory:

```
$ npm run zap
```

Now that you have made the project your own, it is time to pull down the dependencies. All you need to do, using the package manager of your choosing (`npm` is shown here):

```
$ npm install
```

After everything is installed, may take a while depending on what you have cached/built through `npm`, you can start the development server by running:

```
$ npm start
```

This will compile everything (html, js and css) and start a browser-sync instance available at:

```
http://localhost:1337
```

The start command will also set up watches on the source files for: html, css and javascript. What that means is that when you edit a file in the `dev/` directory, the appropriate asset (html, css or js) will be recompiled and because of [browser-sync](http://www.browsersync.io/) the browser you are developing in will reload with the new changes.

## What you get
This build system will compile the following with one of two flavors (development and distribution):

* **HTML** - Using [pug](http://pug-lang.com/) it compiles every pug file in `src/pages/`.
* **CSS** - Opted to use [less](http://lesscss.org/) to keep everything javascript. The build system points to the entry file: `src/less/main.less` so make sure to import your application specific `*.less` files there. Vendor prefixing is provided through [less-plugin-autoprefix](https://github.com/less/less-plugin-autoprefix) that is setup to provide vendor prefixes for the lastest two versions of all the major browsers. Just write your CSS as it would be expected without prefixing and you will be good(`display: flex;`). Also I have included some of the helpers and vars I use in my projects for quick and easy layout, colors typography. Not much to get in the way, and it is easy to wipe if you don't want to use them.  ***DO NOT remove the entry point file.***
* **Javascript** - This build system uses es6 by compiling your source through [babel](https://babeljs.io/). Using [webpack](http://webpack.github.io/) for bundle creation, the system listens to you es6 files in `src/js/` (either `*.js` or `*.jsx` for you React folks out there as babel does JSX out of the box). The entry point for the app is the file `src/js/index.js`. From there using the default CommonJS interface of webpack, you just need to `import Blah from 'path/to/blah'` and the build system will include that file in your final bundle. As a side note, your development code will be eval'ed and an inline source map is created, so you can see where exceptions have occurred in your original source (in the browser under sources, available in the webpack tree item). ***DO NOT remove the entry point file.***
* **Development Server** - In development all built files are served from `site/` using [browser-sync](http://www.browsersync.io/). Once you make changes to any of your source files, a build will be triggered and the new assets update in the `site/` folder. Once those files are changed, your open web browser will refresh itself with the changes.

## Useful build commands
In this simple build system, we are using npm to synchronize the build process (as opposed to using a grunt or gulp system). That means all commands you would use to interact with the build system will be run through npm. Some commands are against baked in scripts in npm and other are not. That is why you will see some commands that use the command `run` in the command. Also you **MUST USE npm -v >= 2.0**.

### `$ npm start`
This is the main command used in development. This command does the following:

* Clean out any old bits inside of the `dev/` folder.
* Ensure that the `dev/` folder exists.
* Build all assets and deposit the results in their respective folders in `dev/`.
* Set up watches on your source directory and trigger rebuilds with changes.
* Start up the development web server.

This command can be stopped in the terminal with a simple `Ctrl+c`. There is a browser-sync web interface for tweaking the synchronization between browsers. It is available at `http://localhost:3030`. Read up on the browser-sync docs for all the fun you can have with it.

### `$ npm run build`
This is the command to run when you are releasing your awesome into the universe. It provides production ready assets for tagging on the githubs. It does a lot like the `npm start` command but in different ways, and it does not start a development server. It goes like this:

* Clean out any old bits inside of the `dist/` folder.
* Ensure that the `dist/` folder exists.
* Build all assets and deposit the results in `dist/`. These assets will be stripped of any dead code paths, uglified and minified.
