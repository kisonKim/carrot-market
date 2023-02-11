import type { NextPage } from "next";

const Upload: NextPage = () => {
  return (
    <div className="px-4 py-16 space-y-4">
      <div>
        <label className="flex cursor-pointer justify-center text-gray-400 border-2 border-gray-400 hover:border-orange-400 hover:text-orange-400 border-dashed py-32 rounded-md">
          <svg
            className="h-12 w-12"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <input className="hidden" type="file" />
        </label>
      </div>
      <div>
        <label htmlFor="price" className="text-sm font-medium text-gray-700">
          Name
        </label>
        <div className="rounded-md relative shadow-sm flex items-center">
          <input
            className="appearance-none 
                w-full py-2 pl-7 pr-12 border 
                border-gray-300 rounded-md
                shadow-sm placeholder-gray-400 
                focus:outline-none 
                focus:ring-orange-500
                focus:border-orange-500"
            type="text"
            id="name"
          />
        </div>
      </div>
      <div>
        <label htmlFor="price" className="text-sm font-medium text-gray-700">
          Price
        </label>
        <div className="rounded-md relative shadow-sm flex items-center">
          <div className="absolute pointer-events-none left-0 pl-3 flex items-center justify-center">
            <span className="text-gray-500 text-sm">$</span>
          </div>
          <input
            className="appearance-none 
                w-full py-2 pl-7 pr-12 border 
                border-gray-300 rounded-md
                shadow-sm placeholder-gray-400 
                focus:outline-none 
                focus:ring-orange-500
                focus:border-orange-500"
            type="text"
            id="price"
            placeholder="0.00"
          />
          <div className="absolute pointer-events-none right-0 pr-3 flex items-center justify-center">
            <span className="text-sm text-gray-500">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label
          htmlFor="description"
          className="text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <div>
          <textarea
            id="description"
            className="mt-1 shadow-sm w-full focus:ring-orange-500 focus:outline-none rounded-md border-gray-300 focus:border-orange-500"
            rows={4}
          />
        </div>
      </div>
      <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
        Upload product
      </button>
    </div>
  );
};

export default Upload;
