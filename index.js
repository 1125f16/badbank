// setup server
// YOUR CODE

// setup directory used to serve static files
// YOUR CODE

// setup data store
// YOUR CODE

// required data store structure
// YOUR CODE
/*
{ 
    accounts:[
        {name        : '',
         email       : '',
         balance     : 0,
         password    : '',
         transactions: []}
    ] 
}
*/

app.get('/account/create/:name/:email/:password', function (req, res) {

    // YOUR CODE
    // Create account route
    // return success or failure string
});

app.get('/account/login/:email/:password', function (req, res) {

    // YOUR CODE
    // Login user - confirm credentials
    // If success, return account object    
    // If fail, return null
});

app.get('/account/get/:email', function (req, res) {

    // YOUR CODE
    // Return account based on email
});

app.get('/account/deposit/:email/:amount', function (req, res) {

    // YOUR CODE
    // Deposit amount for email
    // return success or failure string
});

app.get('/account/withdraw/:email/:amount', function (req, res) {

    // YOUR CODE
    // Withdraw amount for email
    // return success or failure string
});

app.get('/account/transactions/:email', function (req, res) {

    // YOUR CODE
    // Return all transactions for account
});

app.get('/account/all', function (req, res) {

    // YOUR CODE
    // Return data for all accounts
});
