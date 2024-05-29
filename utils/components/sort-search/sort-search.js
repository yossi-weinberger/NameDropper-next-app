


import "./sort-search.css";
export function Sort_search({ sortBy, setSortBy, setSearch }) {
  return (
    <div className="toolbar">     
      <input
        className="toolbar-element input"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

{/* <select
        className="toolbar-element select"
        value={sortBy}
        onChange={(e) => setSortBy(parseInt(e.target.value))}
      >
        <option value={0}>abc</option>
        <option value={1}>cba</option>
        <option value={2}>price from cheap</option>
        <option value={3}>price from high</option>
      </select> */}