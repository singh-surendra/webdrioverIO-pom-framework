const loginPage = require("/Users/surendra.singh/Documents/Automation/webdriverio-learning/webdriverio-app-POM-Framework/pages/login.page.js");
const configData = require("/Users/surendra.singh/Documents/Automation/webdriverio-learning/webdriverio-app-POM-Framework/config.js")
const constants = require("/Users/surendra.singh/Documents/Automation/webdriverio-learning/webdriverio-app-POM-Framework/constants.js")
describe('login page feature test', function(){
    //retry logic
    // this.retries(2)
    it('verify login page title',function(){
         browser.url('/')
         browser.maximizeWindow();
         const title = loginPage.getPageTitle()
         console.log('login page title is', title);
         assert.equal(constants.LOGIN_PAGE_TITLE, title, 'title is not found error')
    })

    it('verify signup link',function(){
        // browser.url('/')
        // browser.maximizeWindow();
        loginPage.isSignUpLinkExist()
        assert.equal(true, loginPage.isSignUpLinkExist(), 'sign up link is not present')
   })

   it('verify login',function(){
    // browser.url('/')
    // browser.maximizeWindow();
    loginPage.doLogin(configData.username, configData.password)

})

})