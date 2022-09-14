import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleDrawer } from "../../features/drawer/drawerSlice";
import Donut from "../../charts/Donut";
import Bar from "../../charts/Bar";

const CountryDrawer = () => {
  const isOpen = useSelector((state) => state.drawer.isDrawerOpen);
  const dispatch = useDispatch();
  return (
    <>
      <Drawer
        open={isOpen}
        onClose={() => dispatch(toggleDrawer())}
        direction="right"
        size={526}
        style={{ backgroundColor: "#1D222C" }}
      >
        <div>
          <div className="flex items-center justify-end pt-6 pr-6">
            <IoClose
              className="cursor-pointer"
              size={22}
              color="white"
              onClick={() => dispatch(toggleDrawer())}
            />
          </div>
          <h3 className="font-bold text-[32px] px-10 text-cyan">USA</h3>
          <div className="px-10">
            <div className="mt-7">
              <p className="text-white font-semibold text-[32px]">96,465,126</p>
              <span className="font-normal text-xs text-neon">
                Total Coronavirus Cases
              </span>
            </div>
            <div className="flex items-center justify-between mt-9">
              <div>
                <p className="text-white font-semibold text-[32px]">
                  92,172,274
                </p>
                <span className="font-normal text-xs text-neon">
                  Active Cases
                </span>
              </div>
              <div>
                <p className="text-white font-semibold text-[32px]">
                  1,072,125
                </p>
                <span className="font-normal text-xs text-neon">
                  Closed Cases
                </span>
              </div>
            </div>
          </div>
          <div className="px-10">
            <div className="bg-space rounded-2xl p-5 mt-5">
              <Donut />
            </div>
          </div>
          <div className="px-10 mt-11">
            <h3 className="text-white font-bold text-xs">Deaths</h3>
            <div className="bg-space rounded-2xl p-5 mt-5">
              <Bar />
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default CountryDrawer;
