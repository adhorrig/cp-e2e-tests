var eventCommands{
	openPage: function(url){
		this.navigate(url)
		.waitForElementVisiable('body');
		return this;
	},
	submit: function(){
		this.waitForElementVisiable('@submitButton', 1000)
			.click('@submitButton');
			.api.pause(1000);
		return this;
	}
};

module.exports = {
	url: function (){
		return this.api.launchUrl + 'dashboard/dojo/b185ea1a-c2ea-4f8a-8ebf-3f5352a45c08/event-form/22f13c7c-28ca-4be5-9aa7-ea3d9bd12a67';
	},
	commands: [eventCommands],
	elements:{

		/*sessionDescription and ticketType missing a class/id*/
		
		event-name: { selector: 'input[name="event-name"]'},
		is-public: { selector: 'input[id="is-public"]'},
		description { selector: 'input[name="description"]'},
		type { selector: 'input[name="type"]'},
		recurringType { selector: 'input[name="recurringType"]'},
		weekday { selector: 'input[name="weekday"]'},
		fromDate { selector: 'input[name="fromDate"]'},
		toDate { selector: 'input[name="toDate"]'},
		start-time: { selector: 'input[id="start-time"]'},
		endTime { selector: 'input[name="endTime"]'},
		city { selector: 'input[name="city"]'},
		address { selector: 'input[name="address"]'},
		sessionValidate { selector: 'input[name="sessionValidate"]'},
		session-{{ sessionIndex }}-sessionName { selector: 'input[name="session-{{ sessionIndex }}-sessionName"]'},
		session-{{ sessionIndex }}-ticketName-{{ ticketIndex }} { selector: 'input[name="session-{{ sessionIndex }}-ticketName-{{ ticketIndex }}"]'},
		session-{{ sessionIndex }}-ticketQuantity-{{ ticketIndex }} { selector: 'input[name="session-{{ sessionIndex }}-ticketQuantity-{{ ticketIndex }}"]'}
	}
};