import React from "react"

const CTASection = ({ title, description }) => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <div className="font-extrabold tracking-tight text-gray-900 ">
          <h3 className="block text-3xl md:text-4xl">{title}</h3>
          <p className="block text-blue-600 text-2xl md:text-3xl">
            {description}
          </p>
        </div>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
            >
              Замовити
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <a
              href="#about"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
            >
              Детальніше
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
