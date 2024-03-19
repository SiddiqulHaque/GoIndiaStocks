import React from "react";
import DiscussionContainer from "./DiscussionContainer";
import MarketContainer from "./MarketContainer";

const TabContainer = ({ selected }) => {
  return (
    <div className={`md:hidden w-[100%] grid-cols-1 h-full grid`}>
      {selected === 0 ? (
        <DiscussionContainer className="w-full" />
      ) : (
        <MarketContainer className="w-full" />
      )}
    </div>
  );
};

export default TabContainer;
