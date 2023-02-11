import type { NextPage } from "next";

const ChatDetail: NextPage = () => {
  return (
    <div className="py-10 px-4 space-y-4">
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-300" />
        <div className="w-1/2 text-sm text-gray-700 flex items-center border border-gray-300 rounded-md p-2">
          <p>Hi how much are you selling them for?</p>
        </div>
      </div>
      <div className="flex flex-row-reverse space-x-2 space-x-reverse">
        <div className="w-8 h-8 rounded-full bg-slate-300" />
        <div className="w-1/2 text-sm text-gray-700 flex items-center border border-gray-300 rounded-md p-2">
          I want ￦20,000
        </div>
      </div>
      <div className="flex items-start space-x-2">
        <div className="w-8 h-8 rounded-full bg-slate-300" />
        <div className="w-1/2 text-sm text-gray-700 flex items-center border border-gray-300 rounded-md p-2">
          미쳤어
        </div>
      </div>
      <div className="fixed w-full mx-auto max-w-md bottom-2 inset-x-0">
        <div className="relative flex items-center">
          <input
            type="text"
            className="shadow-sm pr-12 rounded-full w-full border-gray-300 focus:ring-orange-500 focus:outline-none focus:border-orange-500"
          />
          <div className="absolute right-0 pr-1.5 inset-y-0 flex py-1.5">
            <button className="flex focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 items-center bg-orange-500 rounded-full px-3 hover:bg-orange-600 text-sm text-white">
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatDetail;
