"use client";
import Sidebar from "@/Components/Sidebar";
import { useState } from "react";
import DiscussionContainer from "@/Components/DiscussionContainer";
import MarketContainer from "@/Components/MarketContainer";
import TabContainer from "@/Components/TabContainer";

export default function Home() {
  const [selected, setSelected] = useState(0);
  const tabItems = ["discussion fourm", "market stories"];
  return (
    <main className=" h-screen flex">
      <div className=" flex h-full">
        <Sidebar />
        <div className="flex flex-col w-[100%] ">
          <div className="flex text-center justify-stretch  md:hidden w-full">
            {tabItems.map((item, i) => (
              <button
                key={i}
                className={`flex-1 p-3 text-white capitalize hover:bg-blue-900   bg-blue-950 border-b-2  ${
                  selected === i ? "border-red-500 bg-accent-hover" : ""
                }`}
                onClick={() => setSelected(i)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="w-[100%] md:flex hidden  text-black py-4 text-2xl font-semibold ">
            <div className="  w-[50%] flex justify-center items-center py-2  cursor-pointer ">
              Discussion Forum
            </div>
            <div className=" py-2  w-[50%] flex justify-center items-center cursor-pointer">
              Market Stories
            </div>
          </div>
          <div
            className={`md:grid md:grid-cols-[65%_30%] w-[100%] grid-cols-1 h-full hidden`}
          >
            <DiscussionContainer />
            <MarketContainer />
          </div>
          <TabContainer selected={selected}/>
        </div>
      </div>
    </main>
  );
}
