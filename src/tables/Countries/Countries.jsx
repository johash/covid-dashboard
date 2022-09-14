import ReactPaginate from "react-paginate";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import CountryRow from "./CountryRow";

const Countries = () => {
  return (
    <div>
      <table className="w-full">
        <thead className="mb-2">
          <tr>
            <td>
              <span className="text-white font-normal text-sm opacity-60">
                Country
              </span>
            </td>
            <td>
              <span className="text-white font-normal text-sm opacity-60">
                Total Cases
              </span>
            </td>
            <td>
              <span className="text-white font-normal text-sm opacity-60">
                New Cases
              </span>
            </td>
            <td>
              <span className="text-white font-normal text-sm opacity-60">
                Total Deaths
              </span>
            </td>
            <td>
              <span className="text-white font-normal text-sm opacity-60">
                New Deaths
              </span>
            </td>
            <td>
              <span className="text-white font-normal text-sm opacity-60">
                Total Recovered
              </span>
            </td>
            <td>
              <span className="text-white font-normal text-sm opacity-60">
                New Recovered
              </span>
            </td>
            <td>
              <span className="text-white font-normal text-sm opacity-60">
                Active Cases
              </span>
            </td>
            <td>
              <span className="text-white font-normal text-sm opacity-60">
                Critical
              </span>
            </td>
          </tr>
        </thead>
        <tbody>
          <CountryRow defaultRow={true} />
          <CountryRow />
          <CountryRow />
          <CountryRow />
          <CountryRow />
          <CountryRow />
          <CountryRow />
        </tbody>
      </table>
      <div className="w-full flex items-center justify-center pt-8">
        <ReactPaginate
          className="flex items-center gap-2"
          nextLabel={
            <div className="bg-[#535465] p-[10px] rounded">
              <MdArrowForwardIos color="#ffffff" />
            </div>
          }
          // onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          // pageCount={pageCount}
          previousLabel={
            <div className="bg-[#535465] p-[10px] rounded">
              <MdArrowBackIosNew color="#ffffff" />
            </div>
          }
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default Countries;
