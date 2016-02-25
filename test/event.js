
module.exports = {
  'tags': ['event'],
  before: function (browser) {
    // login
    var home = browser.page.login();
    home.openPage();

    home.setValue('@email', 'manager@example.com')
    .setValue('@password', 'test')
    .submit()

    // open create event page
    browser.page.event().openPage();
  },

  'Verify Event Form': function (browser) {
    var eventPage = browser.page.event();

    eventPage.expect.element('@eventName').to.be.present;
    eventPage.expect.element('@recurringRadio').to.be.present;
    eventPage.expect.element('@fromDate').to.be.present;
    //eventPage.expect.element('@toDate').to.be.present;
    eventPage.expect.element('@description').to.be.present;
    eventPage.expect.element('@prefillAddress').to.be.present;
    eventPage.expect.element('@city').to.be.present;
    eventPage.expect.element('@address').to.be.present;
    eventPage.expect.element('@sessionName').to.be.present;
    eventPage.expect.element('@sessionDescription').to.be.present;
    eventPage.expect.element('@ticketName').to.be.present;
    eventPage.expect.element('@ticketType').to.be.present;
    eventPage.expect.element('@ticketQuantity').to.be.present;
    eventPage.expect.element('@submitButton').to.be.present;
  },

  'Create Event': function (browser) {
    var eventPage = browser.page.event();

    eventPage.setValue('@eventName', browser.globals.eventInfo.eventName)
    .radioCheck('@recurringRadio')
    .setFromDate(browser, browser.globals.eventInfo.fromDate)
    .setToDate(browser, browser.globals.eventInfo.toDate)
    .setValue('@description', browser.globals.eventInfo.description)
    //.checkboxCheck('@prefillAddress')
    .setValue('@city', browser.globals.eventInfo.city)
    .setValue('@address', browser.globals.eventInfo.address)
    .setValue('@city', browser.globals.eventInfo.city)
    .setValue('@address', browser.globals.eventInfo.city)
    .setValue('@sessionName', browser.globals.eventInfo.sessionName)
    .setValue('@sessionDescription', browser.globals.eventInfo.sessionDescription)
    .setValue('@ticketName', browser.globals.eventInfo.ticketName)
    .selectTicket('@ticketType', browser, browser.globals.eventInfo.ticketType)
    .setValue('@ticketQuantity', browser.globals.eventInfo.ticketQuantity)
    .submit();
  },

  'Check Dates': function (browser){
    var eventPage = browser.page.event();
    
    var fromDate = '2016-02-28';
    var toDate = '2016-03-13';
    eventPage.expect.element('@fromDate').to.have.value.that.equals(fromDate);
    eventPage.expect.element('@toDate').to.have.value.that.equals(toDate);
  },

  'Verify Created Event': function (browser) {
    var myEventPage = browser.page.event();
    myEventPage.openPage();
  },

  'End Test': function (browser) {
    browser.end();
  },

  after: function (browser) {
  }
};