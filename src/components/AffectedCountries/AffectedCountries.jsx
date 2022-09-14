import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

import Countries from "../../tables/Countries/Countries";

const AffectedCountries = () => {
  return (
    <section className="bg-space py-[48px] px-[32px] rounded-[20px] mt-[38px]">
      <div className="flex items-center justify-between">
        <h2 className="text-white font-semibold text-[32px]">
          All affected countries
        </h2>
        <div className="flex items-center border border-white rounded-[50px] py-2 pl-8 pr-2 2xl:w-[512px]">
          <input
            type="search"
            className="bg-transparent w-full text-white border-none outline-none"
            placeholder="Search by country"
          />
          <div className="h-9 w-9 bg-blue flex items-center justify-center rounded-full">
            <AiOutlineSearch />
          </div>
        </div>
      </div>
      <div className="mt-[50px]">
        <Countries />
      </div>
    </section>
  );
};

export default AffectedCountries;
