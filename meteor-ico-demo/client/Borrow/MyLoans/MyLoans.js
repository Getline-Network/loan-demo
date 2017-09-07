var currentlyBorrowed = new ReactiveVar(new BigNumber(0));

Template.MyLoans.helpers({
	Loans: function () {
		return LoanAddresses.find({user: Meteor.userId()});
	},
	currentlyBorrowed: function()
	{
		var value = currentlyBorrowed.get().valueOf();
		if(value>0) return {value: value, fontSize: (500.0/(Math.log(value)+1))+"px"};
		return {value: value, fontSize: "20px"};
	},
	minimumMonthlyRates: function()
	{
		return "Calc";
	},
});

Template.MyLoans.onCreated(function(){

	Tracker.autorun(function () {

		var L = LoanAddresses.find({user: Meteor.userId()}).fetch();
		currentlyBorrowed.set(new BigNumber(0));

			L.forEach(function(la){
				LoanClass
					.at(la.address)
					.amountWanted((e,r)=>{
					currentlyBorrowed.set(new BigNumber(parseFloat(currentlyBorrowed.get().valueOf()) + parseFloat(r.valueOf())));
					//console.log("r: ",parseFloat(r.valueOf()));
					//console.log("currentlyBorrowed: ",currentlyBorrowed.get().valueOf());
				});		
		});

	});

});







Template.SingleLoanTemplate.onCreated(function(){
	var that = this;

	var LI = LoanClass.at(that.data.address);
	that.amountWanted = new ReactiveVar(0);
	that.rate = new ReactiveVar(0);
	
	LI.amountWanted((e,r)=>{
			if(r && !e){
				that.amountWanted.set(r.valueOf());
			}
	});
	LI.interestPermil((e,r)=>{
			if(r && !e){
				that.rate.set(r.valueOf());
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
	rate: function(){
	var that = Template.instance();
		if(that.rate)
		{

			return that.rate.get();
		}
	},
	phaseDeployed: function(){
		return this.phase === "deployed";
	}

});
