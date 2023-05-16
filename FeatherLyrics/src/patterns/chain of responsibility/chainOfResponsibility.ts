abstract class Account {
    protected name: string;
    protected balance: number;
    protected incomer: Account | null;
  
    constructor(balance: number) {
      this.balance = balance;
      this.incomer = null;
    }
  
    pay(orderPrice: number): void {
      if (this.canPay(orderPrice)) {
        console.log(`Paid ${orderPrice} using ${this.name}`);
      } else if (this.incomer) {
        console.log(`Неможливо оплатити за допомогою ${this.name}`);
        this.incomer.pay(orderPrice);
      } else {
        console.log('На жаль, не вистачає грошей');
      }
    }
  
    canPay(amount: number): boolean {
      return this.balance >= amount;
    }
  
    setNext(account: Account): void {
      this.incomer = account;
    }
  }
  
  class Mono extends Account {
    constructor(balance: number) {
      super(balance);
      this.name = 'Mono';
    }
  }
  
  class Paypal extends Account {
    constructor(balance: number) {
      super(balance);
      this.name = 'Paypal';
    }
  }
  
  class Private24 extends Account {
    constructor(balance: number) {
      super(balance);
      this.name = 'Private24';
    }
  }
  
  const mono = new Mono(3);
  const paypal = new Paypal(35);
  const private24 = new Private24(40);
  
  mono.setNext(paypal);
  paypal.setNext(private24);
  
  const subscriptionMonth = 5;
  const subscriptionHalfYear = subscriptionMonth * 6 * 0.9;
  const subscriptionYear = subscriptionMonth * 12 * 0.7;
  
  mono.pay(subscriptionMonth);
  mono.pay(subscriptionHalfYear);
  mono.pay(subscriptionYear);
  
console.log(mono.pay(subscriptionMonth))
console.log(mono.pay(subscriptionHalfYear))
console.log(mono.pay(subscriptionYear))