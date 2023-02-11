import { NextPage } from "next";

const Create: NextPage = () => {
  return (
    <div className="px-4 py-10 space-y-5">
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
        Go live
      </button>
    </div>
  );
};

export default Create;
