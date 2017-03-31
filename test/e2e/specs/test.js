// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'welcome page looks ok': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL + '/en/welcome'

    browser
      .url(devServer)
      .waitForElementVisible('#wb-cont', 5000)
      .assert.containsText('h1', 'Welcome')
      .end()
  }
}
