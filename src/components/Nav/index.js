import React from "react"
import { StaticImage } from "gatsby-plugin-image"
const Nav = () => {
  return (
    <nav
      className="relative flex items-center justify-between lg:justify-start py-2 px-6"
      aria-label="Global"
    >
      <div className="flex items-center w-full justify-between">
        <a className="w-28" href="/">
          <StaticImage
            src="../../images/logo.png"
            quality={95}
            placeholder={"TRACED_SVG"}
            formats={["PNG", "AUTO", "WEBP"]}
            alt="Здорова Вода"
          />
        </a>
        <div className="-mr-2 flex items-center md:hidden">
          <a
            href="#sidenav-open"
            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            id="sidenav-button"
            title="Open Menu"
            aria-label="Open Menu"
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="hidden md:block md:ml-10 md:pr-0 md:space-x-6 w-5/6">
        <a
          href="#about"
          className="font-medium text-gray-600 hover:text-gray-900 whitespace-nowrap"
        >
          Про нас
        </a>

        <a
          href="#features"
          className="font-medium text-gray-600 hover:text-gray-900"
        >
          Особливості
        </a>

        <a
          href="#prices"
          className="font-medium text-gray-600 hover:text-gray-900"
        >
          Ціни
        </a>
        <a
          href="#contact"
          className="font-medium text-gray-600 hover:text-gray-900"
        >
          Контакти
        </a>

        <a
          href="tel:0638609190"
          className="font-medium text-blue-600 hover:text-blue-500"
        >
          0638609190
        </a>
      </div>
    </nav>
  )
}

export default Nav
