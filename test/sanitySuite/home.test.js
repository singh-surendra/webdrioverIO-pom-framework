// const loginPage = require("/Users/surendra.singh/Documents/Automation/webdriverio-learning/webdriverio-app-POM-Framework/pages/login.page.js");
// const homePage = require("/Users/surendra.singh/Documents/Automation/webdriverio-learning/webdriverio-app-POM-Framework/pages/home.page.js");
// const configData = require("/Users/surendra.singh/Documents/Automation/webdriverio-learning/webdriverio-app-POM-Framework/config.js")
// const constants = require("/Users/surendra.singh/Documents/Automation/webdriverio-learning/webdriverio-app-POM-Framework/constants.js")

// describe('home page feature test', function () {
//     //retry logic for all "it" blocks
//     // this.retries(3)
//     it('verify home page header text', function () {
//         //overwrite the retry logic for specific test case
//         this.retries(2)
//         browser.url('/')
//         browser.maximizeWindow();
//         loginPage.doLogin(configData.username, configData.password)
//         const headerText = homePage.getPageHeaderText()
//         console.log('getting started page header text is', headerText);
//         assert.equal(constants.HOME_PAGE_GETTING_STARTED_HEADER_TITLE, headerText, 'getting started header is not found')
//     })

//     it('verify logged in account email', function () {
//         browser.url('/')
//         browser.maximizeWindow();
//         loginPage.doLogin(configData.username, configData.password)
//         homePage.doClickAccountMenu()
//         const email = homePage.getLoggedInAccountEmail()
//         assert.equal(configData.username, email, 'email address is not found')
//     })
// })