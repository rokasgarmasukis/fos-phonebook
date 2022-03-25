const Filter = ({ search, setSearch }) => {

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return <input type="text" value={search} onChange={handleSearchChange} />;
};

export default Filter;
