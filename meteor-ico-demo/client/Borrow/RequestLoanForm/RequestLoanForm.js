import { Meteor } from 'meteor/meteor';

Template.RequestLoanForm.events({
	'click #authorize-metamask-button': function () {
		
		var title = $('#title-input').val();
		var borrow = $('#borrow-amount-input').val();
		var currency = $('#currency-select').val();
		var collateral = $('#collateral-amount-input').val();
		//var fundTime = $('#fundraising-time-input').val();
		var paybackTime = $('#payback-time-input').val();
		var interest = $('#interest-input').val();
		var description = $('#description-textarea').val();

		var alertParagraph = $('#alert-paragraph');


		console.log("borrow: "+borrow);
		console.log("currency: "+currency);
		console.log("collateral: "+collateral);
		//console.log("fundTime: "+fundTime);
		console.log("paybackTime: "+paybackTime);
		console.log("interest: "+interest);
		console.log("description: "+description);
		console.log("alertParagraph: "+alertParagraph.val());

		Meteor.call('takeLoan',
			title,
			borrow,
			currency,
			collateral,
			//fundTime,
			paybackTime,
			interest,
			description,
			(error,result)=>{
				if(result=="Creating loan"){
					createLoan(
						title,
						borrow,
						currency,
						collateral,
						//fundTime,
						paybackTime,
						interest,
						description,
						);


					Router.go("/MyLoans");
				}
				else
				{
					alertParagraph.html(result);
					alertParagraph.css("display","block");	
				}
			}
		);
	},
	'click #one-month-period': function(){
			$("#payback-time-input").val(30);
	},
	'click #two-month-period': function(){
		$("#payback-time-input").val(60);
	},
	'click #three-month-period': function(){
		$("#payback-time-input").val(90);
	},
	'click #six-month-period': function(){
		$("#payback-time-input").val(180);
	},
});