import "./SearchResult.css";

export const SearchResult = ({ result, username }) => {
  return (
	<div class="card" onClick={(e) => alert(`You selected ${result}!`)}>
      <div class="face face1">
        <div class="content">
          <p>{username}</p> 
          
        </div>
      </div>
      <div class="face face2">
        <p class="content2">{result}</p>
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
