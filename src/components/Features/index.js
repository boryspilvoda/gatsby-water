import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import CTASection from "../CTASection"
const query = graphql`
  {
    contentfulFeatures {
      title
      description
      feature
      ref {
        title
        description
      }
      subTitle
    }
  }
`
const Features = () => {
  const data = useStaticQuery(query)

  const features = data.contentfulFeatures
  const { title, subTitle, description, feature, ref } = features

  return (
    <>
      <section id="features" className="pt-20 pb-5 md:py-12 md:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br inline-flex items-center justify-center from-blue-200 to-blue-500 mb-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="white"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>

            <h2 className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl text-l text-gray-600 lg:mx-auto">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10">
              {feature.map((item, index) => (
                <div key={index} className="relative">
                  <dt className="flex items-center">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white shadow  transform transition duration-200 hover:scale-110">
                      {index + 1}
                    </div>
                    <p className="ml-5 text-lg leading-6 font-medium text-gray-900">
                      {item}
                    </p>
                  </dt>
                </div>
              ))}
            </dl>

            <div className="max-w-2xl mx-auto">
              <StaticImage
                src="../../images/9.svg"
                formats={["SVG", "AUTO", "WEBP"]}
                alt="9 етапів очищення"
              />
            </div>
          </div>
        </div>
      </section>
      <CTASection {...ref} />
    </>
  )
}

export default Features
