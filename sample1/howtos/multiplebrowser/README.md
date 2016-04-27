protractor
===============

Demo test application and protractor tests.

Setup
-----

    cd sample1
    npm install

To run
------
Get ChromeDriver set up: Run `./node_modules/.bin/webdriver-manager update`.

Start the test application server with
`node app/expressserver.js`
Or if you're feeling lazy, just `npm start`.

Run the tests with
`node_modules/.bin/protractor howtos/multiplebrowser/conf.js`
Or if you're feeling lazy, just `npm test`.

Watch them go!

Multiple browser supported:
http://angular.github.io/protractor/#/browser-support
