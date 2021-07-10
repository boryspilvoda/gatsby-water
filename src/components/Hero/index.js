import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import MobileNav from "../MobileNav"
import Nav from "../Nav"
const query = graphql`
  {
    contentfulHero {
      Image {
        gatsbyImageData(placeholder: TRACED_SVG)
        title
      }
      title
      titleAccent
      description
    }
  }
`
const Hero = () => {
  const data = useStaticQuery(query)

  const hero = data.contentfulHero
  const { title, titleAccent, description, Image } = hero
  const pathToImage = getImage(Image)

  return (
    <section id="hero" className="relative overflow-hidden ">
      <div className="md:max-w-7xl mx-auto flex w-full">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 w-full">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:mt-20 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold font-display text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline bg-clip-text bg-gradient-to-br text-transparent from-blue-600 to-blue-400">
                  {titleAccent}
                </span>
                <span className="block xl:inline">{title}</span>
              </h1>
              <p className="mt-3 font-body text-base text-gray-600 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                {description}
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="#contact"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                  >
                    Замовити
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="#about"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10"
                  >
                    Детальніше
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <GatsbyImage
          image={pathToImage}
          alt={Image.title}
          className="h-56 w-full object-contain sm:h-72 md:h-96 lg:w-full lg:h-full"
        />
      </div>
    </section>
  )
}

export default Hero
