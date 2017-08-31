import { Meteor } from 'meteor/meteor';

Meteor.methods({
	takeLoan(
		title,
		borrow,
		currency,
		collateral,
		//fundTime,
		paybackTime,
		interest,
		description){
		console.log("takeLoan called");
		if(
			title && 
			borrow && 
			currency && 
			collateral && 
			//fundTime && 
			paybackTime && 
			interest && 
			description)
		{
			if(
				//parseInt(title)==NaN &&
				//parseFloat(title)==NaN &&
				!isNaN(parseFloat(borrow)) &&
				!isNaN(parseFloat(collateral)) &&
				!isNaN(parseInt(paybackTime)) &&
				!isNaN(parseFloat(interest))
				//parseInt(description)==NaN &&
				//parseFloat(description)==NaN
				)
			{
				if(collateral>0 && borrow>0 && paybackTime>0 && interest>0)
				{	
					/*Loans.insert({
						title: title, 
						amount: parseFloat(borrow), 
						currency: currency, 
						rate: parseFloat(interest), 
						collateral: parseFloat(collateral), 
						paybackTime: parseInt(paybackTime),
						description: description,
						createdAt: new Date(),
						paid: 0.00,
						phase: "contract",
						user: Meteor.userId()
					});*/
					return "Creating loan";
				}
				return "Non-negative: collateral, borrow amount, payback time and interest are needed";
			}
			return "At least one of the fields has invalid data type"
		}
		else return "Please insert complete data";

		return "DEFAULT";
	},
});