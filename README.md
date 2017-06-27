## React Redux Cordova Boilerplate
Project of existing app - hybrid version of react + redux + cordova

## Installing
1. Install dependencies: ```npm i``` or ```yarn install```
2. Install global tools: ```npm install -g cordova```
3. Add your cordova platform by running ```cordova platform add %PLATFORM%``` (android and more)

## Usage
- ```npm run lint[:report]``` - runs linting against src folder and **fix some of the issues**, `report` option to generate html report to `./report.html`.
- ```npm run start[:prod]``` - starts a server, with react model replacement and devtools on `localhost:8080`, `prod` option to minify the build (same build eventually integrated with the cordova app).
- ```npm run build[:prod][:watch]``` - builds the project (single html file and single js file) as it does for development.
- ```npm run test[:watch][:coverage]``` - runs Mocha testing, outputs result to console, `watch` options to watch files and test again after file modification, `coverage` option to generate coverage reports to `./coverage` folder (`index.html` is a usuful one!).

