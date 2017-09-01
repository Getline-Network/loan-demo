Template.MyLoans.helpers({
	Loans: function () {
		return LoanAddresses.find({user: Meteor.userId()});
	},
	currentlyBorrowed: function()
	{
		/*var L = Loans.find({user: Meteor.userId()});
		var sum = 0;
		L.forEach(function(l){
			sum+=l.amount;
		});
		return sum;*/
		return "Calc";
	},
	minimumMonthlyRates: function()
	{
		return "Calc";
	},
});







Template.SingleLoanTemplate.onCreated(function(){
	var that = this;

	var LI = LoanClass.at(that.data.address);
	that.amountWanted = new ReactiveVar(0);
	
	LI.amountWanted((e,r)=>{
			if(r && !e){
				that.amountWanted.set(r.valueOf());
			}
	});

});




Template.SingleLoanTemplate.helpers({
	amount: function () {

	var that = Template.instance();
		if(that.amountWanted)
		{

			return that.amountWanted.get();
		}
	},
	title: function(){
	var that = Template.instance();
		if(that.data.address)
		{
			var L = Loans.findOne({address: that.data.address});
			if(L) return L.title;
			else return "";
		}
	},
});
