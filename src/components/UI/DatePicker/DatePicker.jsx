import { AiOutlineCalendar } from "react-icons/ai";

const DatePicker = () => {
  return (
    <div>
      <div className="w-fit border border-borderGray flex items-center gap-3 rounded py-1 px-[10px]">
        <span className="text-gray">All Time</span>
        <AiOutlineCalendar color="#41CBE2" />
        <input type="date" className="hidden" />
      </div>
    </div>
  );
};

export default DatePicker;
