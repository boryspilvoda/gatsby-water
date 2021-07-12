import React, { useState, Fragment } from "react"
import { Transition } from "@headlessui/react"
import { useForm } from "react-hook-form"

const Form = () => {
  const [notify, showNotify] = useState(false)
  const [hasError, showHasError] = useState(false)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const url =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdv6MvQ6K3IxTAtSLErzygoCgRLhCrjw0DGQBGimo49F_Frww/formResponse"

  const clearForm = () => {
    const form = document.getElementById("form")
    const inputs = form.getElementsByTagName("input")
    return [...inputs].map(item => (item.value = ""))
  }

  const _handleSubmit = e => {
    fetch(url, {
      method: "POST",
      mode: "no-cors",
      header: {
        "Content-Type": "application/json",
      },
      body: getInputData(),
    })
      .then(data => {
        showNotify(true)
        clearForm()
        setTimeout(() => showNotify(false), 3000)
      })
      .catch(err => {
        console.error(err)
        setTimeout(() => showHasError(false), 3000)
      })
  }

  function getInputData() {
    let dataToPost = new FormData()

    dataToPost.append(
      "entry.632876128",
      document.querySelector("#first-name").value
    )
    dataToPost.append("entry.1370952437", document.querySelector("#tel").value)
    dataToPost.append(
      "entry.1033283018",
      document.querySelector("#street-address").value
    )
    dataToPost.append(
      "entry.276746499",
      document.querySelector("#bottles").value
    )

    return dataToPost
  }

  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="mt-5 md:mt-0">
          <form
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdv6MvQ6K3IxTAtSLErzygoCgRLhCrjw0DGQBGimo49F_Frww/formResponse"
            method="POST"
            onSubmit={handleSubmit(_handleSubmit)}
            id="form"
          >
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <h3 className="text-4xl font-medium leading-6 pb-1 bg-clip-text bg-gradient-to-br text-transparent from-blue-600 to-blue-400">
                  Онлайн замовлення
                </h3>
                <p className="mt-5 text-sm text-gray-600 mb-5">
                  Заповніть форму та очікуйте на дзвінок для підтвердження
                  замовлення.
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
                      {...register("firstName", {
                        required: false,
                        maxLength: 20,
                        pattern: /^[a-zA-Z \u0400-\u04FF]*$/,
                      })}
                    />

                    <span className="text-red-600">
                      {errors.firstName?.type === "required" && "Введіть ім'я"}
                    </span>
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
                      placeholder="+380 (XX) XXX-XX-XX"
                      id="tel"
                      autoComplete="tel"
                      className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      {...register("tel", {
                        required: true,
                        pattern: /^\+?3?8?(0\d{9})$/,
                      })}
                    />

                    <span className="text-red-600">
                      {errors.tel?.type === "required" && "Введіть телефон"}
                      {errors.tel?.type === "pattern" &&
                        "Формат +380 (XX) XXX-XX-XX"}
                    </span>
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
                      {...register("address", {
                        required: true,
                      })}
                    />

                    <span className="text-red-600">
                      {errors.address?.type === "required" && "Введіть адресу"}
                    </span>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="bottles"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Кількість бутлів
                    </label>
                    <select
                      defaultValue={"1"}
                      id="bottles"
                      name="entry.276746499"
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
      <Transition
        show={notify}
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="fixed right-4 top-24 z-20">
          <div className="flex items-center shadow-md justify-between p-2 border-l-8 sm:py-4 border-green-500 bg-white text-green-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Дякуємо за ваше замовлення !</span>
          </div>
        </div>
      </Transition>
      <Transition
        show={hasError}
        as={Fragment}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="fixed right-4 top-24 z-20">
          <div className="flex items-center shadow-md justify-between p-2 border-l-8 sm:py-4 border-red-500 bg-white text-red-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Виникла помилка !</span>
          </div>
        </div>
      </Transition>
    </>
  )
}

export default Form
