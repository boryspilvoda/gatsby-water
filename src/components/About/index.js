import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import CTASection from "../CTASection"
const query = graphql`
  {
    contentfulAbout {
      primaryContent {
        primaryContent
      }
      secondaryContent {
        secondaryContent
      }
      title
      description
      ref {
        title
        description
      }
      subTitle
    }
  }
`
const About = () => {
  const data = useStaticQuery(query)

  const features = data.contentfulAbout
  const {
    title,
    description,
    subTitle,
    primaryContent,
    secondaryContent,
    ref,
  } = features

  return (
    <>
      <section id="about" className="pt-20 pb-5 md:py-12 md:pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              {subTitle}
            </h2>
            <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl">
              {title}
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 lg:mx-auto">
              {description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mt-10 items-start gap-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10">
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {primaryContent.primaryContent}
              </p>
              <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {secondaryContent.secondaryContent}
              </p>
            </dl>

            <div className="max-w-xs mx-auto">
              <StaticImage
                src="../../images/9-2.svg"
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

export default About
