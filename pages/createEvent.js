var eventCommands = {
  openPage: function () {
    this.navigate()
    .waitForElementVisible('body');
    return this;
  },

  submit: function () {
    this.waitForElementPresent('@submitButton')
      .click('@submitButton')
      .api.pause(1000);
    return this;
  },

  typeText: function (selector, client){
    this.waitForElementPresent(selector)
      .click(selector)
      .api.pause(1000);
    this.api.keys([client.keys('A')]);
    this.api.pause(1000)

    return this
  },

  selectTicket: function (selector, client, ticketType) {
    this.waitForElementPresent(selector)
      .click(selector)
      .api.pause(1000);
    this.api.keys([ticketType]);
    this.api.pause(1000);
    this.waitForElementPresent('@comboChoicesVisible', 1000);
    this.click('@comboChoicesVisible');
    this.api.keys([client.keys.ENTER]);
    this.api.pause(1000);

    return this;
  },

  checkboxCheck: function (checkBoxSelector) {
    this.waitForElementPresent(checkBoxSelector)
      .click('@recurringRadio')
      .api.pause(1000);

    return this;
  },

  radioCheck: function (radioBoxSelector){ //Present
    this.waitForElementPresent(radioBoxSelector)
      .click(radioBoxSelector)
      .api.pause(1000);

    return this;
  },

  setFromDate: function (client, fromDate) {
    this.waitForElementPresent('@fromDate')
      .click('@fromDate')
      .api.pause(1000);
    this.api.keys([client.Keys.ENTER]).pause(1000);
    this.api.execute('angular.element("input[name=fromDate]").val("' + fromDate + '")');
    this.api.pause(1000);

    return this;
  },

  setToDate: function (client, toDate){
  	this.waitForElementPresent('@toDate')
  		.click('@toDate')
  		.api.pause(1000);
		this.api.keys([client.Keys.ENTER]).pause(1000);
		this.api.execute('angular.element("input[name=toDate]").val("' + toDate + '")');
  },

  selectCity: function (client, cityName){
    this.waitForElementPresent('@cityTown')
      .click('@cityTown')
      .api.pause(1000);
    this.api.keys([cityName]);
    this.api.pause(1000);
    this.api.keys([client.Keys.ENTER]);
    this.api.pause(1000);
    return this;
  }
};

module.exports = {
  url: function () {
    return this.api.launchUrl + '/dashboard/dojo/c392bcd6-fb3c-4fa2-8f89-d61eed537cd0/event-form';
  },
  commands: [eventCommands],
  elements: {
    eventName: { selector: 'input[id="event-name"]' },
    prefillAddress: { selector: 'input[name="prefill-address"]' },
    description: { selector: 'textarea[name="description"]' },
    recurringRadio: { selector: 'input[id="recurringRadio"]' },
    fromDate: { selector: 'input[name="fromDate"]' },    
    toDate: { selector: 'input[name="toDate"]' },       
    cityTown: { selector: 'div[placeholder="Add a city name"]' },
    address: { selector: 'textarea[name="address"]' },
    sessionName: { selector: 'input[id="sessionName"]' },
    sessionDescription: { selector: 'textarea[name="sessionDescription"]' },
    ticketName: { selector: 'input[id="ticketName"]' },
    ticketType: { selector: 'div[placeholder="Select a ticket type"]'},
    ticketQuantity: { selector: 'input[name="ticketQuantity"]' },
    comboChoicesVisible: { selector: 'div[placeholder="Select a ticket type"]'},
    submitButton: { selector: 'button[name=publish]' }
  }
};