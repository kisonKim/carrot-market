import Layout from "@/components/layout";
import { NextPage } from "next";

const Stream: NextPage = () => {
  return (
    <Layout title="라이브" hasTabBar>
      <div className="divide-y-[1.5px] space-y-4">
        {new Array(5).fill(1).map((item, idx) => (
          <div className="pt-4 px-4" key={idx}>
            <div className="w-full rounded-md shadow-sm bg-slate-300 aspect-video" />
            <h3 className="text-gray-700 text-xl font-bold mt-2">{`Let's try potatoes`}</h3>
            <p className="text-gray-500 font-sm italic">
              This is the live stream that you nerver seen before!
            </p>
          </div>
        ))}
        <button className="fixed border-transparent bottom-24 right-5 bg-orange-400 rounded-full p-4 shadow-xl text-white hover:bg-orange-500 cursor-pointer transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
        </button>
      </div>
    </Layout>
  );
};

export default Stream;
