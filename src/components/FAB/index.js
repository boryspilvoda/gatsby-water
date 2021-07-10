import React from "react"

const FAB = () => {
  return (
    <>
      <a
        href="https://telegram.me/vodaDrive"
        target="_blank"
        className="fixed right-3 bottom-24 z-20"
      >
        <div className="relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-50 opacity-75" />
          <div className="flex items-center text-white justify-center shadow-md rounded-full p-2 md:p-2.5 bg-white">
            <svg viewBox="0 0 48 48" className="h-6 w-6">
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
          </div>
        </div>
      </a>

      <a href="tel:0638609190" className="fixed right-3 bottom-5 z-20">
        <div className="relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
          <div className="flex items-center text-white justify-center rounded-full  p-1.5 md:p-2.5 bg-blue-600">
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
          </div>
        </div>
      </a>
    </>
  )
}

export default FAB
