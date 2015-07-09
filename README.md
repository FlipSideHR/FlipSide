# FlipSide

> Multi-Exchange Bitcoin Trading Platform (Desktop App built with NW.js)

## Team

  - __Product Owner__: Michael Symmes
  - __Scrum Master__: Dick Treichel
  - __Development Team Members__: Mokhtar Naamani, Amy Li, Simon Burns, Michael Symmes, Dick Treichel

## Usage
Clone the repo and enter the directory then issue the following commands:

    npm install
    npm start

## Requirements

- node.js (v0.12+)

## Structure of the project
The project was built using [nw-boilerplate](https://github.com/szwacz/nw-boilerplate)

There are **two** `package.json` files:  

#### 1. For development
In the project root path: `package.json`. Contains dependencies for development environment and build scripts. **This file is not distributed with the real application!**

The version of NW.js runtime to use is defined in:
```json
"devDependencies": {
  "nw": "^0.12.2"
}
```

#### 2. For the application
Located at: `app/package.json`. This is the **manifest** of the application. App dependencies are declared here.

### Project folder structure

- `app` - application code
- `config` - environment specific stuff
- `build` - built, runnable application
- `releases` - ready for distribution installers will land here
- `resources` - resources for particular operating system
- `tasks` - gulp build and development environment scripts

# Development

#### Installation

```
npm install
```
This will download NW runtime, and install dependencies for the app.

#### Starting the app

```
npm start
```

#### Unit tests
```
npm test
```
Will run [jasmine](http://jasmine.github.io/2.0/introduction.html) unit tests.

The runner will search through the project for all `*.spec.js` files and include them automatically.


# Making a release

**Note:** There are various icon and bitmap files in `resources` directory.
> TODO: replace the boilerplate images and icons

To build a distribution installer issue command:
```
npm run release
```
It will start the packaging process for operating system you are running this command on. Ready for distribution file will be outputted to `releases` directory.

You can create Windows installer only when running on Windows, the same is true for Linux and OSX. So to generate all three installers you need all three operating systems.


## Special precautions for Windows
As installer [NSIS](http://nsis.sourceforge.net/Main_Page) is used. You have to install it (version 3.0), and add NSIS folder to PATH in Environment Variables, so it is reachable to scripts in this project (path should look something like `C:/Program Files (x86)/NSIS`).


Copyright (c) 2014-2015 Jakub Szwacz
