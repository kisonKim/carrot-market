import { NextPage } from "next";

const Write: NextPage = () => {
  return (
    <div className="px-4 py-10">
      <textarea
        id="description"
        className="mt-1 shadow-sm w-full focus:ring-orange-500 focus:outline-none rounded-md border-gray-300 focus:border-orange-500"
        placeholder="Ask a question!"
        rows={4}
      />
      <button className="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none  focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
        Submit
      </button>
    </div>
  );
};

export default Write;
