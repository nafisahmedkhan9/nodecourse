var account = {} ;
account.balance = 0 ;

function deposit (account, balance) {
	account.balance += balance ;
} 
function withdraw (account, balance) {
	account.balance -= balance ;
}
function getBalance (account) {
	return account.balance;
}
deposit(account, 500);
console.log('deposit 500 , Current Balance: '+account.balance);

withdraw(account, 300);
console.log('withdraw 300 , Current Balance: '+account.balance);

deposit(account, 1500);
console.log('withdraw 1500 , Current Balance: '+account.balance);

console.log('Current Balance: '+getBalance(account));