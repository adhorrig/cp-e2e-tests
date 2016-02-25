var dojoCommands = {
  openPage: function () {
    this.navigate()
    .waitForElementVisible('body');
    return this;
  },

  submit: function () {
    this.waitForElementVisible('@submitButton')
      .click('@submitButton')
      .api.pause(1000);
    return this;
  },

  selectTicket: function (selector, client, ticketType) {
    this.waitForElementVisible(selector)
      .click(selector)
      .api.pause(1000);
    this.api.keys([ticketType]);
    this.api.pause(1000);
    this.waitForElementVisible('@comboChoicesVisible', 1000);
    this.click('@comboChoicesVisible');
    this.api.keys([client.keys.ENTER]);
    this.api.pause(1000);

    return this;
  },

  setFromDate: function (client, fromDate) {
    this.waitForElementVisible('@fromDate')
      .click('@fromDate')
      .api.pause(1000);
    this.api.keys([client.Keys.ENTER]).pause(1000);
    this.api.execute('angular.element("input[name=fromDate]").val("' + fromDate + '")');
    this.api.pause(1000);

    return this;
  },

  setToDate: function (client, toDate){
  	this.waitForElementVisible('@toDate')
  		.click('@toDate')
  		.api.pause(1000);
		this.api.keys([client.Keys.ENTER]).pause(1000);
		this.api.execute('angular.element("input[name=toDate]").val("' + toDate + '")');
  },

  checkboxCheck: function (checkBoxSelector) {
    this.waitForElementVisible(checkBoxSelector)
      .click(checkBoxSelector)
      .api.pause(1000);

    return this;
  },

  radioCheck: function (radioBoxSelector){
  	this.waitForElementVisible(radioBoxSelector)
  		.click(radioBoxSelector)
  		.api.pause(1000);

		return this;
  }
};

module.exports = {
  url: function () {
    return this.api.launchUrl + '/dashboard/dojo/b185ea1a-c2ea-4f8a-8ebf-3f5352a45c08/event-form';
  },
  commands: [dojoCommands],
  elements: {
    eventName: { selector: 'input[name="event-name"]' },
    fromDate: { selector: 'input[name="fromDate"]' },
    recurringRadio: { selector: 'label[for="recurring"]' },
    toDate: { selector: 'input[name="toDate"]' },
    description: { selector: 'textarea[name="description"]' },
    prefillAddress: { selector: 'label[for="prefill-address"]' },
    city: { selector: 'label[for="city"]' },
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