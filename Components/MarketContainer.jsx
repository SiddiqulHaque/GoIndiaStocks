import { Mdata } from "@/Data/market_stories";
import React from "react";

import Market from "@/Components/Market";

const MarketContainer = () => {
  return (
    <div
      className={`flex flex-col  items-center py-6 md:pl-2 md:overflow-y-scroll md:h-[85vh] gap-16 md:static px-4 `}
    >
      {Mdata.map((data) => (
        <Market data={data} />
      ))}
    </div>
  );
};

export default MarketContainer;
