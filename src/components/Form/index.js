import React from "react"

const Form = () => {
  return (
    <div className="mt-10 sm:mt-0">
      <div className="mt-5 md:mt-0">
        <form
          action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdv6MvQ6K3IxTAtSLErzygoCgRLhCrjw0DGQBGimo49F_Frww/formResponse"
          method="POST"
        >
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <h3 className="text-4xl font-medium leading-6 text-gray-900">
                Онлайн замовлення
              </h3>
              <p className="mt-5 text-sm text-gray-600 mb-5">
                Заповніть форму та очікуйте на дзвінок.
              </p>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Ім'я
                  </label>
                  <input
                    type="text"
                    name="entry.632876128"
                    id="first-name"
                    autoComplete="given-name"
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="tel"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Телефон
                  </label>
                  <input
                    type="text"
                    name="entry.1370952437"
                    id="tel"
                    autoComplete="tel"
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Адреса
                  </label>
                  <input
                    type="text"
                    name="entry.1033283018"
                    id="street-address"
                    autoComplete="street-address"
                    className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="bottles"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Кількість бутлів
                  </label>
                  <select
                    id="bottles"
                    name="entry.276746499"
                    autoComplete="bottles"
                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>Більше</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Відправити
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Form
