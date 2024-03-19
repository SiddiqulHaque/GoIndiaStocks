import { Fdata } from "@/Data/forum";
import React from "react";
import Discussion from "@/Components/discussion";

const DiscussionContainer = () => {
  return (
    <div
      className={`flex flex-col  items-center md:overflow-y-scroll md:h-[85vh] flex-grow py-6 px-4 md:pr-8 gap-16 md:static`}
    >
      {Fdata.map((data) => (
        <Discussion data={data} />
      ))}
    </div>
  );
};

export default DiscussionContainer;
