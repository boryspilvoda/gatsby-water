import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    contentfulFaq {
      title
      description
      items {
        title
        description
      }
    }
  }
`

const FAQ = () => {
  const data = useStaticQuery(query)

  const faq = data.contentfulFaq
  const { title, description, items } = faq
  return (
    <section className="py-6 mt-10 md:py-12 md:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold leading-9 text-center text-gray-900">
          {title}
        </h2>
        <div className="mt-12">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2  md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
            {items.map((item, index) => (
              <div key={index} className="space-y-2">
                <dt className="text-lg font-medium leading-6 text-gray-900">
                  {item.title}
                </dt>
                <dd className="text-base leading-6 text-gray-600">
                  {item.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export default FAQ
