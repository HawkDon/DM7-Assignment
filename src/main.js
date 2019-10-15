class Account {
  constructor(amount) {
    pre: {
      typeof amount === "number";
      amount > 0;
    }
    this.amount = amount;
  }

  deposit(amount) {
    pre: {
      typeof amount === "number", "Deposit amount is not a number";
      amount > 0, "Deposit amount has to be positive";
    }
    this.amount += amount;

    console.log(`You deposited ${amount} to your bank account`);
    console.log(`Your current balance is ${this.amount}`);

    post: {
      typeof this.amount === "number",
        "Account balance has to keep being a number";
    }
  }

  withdraw(amount) {
    pre: {
      typeof amount === "number", "Withdraw amount is not a number";
      amount <= this.amount,
        "Withdrew amount is too high. current account balance is " +
          this.amount +
          " and you requested " +
          amount;
      amount > 0, "Withdrew amount has to be positive";
    }

    this.amount -= amount;

    console.log(`You withdrew ${amount} from your bank account`);
    console.log(`Your current balance is ${this.amount}`);

    post: {
      typeof this.amount === "number",
        "Account balance has to keep being a number";
    }
  }
}

const amount = new Account(100);

amount.deposit(100);

amount.withdraw(100);

amount.withdraw(100);
