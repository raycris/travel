import React from "react";

const FAQ = ({ id }) => {
  return (
    <section className="w-full h-auto mb-10" id={id}>
      <div className="w-full h-full px-6 flex flex-col space-y-4 ">
        <p className="text-3xl text-primary font-semibold mt-6">FAQS</p>
        <div>
          <p className="text-xl font-medium text-primary">Payment Methods</p>
          <p className="text-medium pt-2">
            We accept VISA, MasterCard, American Express, Paypal and Binance
          </p>
        </div>
        <div>
          <p className="text-xl font-medium text-primary">
            Cancellation Policy
          </p>
          <p className="text-medium pt-2">
            We accept VISA, MasterCard, American Express, Paypal and Binance
          </p>
        </div>
        <div>
          <p className="text-xl font-medium text-primary">Long Stays </p>
          <p className="text-medium pt-2">
            We accept VISA, MasterCard, American Express, Paypal and Binance We
            accept VISA, MasterCard, American Express, Paypal and Binance
          </p>
        </div>
        <div>
          <p className="text-xl font-medium text-primary">
            Cancellation Policy{" "}
          </p>
          <p className="text-medium pt-2">
            We accept VISA, MasterCard, American Express, Paypal and Binance
          </p>
        </div>
        <div>
          <p className="text-xl font-medium text-primary">
            Cancellation Policy{" "}
          </p>
          <p className="text-medium pt-2">
            We accept VISA, MasterCard, American Express, Paypal and Binance
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
