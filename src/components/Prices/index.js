import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    contentfulPrices {
      title
      description
      prices {
        title
        description
        price
        color
      }
    }
  }
`
const Prices = () => {
  const data = useStaticQuery(query)

  const pricesList = data.contentfulPrices
  const { title, description, prices } = pricesList

  return (
    <>
      <section id="prices" className="pt-20 pb-5 md:py-12 md:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="px-4 sm:px-6 md:px-8 mb-10 lg:text-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br inline-flex items-center justify-center from-blue-200 to-blue-500 mb-8">
              <svg width="20" height="26" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.031 11.574l-3.078 2.489h9.04v2.752H8.27c-.784.59-1.248 1.31-1.248 2.226 0 1.573 1.248 2.426 3.473 2.426 1.9 0 3.536-.915 4.847-2.815l3.605 2.426c-1.963 3.016-5.505 4.52-8.847 4.52-4.388 0-7.661-2.093-7.661-5.567 0-1.116.395-2.294 1.179-3.21H.013V14.07h5.761l3.148-2.49H.012V8.829h11.662c.853-.784 1.248-1.505 1.248-2.358 0-1.373-1.248-2.357-3.148-2.357-1.837 0-3.404 1.047-4.52 2.815L1.78 4.564C3.68 1.55 6.759.044 10.1.044c4.52 0 7.466 2.357 7.466 5.567 0 1.179-.395 2.358-1.047 3.21h3.474v2.753H14.03z"
                  fill="white"
                  fillRule="nonzero"
                />
              </svg>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl leading-none font-extrabold text-gray-900 tracking-tight mb-8">
              {title}
            </h2>
            <p className="text-lg sm:text-2xl font-medium sm:leading-10 space-y-6 mb-6 text-gray-600">
              {description}
            </p>
          </div>
          <div className="grid">
            <div className="relative self-center sm:px-6 md:px-8  md:pt-8 lg:px-0 lg:pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6 xl:gap-8">
                {prices.map((item, index) => (
                  <div key={index}>
                    <div className="w-full h-full relative text-white overflow-hidden rounded-3xl flex shadow-lg">
                      <div
                        className={`w-full flex md:flex-col bg-gradient-to-br from-${item.color}-500 to-${item.color}-300`}
                      >
                        <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                          <h3 className="text-2xl font-semibold mb-2 text-shadow">
                            {item.title}
                          </h3>
                          <p className="font-medium text-2xl text-violet-100 text-shadow mb-4">
                            {item.price}
                          </p>
                          <p className="text-base text-amber-100 text-shadow mb-4">
                            {item.description}
                          </p>
                          <a
                            className={`mt-auto bg-${item.color}-900 bg-opacity-50 hover:bg-opacity-75 transition-colors duration-150 rounded-md py-2 px-4 inline-flex`}
                            href="#contact"
                          >
                            Замовити
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Prices
