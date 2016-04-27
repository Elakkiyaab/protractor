exports.config = {
    directConnect:true,
    specs: [
        'spec.js'
    ],
    framework: 'jasmine2',

    multiCapabilities: [
        {
        'browserName': 'chrome',
            shardTestFiles: true
        },
        {
            'browserName': 'chrome',
            shardTestFiles: true
        },
        {
            'browserName': 'chrome',
            shardTestFiles: true
        },
        {
            'browserName': 'chrome',
            shardTestFiles: true
        },
        {
            'browserName': 'firefox',
            // run tests in parallel
            shardTestFiles: true
        }
    ],

    baseUrl: 'http://localhost:8888'
}