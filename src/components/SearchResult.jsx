import "./SearchResult.css";

export const SearchResult = ({ result }) => {
  return (
    <div
      className="search-result results-list-manual"
      onClick={(e) => alert(`You selected ${result}!`)}
    >
      {result}
    </div>
  );
};
