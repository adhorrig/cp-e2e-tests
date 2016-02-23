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

	'Event page ready': function(browser){
		var eventPage = browser.page.event();

		var fromDate = '2016-02-28';
		var toDate = '2016-03-13';
		eventPage.expect.element('@fromDate').to.have.value.that.equals(fromDate);
		eventPage.expect.element('@toDate').to.have.value.that.equals(toDate);

	},

	'End Test': function(browser){
		browser.end();
	},

	after : function(browser){
	}
};