import './repoFilter.css';

function RepoFilter({ filters, callback }) {
  return (
    <div className="filter__container">
      {filters.map((filter, index) => (
        <span
          className="filter__item"
          key={`filter-${index}`}
          onClick={() => callback(filter)}>
          {filter}
        </span>
      ))}
    </div>
  );
}

export default RepoFilter;
