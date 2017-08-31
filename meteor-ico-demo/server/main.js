import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup

  if(Loans.find().count()===0)
  {
  	Loans.insert({
  		title: "Car loan",
  		amount: 15,
  		rate: 1.5,
  		paid: 5.15,
  		phase: "payoff",
  		user: null
  	});
  	Loans.insert({
  		title: "Business expansion loan",
  		amount: 100,
  		rate: 1.5,
  		paid: 24.9,
  		phase: "payoff",
  		user: null
  	});
  	Loans.insert({
  		title: "My first little loan",
  		amount: 10, rate: 1.5,
  		paid: 6.67,
  		phase: "investment",
  		user: null
  	});
  	Loans.insert({
  		title: "Simple loan",
  		amount: 15,
  		rate: 1.5, 
  		paid: 5.15,
  		phase: "contract",
  		user: null
  	});
  }
});
