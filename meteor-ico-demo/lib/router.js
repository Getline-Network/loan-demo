Router.route('/', function () {
  this.render("Borrow");
});
Router.route('/Invest', function () {
  this.render("Invest");
});
Router.route('/Profile', function () {
  this.render("Profile");
});
Router.route('/Borrow', function () {
  this.render("Borrow");
});



Router.route('/LoanListing', function () {
  this.render("LoanListing");
});
Router.route('/AutoInvest', function () {
  this.render("AutoInvest");
});
Router.route('/MyInvestments', function () {
  this.render("MyInvestments");
});


Router.route('/RequestLoanForm', function () {
  this.render("RequestLoanForm");
});
Router.route('/MyLoans', function () {
  this.render("MyLoans");
});

Router.route('/InstallMetamask', function () {
  this.render("InstallMetamask");
});



/*
Router.route('/Summary', function () {
  this.wait(Meteor.subscribe('Wallets'));
  this.wait(Meteor.subscribe('History'));
  this.wait(Meteor.subscribe('Currencies'));
  this.wait(Meteor.subscribe('Rates'));
  if (this.ready()) 
  {
    this.render('Summary');
  } else {
    this.render('Loading');
  }
});
Router.route('/Funds', function () {
  this.wait(Meteor.subscribe('Wallets'));  
  this.wait(Meteor.subscribe('History'));
  this.wait(Meteor.subscribe('Currencies'));
  this.wait(Meteor.subscribe('Rates'));


  if (this.ready()) 
  {
    this.render('Funds');
  } else {
    this.render('Loading');
  }
});

Router.route('/Transfer', function () {
  this.render("Transfer");
});
Router.route('/Invest', function () {
  this.render("Invest");
});
Router.route('/Borrow', function () {
  this.render("Borrow");
});

Router.route('/CreateAccount', function () {
  this.render("CreateAccount");
});
*/