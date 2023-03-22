import React from "react";

const FAQ = ({ id }) => {
  return (
    <div className="w-full h-full " id={id}>
      <div className="w-full h-full px-6 flex flex-col space-y-4 ">
        <p class="text-3xl text-primary font-semibold mt-6">FAQS</p>
        <div>
          <p class="text-xl font-medium text-primary">Payment Methods</p>
          <p class="text-medium pt-2">
            We accept VISA, MasterCard, American Express, Paypal and Binance
          </p>
        </div>
        <div>
          <p class="text-xl font-medium text-primary">Cancellation Policy</p>
          <p class="text-medium pt-2">
            We accept VISA, MasterCard, American Express, Paypal and Binance
          </p>
        </div>
        <div>
          <p class="text-xl font-medium text-primary">Long Stays </p>
          <p class="text-medium pt-2">
            We accept VISA, MasterCard, American Express, Paypal and Binance
            We accept VISA, MasterCard, American Express, Paypal and Binance
          </p>
        </div>
        <div>
          <p class="text-xl font-medium text-primary">Cancellation Policy </p>
          <p class="text-medium pt-2">
            We accept VISA, MasterCard, American Express, Paypal and Binance
          </p>
        </div>
        <div>
          <p class="text-xl font-medium text-primary">Cancellation Policy </p>
          <p class="text-medium pt-2">
            We accept VISA, MasterCard, American Express, Paypal and Binance
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
