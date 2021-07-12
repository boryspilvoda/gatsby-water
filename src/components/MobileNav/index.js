import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const MobileNav = () => {
  return (
    <aside
      id="sidenav-open"
      className="absolute h-screen top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden bg-white shadow-md"
    >
      <div className="rounded-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div className="px-5 pt-4 flex items-center justify-between">
          <a href="#hero" className="h-8 w-24">
            <StaticImage
              src="../../images/logo.png"
              quality={95}
              formats={["PNG", "AUTO", "WEBP"]}
              alt="Здорова Вода"
            />
          </a>
          <div className="-mr-2">
            <a
              href="#"
              id="sidenav-close"
              title="Close Menu"
              aria-label="Close Menu"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Особливості
          </a>

          <a
            href="#prices"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Ціни
          </a>

          <a
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
          >
            Контакти
          </a>
        </div>
        <a
          href="#contact"
          className="block w-full px-5 py-3 rounded-md text-center font-medium text-blue-700 bg-blue-100 hover:bg-blue-200"
        >
          Замовити
        </a>
        <a
          href="tel:0638609190"
          className="block w-full px-5 py-3 rounded-md text-center font-medium text-white bg-blue-600 hover:bg-blue-700 mt-5"
        >
          0638609190
        </a>
      </div>
    </aside>
  )
}

export default MobileNav
