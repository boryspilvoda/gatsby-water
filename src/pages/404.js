import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <section className="flex items-center h-full p-16 bg-coolGray-50 text-coolGray-800">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-coolGray-400">
            <span className="sr-only">Error </span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl text-coolGray-600">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <a
            href="#"
            className="px-8 py-3 font-semibold rounded bg-violet-600 text-coolGray-50"
          >
            Back to homepage
          </a>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
