import React from "react";
import { useDispatch } from "react-redux";
import { toggleDrawer } from "../../features/drawer/drawerSlice";

const CountryRow = ({ defaultRow }) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(toggleDrawer());
  };

  return (
    <tr className="border-b border-[#3D3C41] border-opacity-50">
      <td className="py-4">
        <span
          className="text-white font-normal text-base cursor-pointer"
          onClick={onClickHandler}
        >
          World
        </span>
      </td>
      <td className="py-4">
        <span className="text-white font-normal text-base">608,960,923</span>
      </td>
      <td className="py-4">
        <span className="text-yellow font-normal text-base">+349,326</span>
      </td>
      <td className="py-4">
        <span className="text-white font-normal text-base">6,499,039</span>
      </td>
      <td className="py-4">
        <span className="text-red font-normal text-base">+642</span>
      </td>
      <td className="py-4">
        <span className="text-white font-normal text-base">585,263,730</span>
      </td>
      <td className="py-4">
        <span className="text-green font-normal text-base">+407,441</span>
      </td>
      <td className="py-4">
        <span className="text-white font-normal text-base">17,198,154</span>
      </td>
      <td className="py-4">
        <span className="text-white font-normal text-base">42,733</span>
      </td>
    </tr>
  );
};

export default CountryRow;
