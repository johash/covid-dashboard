import DatePicker from "../../UI/DatePicker/DatePicker";

const StatCard = ({ value, subtitle }) => {
  return (
    <div className="bg-space rounded-[20px] py-[32px] px-[42px] flex items-center justify-between">
      <div>
        <p className="text-white font-semibold text-[32px]">{value}</p>
        <span className="text-neon font-normal text-xs">{subtitle}</span>
      </div>
      <DatePicker />
    </div>
  );
};

export default StatCard;
