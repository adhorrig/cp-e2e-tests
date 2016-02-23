module.exports = {
	'tags': ['event'],

	before : function(browser){
		var home = browser.page.login();
	    home.openPage();

	    home.setValue('@email', 'manager@example.com')
	    .setValue('@password', 'test')
	    .submit()

	    // open event dojo page
		browser.page.event().openPage();
	},

	'Event page ready': function(browser){
		var eventPage = browser.page.event();

		eventPage.expect.element('@fromDate').to.be.present;
		eventPage.expect.element('@toDate').to.be.present;

	},

	'End Test': function(browser){
		browser.end();
	},

	after : function(browser){
	}
};