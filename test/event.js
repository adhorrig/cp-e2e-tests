module.exports = {
	'tags': ['event'],

	before : function(browser){
		var home = browser.page.login();
	    home.openPage();

	    home.setValue('@email', 'manager@example.com')
	    .setValue('@password', 'test')
	    .submit()

	    // open event page
		browser.page.event().openPage();
	},

	//Check if form is present
	'Verify event form': function(browser){
		var eventPage = browser.page.event();

		eventPage.expect.element('@eventName').to.be.present;
		eventPage.expect.element('@description').to.be.present;
		//eventPage.expect.element('@type').to.be.present;
		eventPage.expect.element('@city').to.be.present;
		eventPage.expect.element('@address').to.be.present;
		eventPage.expect.element('@sessionName').to.be.present;
		eventPage.expect.element('@sessionDescription').to.be.present;
		eventPage.expect.element('@ticketName').to.be.present;
		eventPage.expect.element('@ticketType').to.be.present;
		eventPage.expect.element('@ticketQuantity').to.be.present;
		eventPage.expect.element('@submitButton').to.be.present;
	},

	'Create event': function(browser){
		var eventPage = browser.page.event();
		eventPage.setValue('@eventName', browser.globals.eventInfo.eventName)
		.setValue('@description', browser.globals.eventInfo.description)
		//.checkboxCheck('@recurring')
		.setValue('@city', browser.globals.eventInfo.city)
		.setValue('@address', browser.globals.eventInfo.city)
		.setValue('@sessionName', browser.globals.eventInfo.sessionName)
		.setValue('@sessionDescription', browser.globals.eventInfo.sessionDescription)
		.setValue('@ticketName', browser.globals.eventInfo.ticketName)
		.selectCombo('@ticketType', browser, browser.globals.eventInfo.ticketType)
		.setValue('@ticketQuantity', browser.globals.eventInfo.ticketQuantity)
		.publishEvent();

	},

	'End Test': function(browser){
		browser.end();
	},

	after : function(browser){
	}
};