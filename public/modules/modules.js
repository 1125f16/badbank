var ui = {};

ui.navigation = `
    <!-- ------------- YOUR CODE: Navigation UI ------------- --> 
`;

ui.createAccount = `
    <!-- ------------- YOUR CODE: Create Account UI ------------- --> 
`;

ui.login = `
    <!-- ------------- YOUR CODE: Login UI ------------- --> 
`;

ui.deposit = `
    <!-- ------------- YOUR CODE: Deposit UI ------------- --> 
`;

ui.withdraw = `
    <!-- ------------- YOUR CODE: Withdraw UI ------------- --> 
`;

ui.transactions = `
    <!-- ------------- YOUR CODE: Transactions UI ------------- --> 
`;

ui.balance = `
    <!-- ------------- YOUR CODE: Balance UI ------------- --> 
`;

ui.default = `
    <!-- ------------- YOUR CODE: Default UI ------------- --> 
`;

ui.allData = `
    <!-- ------------- YOUR CODE: All Data UI ------------- --> 
`;

var target     = document.getElementById('target');
var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;



var loadCreateAccount = function(){
    target.innerHTML = ui.createAccount;
};

var loadLogin = function(){
    target.innerHTML = ui.login;
};

var loadDeposit = function(){
    target.innerHTML = ui.deposit;
};

var loadWithdraw = function(){
    target.innerHTML = ui.withdraw;
};

var loadTransactions = function(){
    target.innerHTML = ui.transactions;
};

var loadBalance = function(){
    target.innerHTML = ui.balance;
};

var defaultModule = function(){
    target.innerHTML = ui.default;
};

var loadAllData = function(){
    target.innerHTML = ui.allData;
};

defaultModule();
