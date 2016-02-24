var eventCommands = {
	openPage: function(url){
		this.navigate(url)
		.waitForElementVisible('body');
		return this;
	},

	submit: function(){
		this.waitForElementVisible('@submit', 1000)
			.click('@submit')
			.api.pause(1000);
		return this;
	},

	publishEvent: function(){
		this.waitForElementVisible('@submitButton', 1000)
			.click('@submitButton')
			.api.pause(1000);
		return this;
	},

	checkboxCheck: function(checkboxSelector){
		this.waitForElementVisible(checkboxSelector)
			.click(checkboxSelector)
			.api.pause(1000);
		return this;
	},

	selectCombo: function(selector, client, ticketType){
		this.waitForElementVisible(selector)
			.click(selector)
			.api.pause(1000);
		this.api.keys([ticketType]);
		this.api.pause(3000);
		this.waitForElementVisible('@comboChoicesVisible');
		this.click('@comboChoicesVisible');
		this.api.keys([client.keys.ENTER]);
		return this;
	}
};

module.exports = {
	url: function (){
		return this.api.launchUrl + '/dashboard/dojo/b185ea1a-c2ea-4f8a-8ebf-3f5352a45c08/event-form/22f13c7c-28ca-4be5-9aa7-ea3d9bd12a67';
	},
	commands: [eventCommands],
	elements:{
		eventName: { selector: 'input[name="event-name"]'},
		description: { selector: 'textarea[name="description"]'},
		type: { selector: 'input[name="type"]'},
		city: { selector: 'label[for="city"]'},
		address: { selector: 'label[for="address"]'},
		sessionName: { selector: 'div[class="col-lg-9 session-name-container"]'},
		sessionDescription: { selector: 'textarea[name="sessionDescription"]'},
		ticketName: { selector: 'input[id="ticketName"]'},
		ticketType: { selector: 'div[class="min-width-170"]'},
		ticketQuantity: { selector: 'input[name="ticketQuantity"]'},
		comboChoicesVisible: {selector: 'div[class="min-width-170"]'},
		submitButton: { selector: '[type=submit]' }
	}
};