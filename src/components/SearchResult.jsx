import "./SearchResult.css";

export const SearchResult = ({ result, username }) => {
  return (
	<div className="card" onClick={(e) => alert(`You selected ${result}!`)}>
      <div className="face face1">
        <div className="content">
          <p>{username}</p> 
          
        </div>
      </div>
      <div className="face face2">
        <p className="content2">{result}</p>
      </div>
    </div>
    /*<div
      className="search-result results-list-manual"
      onClick={(e) => alert(`You selected ${result}!`)}
    >
      {result}
    </div>*/
  );
};
