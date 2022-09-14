import React, { useEffect } from "react";
import Legend from "../../charts/Legend/Legend";
import DatePicker from "../UI/DatePicker/DatePicker";
import SplineAreaChart from "../../charts/SplineArea";

import { useDispatch, useSelector } from "react-redux";
import { getHistorical } from "../../features/dashboard/dashboard";

const TotalCases = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHistorical());
  }, []);
  return (
    <section className="bg-space py-[54px] px-[62px] mt-[38px] rounded-[20px]">
      <div className="flex items-center justify-between">
        <h2 className="text-white font-semibold text-[32px]">
          Total No. of Cases
        </h2>
        <div className="flex items-center gap-8">
          <Legend color="#4166FF" title="Recovered" />
          <Legend color="#716A8E" title="Deaths" />
          <DatePicker />
        </div>
      </div>
      <div className="mt-[25px]">
        <SplineAreaChart />
      </div>
    </section>
  );
};

export default TotalCases;
