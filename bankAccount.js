class Opperation {
	amount;
	type; // deposit or withdrawal
	date;
	
  constructor(amount, type, date) {
    this.amount = amount;
    this.type = type;
	this.date = date;
  }
  
  isDeposit() {
	  if(this.type == 'deposit') {
		  return true;
	  }
  }
  isWithdrawal() {
	  if(this.type == 'withdrawal') {
		  return true;
	  }
  }
}
class Account {
	firstName;
	lastName;
	opperations = [];
	
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  deposit(amount) {
	  this.opperations.push(new Opperation(amount,'deposit', new Date()));
  }
  
  withdraw(amount) {
	  if(this.getBalance() >= amount) {
		  this.opperations.push(new Opperation(amount, 'withdrawal', new Date()));
	  }
	  else {
		  console.log('Your balance is insufficient');
	  }
  }
  getBalance() {
	  let balance = 0;
	  this.opperations.map(opperation => opperation.isDeposit() ? balance += opperation.amount : balance -= opperation.amount);
	  return balance;
  }
  getHistory() {
	return JSON.stringify(this.opperations);
  }
}

compte = new Account('lassana', 'Diakité');
compte.deposit(15000);
compte.deposit(5000);
compte.withdraw(3000);
compte.withdraw(50000);
console.log(compte.getBalance());
console.log(compte.opperations);
console.log(compte.getHistory());