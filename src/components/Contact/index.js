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
            Ви можете зробити замовлення використовуючи онлайн форму, месенджер,
            чи за номером телефону!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <Form />
          <div>
            <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md">
              <h3 className="text-3xl md:text-4xl font-bold bg-clip-text bg-gradient-to-br text-transparent from-blue-600 to-blue-400">
                Контакти
              </h3>

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

              <div className="flex items-start align-middle mt-2">
                <a
                  href="https://telegram.me/vodaDrive"
                  target="_blank"
                  className="text-gray-600  p-1 "
                >
                  <svg viewBox="0 0 48 48" className="w-10 h-10">
                    <path
                      fill="#29b6f6"
                      d="M24 4a20 20 0 1 0 0 40 20 20 0 1 0 0-40z"
                    />
                    <path
                      fill="#fff"
                      d="M33.95 15l-3.746 19.126s-.161.874-1.245.874c-.576 0-.873-.274-.873-.274l-8.114-6.733-3.97-2.001-5.095-1.355S10 24.375 10 23.625c0-.625.933-.923.933-.923l21.316-8.468c-.001-.001.651-.235 1.126-.234.292 0 .625.125.625.5 0 .25-.05.5-.05.5z"
                    />
                    <path
                      fill="#b0bec5"
                      d="M23 30.505l-3.426 3.374s-.149.115-.348.12c-.069.002-.143-.009-.219-.043l.964-5.965L23 30.505z"
                    />
                    <path
                      fill="#cfd8dc"
                      d="M29.897 18.196a.5.5 0 0 0-.701-.093L16 26l2.427 6.912c.322 1.021.58 1.045.58 1.045l.964-5.965 9.832-9.096a.5.5 0 0 0 .094-.7z"
                    />
                  </svg>
                </a>
                <a
                  href="viber://chat?number=+380638609190"
                  target="_blank"
                  className="text-gray-600  p-1 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    className="w-10 h-10"
                  >
                    <path
                      fill="#fff"
                      d="M24 5C21.361 5 13.33 5 8.89 9.054 6.246 11.688 5 15.494 5 21v3c0 5.506 1.246 9.312 3.921 11.976 1.332 1.215 3.148 2.186 5.368 2.857l.711.214v5.328c0 .625.181.625.241.625.123 0 .32-.039.694-.371.09-.089.75-.803 3.96-4.399l.324-.363.485.031c1.075.067 2.184.102 3.296.102 2.639 0 10.67 0 15.11-4.055C41.753 33.311 43 29.505 43 24v-3c0-5.506-1.246-9.312-3.921-11.976C34.67 5 26.639 5 24 5z"
                    />
                    <path
                      d="M33.451 28.854c-1.111-.936-1.624-1.219-3.158-2.14-.639-.383-1.613-.714-2.124-.714-.349 0-.767.267-1.023.523-.656.656-.871 1.477-2.021 1.477-1.125 0-3.09-1.145-4.5-2.625C19.145 23.965 18 22 18 20.875c0-1.15.806-1.38 1.462-2.037.256-.255.538-.673.538-1.022 0-.511-.331-1.47-.714-2.109-.921-1.535-1.203-2.048-2.14-3.158-.317-.376-.678-.548-1.056-.549-.639-.001-1.478.316-2.046.739-.854.637-1.747 1.504-1.986 2.584a2.57 2.57 0 0 0-.057.443c-.046 1.125.396 2.267.873 3.234 1.123 2.279 2.609 4.485 4.226 6.455.517.63 1.08 1.216 1.663 1.782l1.782 1.663c1.97 1.617 4.176 3.103 6.455 4.226.958.472 2.086.906 3.2.874a2.59 2.59 0 0 0 .477-.058c1.08-.238 1.947-1.132 2.584-1.986.423-.568.74-1.406.739-2.046-.001-.378-.173-.739-.549-1.056zM34 24a1 1 0 0 1-1-1v-1c0-4.962-4.038-9-9-9a1 1 0 1 1 0-2c6.065 0 11 4.935 11 11v1a1 1 0 0 1-1 1zm-6.142-2a1 1 0 0 1-.967-.748 2.99 2.99 0 0 0-2.141-2.142 1 1 0 1 1 .501-1.937c1.748.453 3.118 1.822 3.575 3.574a1 1 0 0 1-.715 1.22 1.01 1.01 0 0 1-.253.033zM31 23a1 1 0 0 1-1-1c0-3.188-2.494-5.818-5.678-5.986a1 1 0 0 1-.946-1.051c.029-.552.508-.976 1.051-.946C28.674 14.241 32 17.748 32 22a1 1 0 0 1-1 1zM24 4c-4.5 0-11.512.414-15.784 4.316C5.196 11.323 4 15.541 4 21l.002 1.5L4 23.999c0 5.459 1.196 9.677 4.216 12.684 1.626 1.485 3.654 2.462 5.784 3.106v4.586C14 45.971 15.049 46 15.241 46h.009c.494-.002.921-.244 1.349-.624.161-.143 2.02-2.215 4.042-4.481a52.98 52.98 0 0 0 3.358.105c4.5 0 11.511-.415 15.784-4.317 3.019-3.006 4.216-7.225 4.216-12.684l-.002-1.5.002-1.5c0-5.459-1.196-9.677-4.216-12.684C35.511 4.414 28.5 4 24 4zm17 19.651v.348c0 4.906-1.045 8.249-3.286 10.512C33.832 38 26.437 38 23.999 38c-.742 0-1.946-.001-3.367-.1L16 43.083V37.22c-2.104-.505-4.183-1.333-5.714-2.708C8.045 32.248 7 28.905 7 23.999v-.348l.002-1.173L7 21.348V21c0-4.906 1.045-8.249 3.286-10.512C14.167 6.999 21.563 6.999 24 6.999s9.832 0 13.713 3.489c2.242 2.263 3.286 5.606 3.286 10.512v.348l-.002 1.173.003 1.13z"
                      fill="#7e57c2"
                    />
                  </svg>
                </a>
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
