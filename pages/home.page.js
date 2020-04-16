const elementUtil = require("../util/elementUtil");
const constants = require("../constants")

class HomePage {

  get getHomePageHeader(){ return $("//*[@data-key='getting-started-ui.endToEndHeaderCopy.heading']") }
  get getAccountMenu(){ return $('#account-menu') }
  get getAccountEmail(){ return $('.user-info-email') }


  getPageHeaderText(){
      this.getHomePageHeader.waitForDisplayed()
      return this.getHomePageHeader.getText()
  }

  doClickAccountMenu(){
      elementUtil.doClick(this.getAccountMenu)
  }

  getLoggedInAccountEmail(){
      return elementUtil.doGetText(this.getAccountEmail)
  }


}
module.exports = new HomePage();