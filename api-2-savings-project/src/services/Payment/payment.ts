import * as Stripe from "stripe";

interface IPayment {}

class Payment implements IPayment {
  stripe: Stripe;

  constructor(secret: string) {
    this.stripe = new Stripe(secret);
  }

  /**
   * @return Stripe Customer Id
   */
  createCustomer = (email: string, token: string) =>
    this.stripe.customers
      .create({
        email,
        source: token
      })
      .then(c => c.id);

  createSubscription = (customerId: string, planId: string) =>
    this.stripe.subscriptions.create({
      customer: customerId,
      items: [
        {
          plan: planId
        }
      ],
      expand: ["latest_invoice.payment_intent"]
    });
}
