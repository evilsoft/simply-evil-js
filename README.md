# simplyEvil

***simplyEvil*** is a starter project template using a simple npm script based build system.
There are times when setting up a build system like [gulp](http://gulpjs.com/)
or [grunt](http://gruntjs.com/) is a bit heavy. That is where
***simplyEvil*** comes in. It gives you all the goodies you need to get started, and is pretty light.

## Getting started
***Note:*** *npm verion >= 2.0 is required to use this build system, chances are good you may not have that requirement met. That is okay, just run the following:*

```
$ npm install -g npm
```

*you may need to `sudo` this command. If you do, i recommend you look into using something like [OiNutter](https://github.com/OiNutter)'s fabulous [nodenv](https://github.com/OiNutter/nodenv).*

After pulling down this repo, you just need to run the following in the directory where this repo is cloned:

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

Finally, this repo also includes a test suite. It may be run for continuous deployment for options like [jenkins](https://jenkins-ci.org/) or [travis](https://travis-ci.org/) that need unformatted utf-8 strings) just by running the command:

```
$ npm test
```
For testing in development, then in a separate terminal run the following:

```
$ npm run specs
```

This will start a [karma](http://karma-runner.github.io/0.12/index.html) (the ONE good thing that has come out of AngularJS so far. :anguished:) server that can be  to reached by any browser at the following address:

```
http://localhost:9876
```

To debug your specs, I have included [karma-jasmine-html-reporter](https://www.npmjs.com/package/karma-jasmine-html-reporter). It is available at:

```
http://localhost:9876/debug.html
```
The jasmine web reporter will not live reload, so you will need to refresh during the debugging process.

In addition to the html runner/reporter , it uses headless [phantom-js](http://phantomjs.org/) in the terminal with a nice, mocha-like output. Any file that is either a spec or a file that is referenced by a spec is changed, the suite will be ran again, showing the results of your change. Like anything else, this can be stopped by hitting `Ctrl+c`.

## What you get
This build system will compile the following with one of two flavors (development and distribution):

* **HTML** - Using [pug](http://pug-lang.com/) it compiles every pug file in `src/pages/`.
* **CSS** - Opted to use [less](http://lesscss.org/) to keep everything javascript. The build system points to the entry file: `src/less/main.less` so make sure to import your application specific `*.less` files there. Vendor prefixing is provided through [less-plugin-autoprefix](https://github.com/less/less-plugin-autoprefix) that is setup to provide vendor prefixes for the lastest two versions of all the major browsers. Just write your CSS as it would be expected without prefixing and you will be good(`display: flex;`). Also I have included some of the helpers and vars I use in my projects for quick and easy layout, colors typography. Not much to get in the way, and it is easy to wipe if you don't want to use them.  ***DO NOT remove the entry point file.***
* **Javascript** - This build system uses es6 by compiling your source through [babel](https://babeljs.io/). Using [webpack](http://webpack.github.io/) for bundle creation, the system listens to you es6 files in `src/js/` (either `*.js` or `*.jsx` for you React folks out there as babel does JSX out of the box). The entry point for the app is the file `src/js/index.js`. From there using the default CommonJS interface of webpack, you just need to `import Blah from 'path/to/blah'` and the build system will include that file in your final bundle. As a side note, your development code will be eval'ed and an inline source map is created, so you can see where exceptions have occurred in your original source (in the browser under sources, available in the webpack tree item). ***DO NOT remove the entry point file.***
* **Specs** - All spec files you need to worry about are in `specs/src/`. The system uses [karma](http://karma-runner.github.io/0.12/index.html) as a spec runner and [jasmine](https://jasmine.github.io/2.3/introduction.html) for the spec suite. The entry for the specs is `specs/test-context.js`, ***DO NOT remove the entry point file.***
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

### `$ npm test`
This is the test command that should be used by your Continuous Integration/Deployment platform. This will basically run your entire test suite with unformatted utf-8 encoding in the browser and return either pass or fail with some debug information. Typically, you will want to use the development spec runner when working with specs. This is just there for CI purposes.

### `$ npm run specs`
When working with your specs this can be run in a terminal separate from the terminal you are running `npm start` in. This will build all of your specs and run them in the console using [phantomjs](http://phantomjs.org/). There is a nice console reporter that looks like the reporter used for mocha. Also you can open as many browsers as you like to: `http://localhost:9876` and every time your specs rerun in the console, they will also rerun in the browsers. This is **GREAT** for cross browser testing. Have all target browsers open and you will get instant feedback when cross browser issues arise. I even point my mobile devices to that port through my wireless network to get mobile tested as well.

Another neat thing about the html runner, is the ability to use the jasmine html reporter that most of you are probably acclimated to for spec debugging. Either click the button in the top-right corner of the karma reporter in your browser or just navigate to `http:/localhost:9876/debug.html`. I choose the version that does not do live reload, as it tends to get in my way when I am debugging my specs.

This basically does the following:

* Using a web pack context, it builds and then runs all specs in the jasmine suite.
* Sets up a karma server on port `9876`.
* Sets up listeners for the spec files, and through the magic of CommonJS (web pack in this case) will have watchers set up to any application source files `require`'ed through a contextualized require method I attached to the global called `appRequire`.
