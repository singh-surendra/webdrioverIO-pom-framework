const elementUtil = require("../util/elementUtil");
const constants = require("../constants")

class LoginPage {
    //page locators
    get userName() { return $('#username') }
    get password() { return $('#password') }
    get loginButton() { return $('#loginBtn') }
    get signUpLink() { return $('=Sign up') }

    //page actions:
    getPageTitle(pageTitle) {
        return elementUtil.doGetPageTitle(constants.LOGIN_PAGE_TITLE)
    }

    isSignUpLinkExist() {
        return elementUtil.doIsDisplayed(this.signUpLink)
    }

    doLogin(emailID, password) {
        elementUtil.doSetValue(this.userName, emailID)
        elementUtil.doSetValue(this.password, password)
        elementUtil.doClick(this.loginButton)
    }


}

module.exports = new LoginPage();

