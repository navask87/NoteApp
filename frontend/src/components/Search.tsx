import { MdSearch } from "react-icons/md";

interface Searchprops {
  handleSearch: (text: string) => void;
}
export const Search = ({ handleSearch }: Searchprops) => {
  return (
    <div className="search">
      {MdSearch({ className: "search-icons", size: "1.3rem" })}
      <input
        type="text"
        placeholder="Type to search ..."
        onChange={(event) => handleSearch(event.target.value)}
      ></input>
    </div>
  );
};
