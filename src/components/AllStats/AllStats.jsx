import React, { useEffect } from "react";
import StatCard from "./StatCard/StatCard";
import DatePicker from "../UI/DatePicker/DatePicker";

import { useDispatch, useSelector } from "react-redux";
import { getAllData } from "../../features/dashboard/dashboard";

const AllStats = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.dashboard.data);

  useEffect(() => {
    dispatch(getAllData());
  }, []);

  return (
    <section className="w-full flex gap-6 mt-8">
      <div className="bg-space w-full rounded-[20px] py-[46px] px-[42px]">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-white font-semibold text-[32px]">
              {data ? data.cases : 0}
            </p>
            <span className="text-neon font-normal text-xs">
              Total Coronavirus Cases
            </span>
          </div>
          <DatePicker />
        </div>
        <div className="flex justify-between mt-[55px]">
          <div>
            <p className="text-white font-semibold text-[32px]">
              {data ? data.active : 0}
            </p>
            <span className="text-neon font-normal text-xs">Active Cases</span>
          </div>
          <div>
            <p className="text-white font-semibold text-[32px]">
              {data ? data.todayCases : 0}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full gap-5">
        <StatCard value={data ? data.deaths : 0} subtitle="Deaths" />
        <StatCard value={data ? data.recovered : 0} subtitle="Recovered" />
      </div>
    </section>
  );
};

export default AllStats;
