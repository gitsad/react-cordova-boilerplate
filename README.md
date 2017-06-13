## Part of Readme from https://github.com/unimonkiez/react-cordova-boilerplate

## Changed parts
1. Changed structure of projects, from containers and components to views and modules which have containers and components 
2. Styling components is subjective opinion, I can't deny that Radium is very helpful tool for isolating and scaling styles but nowadays we have a lot of new things and tools which on
  the first throw of eye seem to be 'must be' in our projects. We have to remember that these tools are still in development and we don't know if this particular tool will not be deprecated in future.
   Anyway, if you want to use tool like Radium I didn't remove this feature but I have added also main.scss to which you can import other scss files with styles of yuor components.
3. Some things need to be deleted because during changing structure of project I've forgot about some files. 

## Installing
1. Install dependencies: ```npm i``` or ```yarn install```
2. Install global tools: ```npm install -g cordova```
3. Add your cordova platform by running ```cordova platform add %PLATFORM%``` (android and more)

## Usage
- ```npm run lint[:report]``` - runs linting against src folder and **fix some of the issues**, `report` option to generate html report to `./report.html`.
- ```npm run start[:prod]``` - starts a server, with react model replacement and devtools on `localhost:8080`, `prod` option to minify the build (same build eventually integrated with the cordova app).
- ```npm run build[:prod][:watch]``` - builds the project (single html file and single js file) as it does for development.
- ```npm run test[:watch][:coverage]``` - runs Mocha testing, outputs result to console, `watch` options to watch files and test again after file modification, `coverage` option to generate coverage reports to `./coverage` folder (`index.html` is a usuful one!).

