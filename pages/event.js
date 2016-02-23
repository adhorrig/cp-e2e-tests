var eventCommands = {
	openPage: function(url){
		this.navigate(url)
		.waitForElementVisible('body');
		return this;
	},

	submit: function(){
		this.waitForElementVisiable('@submit', 1000)
			.click('@submit')
			.api.pause(1000);
		return this;
	}
};

module.exports = {
	url: function (){
		return this.api.launchUrl + '/dashboard/dojo/b185ea1a-c2ea-4f8a-8ebf-3f5352a45c08/event-form/22f13c7c-28ca-4be5-9aa7-ea3d9bd12a67';
	},
	commands: [eventCommands],
	elements:{
		fromDate: { selector: 'input[name="fromDate"]'},
		toDate: { selector: 'input[name="toDate"]'}
	}
};