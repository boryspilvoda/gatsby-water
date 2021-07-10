import React from "react"

const FAQ = () => {
  return (
    <section className="py-6 mt-10 md:py-12 md:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold leading-9 text-center text-gray-900">
          Frequently asked questions
        </h2>
        <div className="mt-12">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
            <div className="space-y-2">
              <dt className="text-lg font-medium leading-6 text-gray-900">
                What is a domain?
              </dt>
              <dd className="text-base leading-6 text-gray-500">
                A domain name is an identification string that defines a
                website. We'll ping it every 5 minutes to make sure it's not
                down, monitor expirationd daily and we take care of SSL
                certificates too.
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg font-medium leading-6 text-gray-900">
                Can I get a refund?
              </dt>
              <dd className="text-base leading-6 text-gray-500">
                Yes. If you're unsatisfied with Momento, you can get a full
                refund within 14 days of purchase. If you'd like to request a
                refund, please contact customer support.
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg font-medium leading-6 text-gray-900">
                Which payment methods can I use?
              </dt>
              <dd className="text-base leading-6 text-gray-500">
                We use Stripe as our payment provider. You can pay with credit
                or debit card.
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg font-medium leading-6 text-gray-900">
                Do you offer a free trial?
              </dt>
              <dd className="text-base leading-6 text-gray-500">
                Of course! You can signup for a free account and see whether
                it's right for you. You can sign up for that above.
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg font-medium leading-6 text-gray-900">
                How many registrar can I use?
              </dt>
              <dd className="text-base leading-6 text-gray-500">
                You have no limits on registrars! You can add all registrars you
                want. There are limits only on the number of domains based on
                your subscription!
              </dd>
            </div>
            <div className="space-y-2">
              <dt className="text-lg font-medium leading-6 text-gray-900">
                Do you have any other question?
              </dt>
              <dd className="text-base leading-6 text-gray-500">
                Feel free to contact us! Send an email support@getmomento.io.
                We'll be glad to answer your questions!
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

export default FAQ
