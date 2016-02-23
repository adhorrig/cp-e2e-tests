module.exports = {
	'tags': ['event'],

	before : function(browser){
		browser.page.event().openPage();
	},

	'Event page ready': function(browser){
		var eventPage = browser.page.event();

		/*sessionDescription and ticketType missing a class/id*/

		eventPage.expect.element('@fromDate').to.be.present;
		eventPage.expect.element('@toDate').to.be.present;
	},

	'End Test': function(browser){
		browser.end();
	},

	after : function(browser){
	}
};