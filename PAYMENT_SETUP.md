# Hosted Donation Checkout Setup

## Current Status

The website is ready for direct one-time and monthly donations through a provider-hosted checkout. Until the council's merchant account is approved and public checkout links are added, both card-payment buttons safely open the existing donation-request form.

The recommended starting point is **Flutterwave hosted Payment Links**. Flutterwave supports registered nonprofit onboarding, cards, Rwanda Mobile Money, one-time payment links, and subscription payment links. The checkout stays on the payment provider's infrastructure, so this static GitHub Pages website never handles card numbers, CVV codes, banking passwords, or PINs.

Official references:

- [Flutterwave Rwanda](https://www.flutterwave.com/rw)
- [Create a Flutterwave account](https://www.flutterwave.com/us/support/my-account/how-to-create-a-flutterwave-account)
- [Create a payment link](https://flutterwave.com/us/support/payments/how-to-create-a-payment-link)
- [Create a subscription payment page](https://flutterwave.com/us/support/payments/create-a-subscription-payment-page)
- [National Bank of Rwanda payment systems](https://www.bnr.rw/paymentsystem)

## Merchant Onboarding

Use an email address controlled by QS Impact Kigali Council, not a volunteer's personal account.

1. Create a Flutterwave Business account for a registered nonprofit entity.
2. Enter the legal organization name exactly as registered: `QS IMPACT KIGALI COUNCIL LTD`.
3. Complete the provider's organization and representative verification requirements.
4. Connect and verify the council-owned settlement bank account.
5. Ask the provider to enable the required currencies, card payments, and Rwanda Mobile Money.
6. Enable multifactor authentication for every administrator.

The provider determines the final documents, payment methods, currencies, settlement schedule, and transaction fees. Confirm those details in the provider dashboard before launch.

## Create The Checkout Links

### One-Time Donation

Create a payment link with these recommended settings:

- Title: `Support QS Impact Kigali Council`
- Amount: allow the donor to enter a custom amount
- Purpose field: `Initiative to support`
- Required donor details: full name and email
- Notifications: organization-owned finance or donations inbox
- Return URL: `https://www.qskigali.org/?donation=thank-you#support`

### Monthly Donation

Create a subscription payment page with a monthly frequency. Use the same organization identity and donor information fields. Only advertise monthly giving after the provider confirms that recurring payments are enabled for the council's account and intended donor markets.

## Activate The Website

Open `payment-config.js` and paste only the two **public HTTPS checkout URLs**:

```js
window.QSI_PAYMENT_CONFIG = Object.freeze({
  providerName: "Flutterwave",
  oneTimeUrl: "https://flutterwave.com/pay/your-one-time-link",
  monthlyUrl: "https://flutterwave.com/pay/your-monthly-link",
});
```

Do not place secret keys, encryption keys, API tokens, webhook secrets, dashboard passwords, or bank credentials in this file or anywhere in the GitHub repository.

The same configuration works with another regulated provider, such as Pesapal or DPO, as long as it supplies public HTTPS links for hosted one-time and recurring checkout pages.

## Launch Checks

1. Open both buttons from the published website and verify the provider domain before entering payment information.
2. Make one small real transaction using each enabled payment route.
3. Confirm the donor receipt, dashboard record, settlement currency, fees, and arrival in the council's bank account.
4. Test a refund and document who is authorized to issue one.
5. Confirm that the monthly link clearly states its recurring schedule and cancellation process.
6. Reconcile provider transactions against council records on a regular schedule.
7. Keep the donation-request form available for invoices, restricted gifts, bank transfers, and payment support.

The website's thank-you banner confirms only that a visitor returned from checkout. The payment provider dashboard and settlement records remain the authoritative confirmation of a successful donation.
