import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Form from "../Form"
const query = graphql`
  {
    contentfulHero {
      Image {
        gatsbyImageData(placeholder: TRACED_SVG)
        title
      }
      title
      description
    }
  }
`
const Contact = () => {
  return (
    <section id="contact" className="py-6 pt-20 mt-10 md:py-12 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="lg:text-center mb-10 md:mb-20">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br inline-flex items-center justify-center from-blue-200 to-blue-500 mb-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
              />
            </svg>
          </div>
          <h2 className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Замовляйте корисну воду вже зараз!
          </h2>
          <p className="mt-4 max-w-2xl text-l text-gray-600 lg:mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            autem consectetur distinctio doloremque hic labore, laborum magni
            nihil rerum sunt. Alias amet aperiam dolores impedit maiores
            obcaecati omnis quisquam veritatis.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Form />
          <div>
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md">
              <h3 className="text-4xl font-bold">Контакти</h3>
              <p className="text-gray-600">
                Fill in the form to start a conversation
              </p>
              <div className="flex items-start align-middle mt-2">
                <a
                  href="https://goo.gl/maps/UuTRKEAQWv1HfUPz6"
                  className="h-6 flex items-center sm:h-7 text-blue-400 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </a>
                <p className="ml-2 ">м.Бориспыіль, вул. Бежівка, 4</p>
              </div>
              <div className="flex items-start align-middle mt-2">
                <a
                  href="tel:0638609190"
                  className="h-6 flex items-center sm:h-7 text-blue-400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </a>
                <p className="ml-2">+380638609190</p>
              </div>
              <div className="mt-2">
                <p className="pt-2 pb-2 font-bold">Графік роботи магазину:</p>
                <div className="flex items-start align-middle mt-2">
                  <span className="h-6 flex items-center sm:h-7 text-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                  <span className="ml-2">Пн-Нд 8:00 - 22:00</span>
                </div>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1112.0525716598327!2d30.9562302054667!3d50.34813732258937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4e94078468167%3A0x854ba91fe21dbdc1!2sZdorova%20Voda!5e0!3m2!1sen!2sua!4v1625834876761!5m2!1sen!2sua"
                width="100%"
                height="400"
                allowFullScreen=""
                loading="lazy"
                title="Voda Drive map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
