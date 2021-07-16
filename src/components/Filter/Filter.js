const Filter = ({ filter, onChange }) => {
  return (
    <input
      type="text"
      value={filter}
      onChange={({ target }) => onChange(target.value)}
      name="filter"
      title=""
      required
    />
  );
};
export default Filter;
