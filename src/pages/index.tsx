import Image from "next/image";
import ProfileImg from "public/profile.jpeg";
export default function Home() {
  return (
    <div className="dark bg-slate-400 py-20 px-5 grid gap-10 xl:place-content-center lg:grid-cols-2 xl:grid-cols-3 min-h-screen">
      <div className="bg-white dark:bg-black p-6 rounded-3xl shadow-2xl">
        <span className="font-semibold text-3xl dark:text-gray-100">
          Select Item
        </span>
        <ul>
          {[1, 2].map((i) => (
            <div key={i} className="flex justify-between my-2">
              <span className="text-gray-500 dark:text-gray-100">
                Grey Chair
              </span>
              <span className="font-semibold dark:text-gray-100">$19</span>
            </div>
          ))}
        </ul>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed dark:text-gray-100">
          <span>Total</span>
          <span className="font-semibold">$106</span>
        </div>
        <div
          className="mt-5 bg-blue-500 dark:bg-black dark:border-2 text-white p-3 text-center 
        rounded-xl w-3/4 mx-auto hover:bg-teal-500 hover:text-black 
        active:bg-yellow-500 focus:bg-red-500 dark:hover:bg-red-500"
        >
          Checkout
        </div>
      </div>
      <div className="bg-white overflow-hidden rounded-2xl shadow-2xl group">
        <div className="portrait:bg-indigo-500 landscape:bg-teal-500 flex justify-between p-6 pb-14 lg:pb-32">
          <span className="text-white text-2xl">Profile</span>
          <span>Cart</span>
        </div>
        <div className="bg-white rounded-3xl p-6 relative -top-5">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 bg-red-400 rounded-full group-hover:bg-red-300 transition-colors" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-medium">$2,310</span>
            </div>
          </div>
          <div className="relative flex flex-col items-center -mt-16 -mb-5">
            <span className="text-lg font-medium">Steve Kim</span>
            <span className="text-sm text-gray-500">South Korea</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-2xl lg:col-span-2 xl:col-span-1">
        <div className="flex mb-5 justify-between items-center">
          <span>⬅️</span>
          <div className="space-x-3">
            <span>⭐️ 4.9</span>
            <span className="shadow-md p-2 rounded-md">❤️</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">chair</span>
          <div className="flex justify-between items-center mt-3 mb-5">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 bg-opacity-50 focus:ring-2 ring-offset-1 ring-yellow-500 transition" />
              <button className="w-5 h-5 rounded-full bg-indigo-500 bg-opacity-50 focus:ring-2 ring-offset-1 ring-indigo-500 transition" />
              <button className="w-5 h-5 rounded-full bg-teal-500 bg-opacity-50 focus:ring-2 ring-offset-1 ring-teal-500 transition" />
            </div>
            <div className="flex items-center space-x-5">
              <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 font-medium text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 font-medium text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-2xl">$450</span>
            <button className="bg-blue-500 py-2 px-8 text-center text-xs text-white rounded-lg">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col space-y-2 p-5 bg-white">
        <input
          type="file"
          className="file:transition-colors file:hover:text-purple-400 file:hover:bg-white file:hover:border-purple-400 file:hover:border-2 file:cursor-pointer file:border-0 file:rounded-xl file:px-4 file:text-white file:bg-purple-400"
        />
      </div>
      <div className="flex flex-col space-y-2 p-5">
        <details className="select-none open:text-white open:bg-indigo-400">
          <summary className="cursor-pointer">What is my fav. food.</summary>
          <span className="selection:bg-indigo-600 selection:text-white">
            피자
          </span>
        </details>
      </div>
      <form className="flex flex-col space-y-2 bg-blue-500 p-5">
        <input
          type="text"
          required
          placeholder="Username"
          className="border p-1 peer border-gray-400 rounded"
        />
        <span className="peer-valid:hidden peer-invalid:text-red-500">
          This input is invalid
        </span>
        <input type="submit" value="Login" className="" />
      </form> */}

      {/* <div className="bg-white p-10 rounded-2xl shadow-2xl"></div> */}
    </div>
  );
}
