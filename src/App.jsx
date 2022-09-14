import AllStats from "./components/AllStats/AllStats";
import TotalCases from "./components/TotalCases/TotalCases";
import AffectedCountries from "./components/AffectedCountries/AffectedCountries";
import CountryDrawer from "./components/CountryDrawer/CountryDrawer";

function App() {
  return (
    <div className="w-full px-[118px] py-[76px]">
      <h1 className="text-white font-semibold text-[40px]">
        Global Covid-19 Update
      </h1>
      <AllStats />
      <TotalCases />
      <AffectedCountries />
      <CountryDrawer />
    </div>
  );
}

export default App;
