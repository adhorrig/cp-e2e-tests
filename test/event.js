module.exports = {
	'tags': ['event'],

	before : function)browser){
		browser.page.event().openPage();
	},

	'Event page ready': function(browser){
		var eventPage = browser.page.event();

		/*sessionDescription and ticketType missing a class/id*/

		eventPage.expect.element('@event-name').to.be.present;
		eventPage.expect.element('@is-public').to.be.present;
		eventPage.expect.element('@description').to.be.present;
		eventPage.expect.element('@type').to.be.present;
		eventPage.expect.element('@recurring-type').to.be.present;
		eventPage.expect.element('@weekday').to.be.present;
		eventPage.expect.element('@fromDate').to.be.present;
		eventPage.expect.element('@toDate').to.be.present;
		eventPage.expect.element('@start-time').to.be.present;
		eventPage.expect.element('@endTime').to.be.present;
		eventPage.expect.element('@city').to.be.present;
		eventPage.expect.element('@address').to.be.present;
		eventPage.expect.element('@sessionValidate').to.be.present;
		eventPage.expect.element('@session-description').to.be.present;
		eventPage.expect.element('@ticketType').to.be.present;
		eventPage.expect.element('@session-{{ sessionIndex }}-sessionName').to.be.present;
		eventPage.expect.element('@session-{{ sessionIndex }}-ticketName-{{ ticketIndex }}').to.be.present;
		eventPage.expect.element('session-{{ sessionIndex }}-ticketQuantity-{{ ticketIndex }}').to.be.present;
	},

	'End Test': function(browser){
		browser.end();
	},

	after : function(browser){
	}
};