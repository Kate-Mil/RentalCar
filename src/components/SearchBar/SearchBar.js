export const SearchBar = () => {
  return (
    <form>
      <input
        type="text"
        autoComplete="off"
        name="query"
        autoFocus
        placeholder="Enter the text"
      />
      <input
        type="text"
        autoComplete="off"
        name="query"
        autoFocus
        placeholder="To"
      />
      <input
        type="text"
        autoComplete="off"
        name="query"
        autoFocus
        placeholder="From"
      />
      <input
        type="text"
        autoComplete="off"
        name="query"
        autoFocus
        placeholder="To"
      />

      <button type="submit">Search</button>
    </form>
  );
};
